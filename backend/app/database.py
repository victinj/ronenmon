import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL not set in the environment variables")

# The create_engine function creates a new Engine instance.
# This Engine is the starting point for any SQLAlchemy application.
# It's the "home base" for the actual database and its DBAPI.
engine = create_engine(DATABASE_URL)

# The SessionLocal class is a factory for creating new Session objects.
# Each instance of SessionLocal will be a new database session.
# A session is the primary interface for all database operations.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# The declarative_base() function returns a new base class.
# Our ORM models (like Player and NFT) will inherit from this class.
Base = declarative_base()

# Dependency to get a DB session
# This function will be used in our API endpoints to get a database session.
# It ensures that the database connection is always closed after the request is finished.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
