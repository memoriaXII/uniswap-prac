/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "2B5ECCBS3H4YV8TYNQCSUY5GY1A39817AS",
  },
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          "draw animal trade family upset average ozone butter cause apology remember load",
          "wss://rinkeby.infura.io/ws/v3/939a0aa8155041fca728a2f242bde377"
        );
      },
      network_id: 4,
      gas: 5500000,
      gasPrice: 20000000000,
      skipDryRun: true,
      // confirmations: 10,
      timeoutBlocks: 200,
    },
  },
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 999999,
        },
        // evmVersion: "istanbul",
        // outputSelection: {
        //   "*": {
        //     "": ["ast"],
        //     "*": [
        //       "evm.bytecode.object",
        //       "evm.deployedBytecode.object",
        //       "abi",
        //       "evm.bytecode.sourceMap",
        //       "evm.deployedBytecode.sourceMap",
        //       "metadata",
        //     ],
        //   },
        // },
      },
    },
  },
};
