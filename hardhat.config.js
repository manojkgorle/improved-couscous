require("@nomicfoundation/hardhat-toolbox");
require('@typechain/hardhat');
require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-chai-matchers');

const dotenv = require("dotenv");
dotenv.config();

const optimizedComilerSettings = {
  version: '0.8.17',
  settings: {
    optimizer: { enabled: true, runs: 1000000 },
    viaIR: true
  }
}

let mnemonic = 'test '.repeat(11) + 'junk';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{
      version: '0.8.15',
      settings: {
        optimizer: {
          enabled: true, runs: 1000000, details: {
            yulDetails: { optimizerSteps: "u", },
          },
        },
      },
    }],
  },
  defaultNetwork: "proxy",
  networks: {
    hardhat: {
    },
    proxy: {
      url: "http://localhost:8545/",
      accounts: { mnemonic },
      chainId: 31337
    },
    // precompile: {
    //   url: process.env.PRECOMPILE_RPC_URL,
    //   accounts: [process.env.PRECOMPILE_PRIVATEKEY],
    //   chainId: process.env.PRECOMPILE_CHAINID
    // },

  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v6',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    dontOverrideCompile: false // defaults to false
  },
};
