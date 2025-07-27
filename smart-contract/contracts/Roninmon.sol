// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Roninmon
 * @dev An ERC721 NFT contract that supports storing a unique metadata URI for each token.
 * The contract owner is the only one who can mint new tokens.
 */
contract Roninmon is ERC721URIStorage, Ownable {
    // The ID for the next token to be minted. Starts at 1.
    uint256 private _nextTokenId;

    /**
     * @dev Sets the name and symbol for the NFT collection.
     * The deployer of the contract will be the initial owner.
     */
    constructor() ERC721("Roninmon", "RONMON") Ownable(msg.sender) {
        // Initialize the token ID counter.
        _nextTokenId = 1;
    }

    /**
     * @dev Mints a new Roninmon NFT and assigns it to the `to` address.
     * It also sets the token's unique metadata URI, which should point to a JSON file on IPFS.
     * This function can only be called by the contract owner.
     * @param to The address that will receive the minted NFT.
     * @param tokenURI The URI for the token's metadata JSON file.
     * @return The ID of the newly minted token.
     */
    function safeMint(address to, string memory tokenURI) public onlyOwner returns (uint256) {
        // Get the current token ID and then increment the counter for the next one.
        uint256 tokenId = _nextTokenId;
        _nextTokenId++;

        // Mint the new token and assign it to the 'to' address.
        _safeMint(to, tokenId);
        
        // Set the metadata URI for the newly minted token.
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }
}
