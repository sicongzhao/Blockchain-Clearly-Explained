require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.3',
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.matic.today', // or use your own rpc
      accounts: ['your-private-key'],
    },
  },
};