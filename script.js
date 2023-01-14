const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");
var fs = require("fs");
const walletWhitelist = require("./walletWhitelist");

/* You need to add the addresses in your "whitelist" to the array in the "walletWhitelist.js" file.*/
const whitelistAddress = walletWhitelist.whitelistAddress;

/* merkleTree */
const leafNodes = whitelistAddress.map((address) => keccak256(address));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
const merkleRoot = merkleTree.getRoot().toString("hex");

/* this "root" will be added to the smart contract -*/
var rootData = [];

rootData.push({
  root: merkleRoot,
});

/* "root" will be saved in root.json file -*/
var rootJsonData = JSON.stringify(rootData);
fs.writeFile("root.json", rootJsonData, function (err) {
  if (err) throw err;
  console.log("Root Saved!");
});

/* 
This "proof" is created for each wallet separately. 
The person interacting with the smart contract must provide this "proof" as an argument. 
so a situation should be provided where the frontend can check and "proof" the wallet to provide this data.
*/
var proofData = [];

for (let i = 0; i < leafNodes.length; i++) {
  const walletAddress = whitelistAddress[i].toLowerCase();
  const claimingAddress = leafNodes[i];
  const proof = merkleTree.getHexProof(claimingAddress);
  proofData.push({
    address: walletAddress,
    proof: proof,
  });
}

/* "proof" will be saved in proof.json file -*/
var proofJsonData = JSON.stringify(proofData);
fs.writeFile("proof.json", proofJsonData, function (err) {
  if (err) throw err;
  console.log("Proofs Saved!");
});
