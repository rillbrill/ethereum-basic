// Wallet
const { ethers } = require('ethers');

const wallet = ethers.Wallet.createRandom();
console.log('random wallet:',wallet);

const privateKey = wallet.privateKey;
console.log('Private key:', privateKey);

const address = wallet.address;
console.log('My ethereum address:',address);

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


// ECDSA 
const privateKey2 = '8aba18880068b66932c7941e19fe0c4e9bf1026c02d0f1cb4811b0f301ab7bdd';

const keyPair = ec.keyFromPrivate(privateKey2);

const myPublicKey = keyPair.getPublic().encodeCompressed('hex');
console.log('myPublicKey:::',myPublicKey);
