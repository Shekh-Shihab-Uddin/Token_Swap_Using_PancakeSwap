// https://docs.pancakeswap.finance/developers/smart-contracts/pancakeswap-exchange/v2-contracts/factory-v2
// https://docs.pancakeswap.finance/developers/smart-contracts/pancakeswap-exchange/v2-contracts/router-v2
const factoryAddres = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73" //taken from bscScan. search on google factory address of pancakeswap
const routerAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E" //similarly router contract address
//can choose any token address
const fromAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" //BUSD - 1st token. in BscScan contract name- "BEP20Token"
const toAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" //WBNB - 2nd token

module.exports={
    factoryAddres,
    routerAddress,
    fromAddress,
    toAddress
}
