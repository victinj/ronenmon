from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine, get_db

# This command creates all the tables defined in models.py in your database.
# It's safe to run multiple times; it will only create tables that don't already exist.
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# --- API Endpoints ---

@app.get("/")
def read_root():
    return {"message": "Welcome to the Roninmon API"}

@app.get("/api/v1/player/{wallet_address}", response_model=schemas.Player)
def get_player_data(wallet_address: str, db: Session = Depends(get_db)):
    """
    Retrieves a player's data, including their owned NFTs.
    If the player does not exist in the database, a new record for them is created.
    """
    db_player = crud.get_or_create_player(db, wallet_address=wallet_address)
    if db_player is None:
        # This case should theoretically not be reached due to get_or_create_player logic
        raise HTTPException(status_code=404, detail="Player not found")
    return db_player

from . import crud, models, schemas, blockchain_service

# We will add more endpoints here later, such as:
# - A POST endpoint to sync a player's on-chain NFTs to our database.
# - Endpoints for game actions like purchasing items.

@app.post("/api/v1/player/{wallet_address}/sync", response_model=schemas.Player)
def sync_player_nfts(wallet_address: str, db: Session = Depends(get_db)):
    """
    Synchronizes a player's NFT data from the blockchain to the database.
    """
    db_player = crud.get_or_create_player(db, wallet_address=wallet_address)
    
    # Fetch NFT balance from the blockchain
    balance = blockchain_service.get_roninmon_balance(wallet_address)
    
    # In a real application, you would loop from 0 to balance-1 
    # and get the token_id and token_uri for each NFT.
    # For this example, we'll just create a placeholder NFT.
    if balance > 0:
        # This is a simplified placeholder. A real implementation would need to:
        # 1. Call contract.functions.tokenOfOwnerByIndex(wallet_address, i).call() for i in range(balance)
        # 2. For each tokenId, call contract.functions.tokenURI(tokenId).call()
        # 3. Fetch metadata from the tokenURI (which is often an IPFS link)
        # 4. Save the NFT details to the database.
        
        # For now, let's assume we found one NFT and create a record for it.
        # We'll use a placeholder token_id and a generic token_uri.
        
        # First, check if this placeholder NFT already exists for the player
        existing_nfts = {nft.token_id for nft in db_player.nfts}
        placeholder_token_id = 12345 # Example token ID
        
        if placeholder_token_id not in existing_nfts:
            nft_data = schemas.NFTCreate(
                token_id=placeholder_token_id,
                token_uri="ipfs://example_uri_for_sync"
            )
            crud.create_nft_for_player(db=db, nft=nft_data, player_id=db_player.id)

    # Return the updated player data
    db.refresh(db_player)
    return db_player
