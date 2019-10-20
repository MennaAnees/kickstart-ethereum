//I want to read inbox.sol but if required it it will be executed:
// require(./inbox.sol)
// and this is sol not js so this is not good!!

//here i want to compile it once and svae it for the future
//so we will save it to build folder

const path= require('path');
const fs = require('fs-extra');
const solc = require('solc'); 

// but if we made changes to our contract -> delete build folder then rebuild again
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//ana hena b3ml l path bta3 Campaign.sol file 
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

// and then read it
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

//create build folder
fs.ensureDirSync(buildPath);

for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}