# backend/event_listener.py

import json
import os
import asyncio
from web3 import Web3
from supabase import create_client, Client
from dotenv import load_dotenv

# --- SETUP ---
load_dotenv()

# Supabase Connection
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

# Blockchain Connection
saigon_rpc_url: str = os.environ.get("SAIGON_RPC_URL")
web3 = Web3(Web3.WebsocketProvider(saigon_rpc_url))

# Contract Information
contract_address: str = os.environ.get("CONTRACT_ADDRESS")
with open('../smart-contract/artifacts/contracts/Roninmon.sol/Roninmon.json') as f:
    contract_abi = json.load()['abi']

contract = web3.eth.contract(address=contract_address, abi=contract_abi)

# --- DATABASE LOGIC ---

def handle_player_and_nft(owner_address: str, token_id: int, token_uri: str):
    """
    Ensures player and NFT records exist and are linked correctly.
    This function is idempotent (can be run multiple times with the same result).
    """
    print(f"Processing transfer for Token ID: {token_id} to owner: {owner_address}")

    # 1. Find or create the player record
    player_response = supabase.table('players').select('id').eq('wallet_address', owner_address).execute()
    
    if not player_response.data:
        print(f"Player not found. Creating new player for address: {owner_address}")
        player_response = supabase.table('players').insert({"wallet_address": owner_address}).execute()
    
    player_id = player_response.data[0]['id']

    # 2. Find or create the NFT record
    nft_response = supabase.table('nfts').select('id').eq('token_id', token_id).execute()
    nft_id = None

    if not nft_response.data:
        print(f"NFT not found. Creating new NFT for Token ID: {token_id}")
        # This is a new mint, so create the NFT and Monster records
        new_nft_response = supabase.table('nfts').insert({
            "token_id": token_id,
            "token_uri": token_uri,
            "owner_id": player_id
        }).execute()
        nft_id = new_nft_response.data[0]['id']

        # Create the corresponding monster record with default stats
        supabase.table('monsters').insert({"nft_id": nft_id}).execute()
        print(f"Created new monster record for NFT ID: {nft_id}")

    else:
        # NFT already exists, just update the owner
        nft_id = nft_response.data[0]['id']
        print(f"NFT found. Updating owner for Token ID: {token_id}")
        supabase.table('nfts').update({"owner_id": player_id}).eq('id', nft_id).execute()

# --- EVENT LISTENER LOGIC ---

async def log_loop(event_filter, poll_interval):
    print("Listener started. Waiting for new events...")
    while True:
        for event in event_filter.get_new_entries():
            # When a 'Transfer' event is found, call our handler function
            owner = event['args']['to']
            token_id = event['args']['tokenId']
            
            # We need to query the contract to get the tokenURI
            token_uri = contract.functions.tokenURI(token_id).call()
            
            handle_player_and_nft(owner, token_id, token_uri)
            
        await asyncio.sleep(poll_interval)

def main():
    # Create a filter for the 'Transfer' event
    event_filter = contract.events.Transfer.create_filter(fromBlock='latest')
    
    # Start the event listening loop
    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(
            asyncio.gather(
                log_loop(event_filter, 2) # Poll for new events every 2 seconds
            )
        )
    finally:
        loop.close()

if __name__ == "__main__":
    main()