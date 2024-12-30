require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const { PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    baseMainnet: {
      url: "https://mainnet.base.org",
      accounts: [PRIVATE_KEY],
      chainId: 8453,
    },
    // 필요하다면 다른 네트워크도 추가
  },
};
