from sqlalchemy.orm import Session
from . import models, schemas

def get_player_by_wallet(db: Session, wallet_address: str):
    """
    Retrieves a single player record from the database based on their wallet address.
    """
    return db.query(models.Player).filter(models.Player.wallet_address == wallet_address).first()

def create_player(db: Session, player: schemas.PlayerCreate):
    """
    Creates a new player record in the database.
    """
    db_player = models.Player(
        wallet_address=player.wallet_address,
        balance=player.balance
    )
    db.add(db_player)
    db.commit()
    db.refresh(db_player)
    return db_player

def get_or_create_player(db: Session, wallet_address: str):
    """
    A convenience function to get a player if they exist, or create them
    with a default balance if they don't.
    """
    db_player = get_player_by_wallet(db, wallet_address=wallet_address)
    if db_player:
        return db_player
    
    # If player doesn't exist, create a new one with a default balance
    new_player_data = schemas.PlayerCreate(wallet_address=wallet_address, balance=0.0)
    return create_player(db, player=new_player_data)

# We will add more functions here later, such as:
# - create_nft_for_player
# - get_player_nfts
