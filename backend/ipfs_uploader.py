import os
import json
import requests
from dotenv import load_dotenv

# Load environment variables from the .env file in the current directory
load_dotenv()

# Get Pinata credentials from environment variables
PINATA_API_KEY = os.getenv("PINATA_API_KEY")
PINATA_SECRET_API_KEY = os.getenv("PINATA_SECRET_API_KEY")

# Pinata API endpoints
PINATA_BASE_URL = "https://api.pinata.cloud"
PIN_FILE_URL = f"{PINATA_BASE_URL}/pinning/pinFileToIPFS"
PIN_JSON_URL = f"{PINATA_BASE_URL}/pinning/pinJSONToIPFS"

def upload_file_to_ipfs(file_path: str) -> str:
    """
    Uploads a file (like an image) to IPFS via Pinata.

    Args:
        file_path: The local path to the file to upload.

    Returns:
        The IPFS hash (CID) of the uploaded file.
    """
    if not all([PINATA_API_KEY, PINATA_SECRET_API_KEY]):
        raise ValueError("Pinata API Key and Secret must be set in the .env file")

    headers = {
        "pinata_api_key": PINATA_API_KEY,
        "pinata_secret_api_key": PINATA_SECRET_API_KEY,
    }

    try:
        with open(file_path, "rb") as file:
            response = requests.post(
                PIN_FILE_URL,
                files={"file": (os.path.basename(file_path), file)},
                headers=headers,
            )
            response.raise_for_status()  # Raise an exception for bad status codes
            ipfs_hash = response.json()["IpfsHash"]
            print(f"Successfully uploaded file '{file_path}' to IPFS.")
            print(f"IPFS Hash (CID): {ipfs_hash}")
            return ipfs_hash
    except FileNotFoundError:
        print(f"Error: The file '{file_path}' was not found.")
        raise
    except requests.exceptions.RequestException as e:
        print(f"Error uploading file to Pinata: {e}")
        raise

def upload_json_to_ipfs(data: dict, name: str) -> str:
    """
    Uploads a JSON object to IPFS via Pinata.

    Args:
        data: The Python dictionary to upload as a JSON file.
        name: A name for the pinned content on Pinata.

    Returns:
        The IPFS hash (CID) of the uploaded JSON object.
    """
    if not all([PINATA_API_KEY, PINATA_SECRET_API_KEY]):
        raise ValueError("Pinata API Key and Secret must be set in the .env file")

    headers = {
        "Content-Type": "application/json",
        "pinata_api_key": PINATA_API_KEY,
        "pinata_secret_api_key": PINATA_SECRET_API_KEY,
    }
    
    payload = {
        "pinataMetadata": {"name": name},
        "pinataContent": data
    }

    try:
        response = requests.post(PIN_JSON_URL, json=payload, headers=headers)
        response.raise_for_status()
        ipfs_hash = response.json()["IpfsHash"]
        print(f"Successfully uploaded JSON metadata '{name}' to IPFS.")
        print(f"IPFS Hash (CID): {ipfs_hash}")
        return ipfs_hash
    except requests.exceptions.RequestException as e:
        print(f"Error uploading JSON to Pinata: {e}")
        raise

def create_and_upload_metadata(image_path: str, name: str, description: str, attributes: list) -> str:
    """
    Full pipeline to upload an image, create metadata, and upload the metadata.

    Args:
        image_path: Path to the monster's image file.
        name: The name of the monster.
        description: A description for the monster.
        attributes: A list of dictionaries for traits (e.g., [{"trait_type": "Level", "value": 1}]).

    Returns:
        The full Token URI (ipfs://<metadata_hash>) for the smart contract.
    """
    print(f"--- Starting metadata creation for '{name}' ---")
    
    # 1. Upload the image to IPFS
    print("\nStep 1: Uploading image...")
    image_cid = upload_file_to_ipfs(image_path)
    image_uri = f"ipfs://{image_cid}"

    # 2. Create the metadata JSON object
    print("\nStep 2: Creating metadata JSON...")
    metadata = {
        "name": name,
        "description": description,
        "image": image_uri,
        "attributes": attributes,
    }
    print("Metadata created:")
    print(json.dumps(metadata, indent=2))

    # 3. Upload the metadata JSON to IPFS
    print("\nStep 3: Uploading metadata JSON...")
    metadata_cid = upload_json_to_ipfs(metadata, name=f"{name} Metadata")
    token_uri = f"ipfs://{metadata_cid}"
    
    print("\n--- Pipeline Complete ---")
    print(f"✅ Final Token URI for smart contract: {token_uri}")
    
    return token_uri

if __name__ == "__main__":
    # --- EXAMPLE USAGE ---
    # This is how you would use the script to generate a Token URI for a new monster.
    
    # IMPORTANT: Before running, make sure you have:
    # 1. Created a .env file in this directory with your Pinata keys.
    # 2. Installed dependencies: pip install -r requirements.txt
    # 3. Placed the image file in the correct path.

    # For this example, we assume you have an image in the same directory.
    # Let's create a dummy image file for the example to work.
    dummy_image_path = "fireheart_example.png"
    if not os.path.exists(dummy_image_path):
        try:
            from PIL import Image
            img = Image.new('RGB', (100, 100), color = 'red')
            img.save(dummy_image_path)
            print(f"Created a dummy image file: '{dummy_image_path}'")
        except ImportError:
            print("PIL/Pillow not installed. Cannot create dummy image.")
            print("Please create a file named 'fireheart_example.png' manually to run this example.")
            # To install: pip install Pillow

    try:
        create_and_upload_metadata(
            image_path=dummy_image_path,
            name="Fireheart",
            description="A fiery Roninmon with a burning passion for battle.",
            attributes=[
                {"trait_type": "Element", "value": "Fire"},
                {"trait_type": "Level", "value": 1},
                {"trait_type": "Rarity", "value": "Common"},
            ],
        )
    except (ValueError, FileNotFoundError) as e:
        print(f"\nCould not run example: {e}")
