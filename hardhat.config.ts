import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

module.exports = {
  zksolc: {
    version: "1.3.7",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkSyncEra",
  networks: {
    zkSyncEra: {
      url: "https://zksync2-mainnet.zksync.io",
      ethNetwork: "mainnet",
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.19",
  },
};
