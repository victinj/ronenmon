from sqlalchemy import Column, Integer, String, ForeignKey, Numeric
from sqlalchemy.orm import relationship
from .database import Base

class Player(Base):
    __tablename__ = "players"  # The actual table name in your database

    id = Column(Integer, primary_key=True, index=True)
    wallet_address = Column(String, unique=True, index=True, nullable=False)
    balance = Column(Numeric(10, 2), default=0.0)

    # This creates the one-to-many relationship
    # The 'back_populates' argument points to the corresponding relationship in the NFT model
    nfts = relationship("NFT", back_populates="owner")

class NFT(Base):
    __tablename__ = "nfts"

    id = Column(Integer, primary_key=True, index=True)
    token_id = Column(Integer, unique=True, nullable=False)
    token_uri = Column(String, nullable=False)
    
    # This is the foreign key that links an NFT to a player
    owner_id = Column(Integer, ForeignKey("players.id"))

    # This creates the many-to-one relationship
    owner = relationship("Player", back_populates="nfts")
