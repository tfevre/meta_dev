pragma solidity ^0.8.17;

import "./ERC20.sol";

/**
 * @title METADEV.
*/

contract METADEV is ERC20 {

    ///@notice constructor, to initialize the smart contract
    constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) {
        
    }

}