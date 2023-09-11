/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Create a variable to hold the collection of NFTs
let nftCollection = [];

// Generate a unique identifier for each NFT
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// This function will mint a new NFT by taking metadata values as parameters
function mintNFT(owner, name, eyeColor, shirtType, accessories) {
  const newNFT = {
    "UUID": generateUUID(),
    "Owner": owner,
    "Name": name,
    "EyeColor": eyeColor,
    "ShirtType": shirtType,
    "Accessories": accessories
  };
  nftCollection.push(newNFT);
  console.log(`Minted NFT with UUID: ${newNFT.UUID}`);
}

// This function will list all the NFTs in the collection
function displayNFTCollection() {
  console.log("\n====== NFT Collection ======");
  nftCollection.forEach((nft, index) => {
    console.log(`\nNFT ID: ${index + 1}`);
    console.log(`UUID: ${nft.UUID}`);
    console.log(`Owner: ${nft.Owner}`);
    console.log(`Name: ${nft.Name}`);
    console.log(`Eye Color: ${nft.EyeColor}`);
    console.log(`Shirt Type: ${nft.ShirtType}`);
    console.log(`Accessories: ${nft.Accessories}`);
  });
  console.log("============================");
}

// This function returns the total number of NFTs in the collection
function totalNFTs() {
  console.log(`\nTotal NFTs Minted: ${nftCollection.length}`);
}

// Function to transfer ownership of NFT
function transferNFT(UUID, newOwner) {
  const nft = nftCollection.find(n => n.UUID === UUID);
  if (nft) {
    nft.Owner = newOwner;
    console.log(`NFT with UUID ${UUID} is now owned by ${newOwner}`);
  } else {
    console.log(`NFT with UUID ${UUID} not found.`);
  }
}

// Demo usage
mintNFT("Nancy", "Moonlight", "Black", "T-Shirt", "Gold Necklace");
mintNFT("Vikash", "Sunshine", "Brown", "Polo", "Silver Ring");
displayNFTCollection();
totalNFTs();
transferNFT(nftCollection[0].UUID, "Charlie");
displayNFTCollection();
