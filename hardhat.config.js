// https://eth-goerli.alchemyapi.io/v2/jkeUOGim1uxhpnxB1ol2jq3VC9_-lU4F
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/jkeUOGim1uxhpnxB1ol2jq3VC9_-lU4F",
      accounts: [
        "423c91e51e34f53a7c7999b8a1c881e27a2b9b7573b7f25cac211b6597ae6ec4",
      ],
    },
  },
};
