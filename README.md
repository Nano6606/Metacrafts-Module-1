# Metacrafts-Module-1


# NFT Minting and Management System

## Overview

This project is a simple JavaScript-based Non-Fungible Token (NFT) minting and management system. It allows you to create NFTs with custom metadata, list all minted NFTs, check the total supply, and even transfer ownership.

## Features

- **Mint New NFTs**: Create new NFTs with unique metadata.
- **Unique Identification**: Each NFT comes with a unique UUID.
- **List NFTs**: Display the details of all the NFTs in the collection.
- **Total Supply**: Get the total number of minted NFTs.
- **Transfer Ownership**: Transfer the ownership of an NFT to a new owner.

## How to Use

### 1. Mint a New NFT

Call the `createNFT()` function with the required metadata parameters.

```javascript
createNFT("Alice", "Moonlight", "Blue", "T-Shirt", "Silver Ring");
```

### 2. List All NFTs

Call the `displayNFTCollection()` function to print all minted NFTs to the console.

```javascript
displayNFTCollection();
```

### 3. Get Total Supply

To get the total number of NFTs minted, call the `totalNFTs()` function.

```javascript
totalNFTs();
```

### 4. Transfer Ownership

Transfer the ownership of an NFT by calling `transferNFT()` with the UUID of the NFT and the new owner's name.

```javascript
transferNFT(UUID, "Charlie");
```

## Code Structure

- `nftCollection`: An array to hold all minted NFTs.
- `generateUUID()`: Function to generate a unique identifier for each NFT.
- `createNFT()`: Function to mint a new NFT.
- `displayNFTCollection()`: Function to list all NFTs.
- `totalNFTs()`: Function to display the total number of minted NFTs.
- `transferNFT()`: Function to transfer ownership of an NFT.
