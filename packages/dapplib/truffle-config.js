require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin arm bridge siege'; 
let testAccounts = [
"0x083633cae8c6dea340757d9e9145ab64c4c0d5f40f99b29bac79fbb962e9ef43",
"0xfd9d23661e8f85dce0115ce87d83b7a1af00866e5af5af1b583e3ae91aa4a39d",
"0xbd2d07c6545a89a270f11d852baaa2d247c29eae05cc994290d44cfd07259954",
"0xac190808332c53143c2802bdab61c39ad9aa18863e14e75646bef7730078fb2d",
"0x8ff7458f041b6916a7930e153057acfec7e24e25004ab8a8a1734507ae8a3720",
"0xb62fe9da97051116b55c766bbce08b7addc2caddf82df0b3bb81a90304a820ca",
"0x879b50e76bc47e54d026932e36cb2496a82845f6f00b1adaf491de03c54c009c",
"0xf3d4d5e76a9eeb1f2f251823af885ea2c7ae7b4a499c4d10b6a840bc8336138c",
"0xe6e4813a0bcb5fa13e774a48fb12878fd851e0e1cc8415eed0b53a6af2e76d9c",
"0x54f5154979814ba1cbbbd5cea540e5ff3cfad3f94038ac017bf6714b34492514"
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
            version: '^0.8.0'
        }
    }
};

