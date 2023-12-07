const ethers = require("ethers");

const {
    factoryAddres,
    routerAddress,
    fromAddress,
    toAddress
} = require("./AddressList")

const {
    erc20ABI,
    factoryABI,
    pairABI,
    routerABI
} = require("./AbiInfo")

//@@NOTE: this comand may give error ethersjs version 6
const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed1.binance.org/" //binance rpc node
)

const factoryInstance = new ethers.Contract(
    factoryAddres,factoryABI,provider
)

const routerInstance = new ethers.Contract(
    routerAddress,routerABI,provider
)

//function to fetch the price
const priceFetch = async(humanFormatIn)=>{
    //instances of the tokens. 
    //through these we can talk to the contracts of the tokens too
    console.log("\nGiven input amount of BUSD token:",humanFormatIn);

    const token1 = new ethers.Contract(
        fromAddress,erc20ABI,provider
    )
    const token2 = new ethers.Contract(
        toAddress,erc20ABI,provider
    )

//these decimals are different from token to token. set by the token authority
    const decimal1 = await token1.decimals()
    const decimal2 = await token2.decimals()
    console.log("\nNumber of decimal unit provided for BUSD:",decimal1);
    console.log("Number of decimal unit provided for WBNB:",decimal1);

    //converting the human readable amount into decimal places.
    //the BUSD as set the decimal place till 10^18(Just like wei. the ether we give corresponding wei is multiply by 10^19). 
    //so human gave 100 BUST(just like 100 ether). corresponding wei for BUSD is 100*10^18
    //need to convert because they dont understand ether or BUSD. they understand wei.
    const amountIn = ethers.utils.parseUnits(humanFormatIn,decimal1).toString();
    console.log("\nGiven input amount of BUSD in wei:",amountIn);

    //now calculate the equivalent WBNB token amount
    const amountOut = await routerInstance.getAmountsOut(amountIn,[
        fromAddress,
        toAddress
    ])

// now converting into human readable format.(like decoding)
    const humanFormatOut = ethers.utils.formatUnits(
        //the format in which "amountyOut", there in 1st index the value will be.
        //thats why "amountOut[1]"
        amountOut[1].toString(),
        decimal2
    )

    console.log("\nNumber of equivalent WBNB token for 100 BUSD(100 * 10^18 wei):",humanFormatOut);
}

humanFormatIn = "100";

priceFetch(humanFormatIn)