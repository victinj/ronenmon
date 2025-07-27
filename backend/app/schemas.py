from pydantic import BaseModel
from typing import List, Optional

# --- NFT Schemas ---

# Base schema for an NFT, containing common attributes
class NFTBase(BaseModel):
    token_id: int
    token_uri: str

# Schema for creating a new NFT (used when receiving data)
class NFTCreate(NFTBase):
    pass

# Schema for reading an NFT (used when sending data)
# This includes all base attributes and any other data to be returned.
class NFT(NFTBase):
    id: int
    owner_id: int

    # This tells Pydantic to read the data even if it is not a dict,
    # but an ORM model (or any other arbitrary object with attributes).
    class Config:
        from_attributes = True


# --- Player Schemas ---

# Base schema for a Player
class PlayerBase(BaseModel):
    wallet_address: str
    balance: float

# Schema for creating a new Player
class PlayerCreate(PlayerBase):
    pass

# Schema for reading a Player, which includes the list of their NFTs.
# This is the main schema that will be used to return a player's full data.
class Player(PlayerBase):
    id: int
    nfts: List[NFT] = []

    class Config:
        from_attributes = True
