require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth remain protect heavy prison outer someone'; 
let testAccounts = [
"0x4919e52756603cf706a8e7f783ceb70b3157d89128341172674a1af207a0f90e",
"0x7f249da4897538cbd664294a3a72cab06743704680f099d8545238b6a71a1ed0",
"0x2f0f4f04d2f39721373fa1834493fae9d61f7902c3bf6a3d92fae6e47ad657e9",
"0xf9c68210501ccdbff381a55d9214b46195aca0907916ffa71c602440801ea9fe",
"0xa24bd7fbc3c8242d8ecad84151358fc29dd08d5f250970e8484a84041e326010",
"0x016bf76cbfdf456b0075d449e79be51e4282ac735eadac7139f5c40c3ece92ee",
"0x5377be7e1896c1e0a56ce15465ab2b367535dc3684ff68b7eb4fddebd233f25d",
"0x439dfe6694fe389b2f2aa61821bbe9e827e6751d4f60b6c9e1ff4a91b07c7dfc",
"0x977d407753e2a8b70b0e4cf3053e328deb78b4eee0b0f47e6f1fbf78db6ce59d",
"0x7b2340ae536eb4d0ce9bcf35dcca0f4faa469ccb798784357ceae55b73b2156b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
