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

# We will add more endpoints here later, such as:
# - A POST endpoint to sync a player's on-chain NFTs to our database.
# - Endpoints for game actions like purchasing items.
