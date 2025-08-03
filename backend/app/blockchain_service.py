# This service will handle all interactions with the Ronin blockchain.
import os
import json
from web3 import Web3
from dotenv import load_dotenv

load_dotenv()

RONIN_RPC_URL = os.getenv("RONIN_RPC_URL")
CONTRACT_ADDRESS = os.getenv("CONTRACT_ADDRESS")
CONTRACT_ABI_PATH = os.path.join(os.path.dirname(__file__), '../../smart-contract/artifacts/contracts/Roninmon.sol/Roninmon.json')

if not RONIN_RPC_URL:
    raise ValueError("RONIN_RPC_URL not found in .env file")

if not CONTRACT_ADDRESS:
    raise ValueError("CONTRACT_ADDRESS not found in .env file")

w3 = Web3(Web3.HTTPProvider(RONIN_RPC_URL))

def get_contract_abi():
    """Loads the contract ABI from the JSON file."""
    with open(CONTRACT_ABI_PATH) as f:
        artifact = json.load(f)
        return artifact['abi']

CONTRACT_ABI = get_contract_abi()

contract = w3.eth.contract(address=CONTRACT_ADDRESS, abi=CONTRACT_ABI)

def get_roninmon_balance(wallet_address: str) -> int:
    """
    Fetches the number of Roninmon NFTs a player owns.
    """
    try:
        balance = contract.functions.balanceOf(wallet_address).call()
        return balance
    except Exception as e:
        print(f"Error fetching balance for {wallet_address}: {e}")
        return 0

def get_roninmon_token_uri(token_id: int) -> str:
    """
    Fetches the token URI for a specific Roninmon NFT.
    """
    try:
        token_uri = contract.functions.tokenURI(token_id).call()
        return token_uri
    except Exception as e:
        print(f"Error fetching token URI for token {token_id}: {e}")
        return ""