// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./XPToken.sol";
import "./CatNFT.sol";
import "./AccessoriesNFT.sol";

contract Meow {

  XPToken public xptoken;
  CatNFT public catNFT;
  AccessoriesNFT public accessoriesNFT;

  mapping(address => uint) public ownerToPetID;
  mapping(address => uint) public ownerToAccessoryID;

  constructor(address token_address, address cats_address, address accessories_address) {
    xptoken = XPToken(token_address);
    catNFT = CatNFT(cats_address);
    accessoriesNFT = AccessoriesNFT(accessories_address);
  }

  /**
    * Create and mint Cat NFT
    */
  function createCat(string memory token_URI) external {
    uint nft_id = catNFT.mint(msg.sender, token_URI);
    ownerToPetID[msg.sender] = nft_id;
  }

  /**
    * Earn XP
    */
  function earnXP(uint amount) external {
   xptoken.mint(msg.sender, amount);
  }

   /**
    * Purchase accessory and mint it as NFT
    */
  function purchaseAccessory(string memory token_URI) external {
    uint nft_id = accessoriesNFT.mint(msg.sender, token_URI);
    ownerToAccessoryID[msg.sender] = nft_id;
    xptoken.burn(msg.sender, 1000000000000000000);
  }

}