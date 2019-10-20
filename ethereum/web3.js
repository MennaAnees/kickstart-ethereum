import Web3 from 'web3';

let web3;

if (typeof window !=='undefined'){ //&& typeof window.web3 !== 'undefined') {
    // we r in the browser and user has a metamask
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    web3 = new Web3(window.web3.currentProvider);
} else {
    //we r in server or user has no metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/c2eafcf2115442ab95149de4d940e817'
    );
    web3 = new Web3(provider);
}




export default web3;