require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    meta: {
      url: "http://0.0.0.0:3000",
      chainId: 37,
    },
  },
};
