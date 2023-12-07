
// https://ethereum.org/en/developers/docs/standards/tokens/erc-20/#methods
// https://eips.ethereum.org/EIPS/eip-20
const erc20ABI = ["function decimals() public view returns (uint8)"]


// wil return the address of the liquidity provider(pool) of the two tokens BUSD and WBNB
//https://bscscan.com/address/0xca143ce32fe78f1f7019d7d551a6402fc5350c73#readContract(go to bscscan and search the addressses to get these)
// 0xca143ce32fe78f1f7019d7d551a6402fc5350c73 this is factory address. this holds all the liquidity pools
//will return this: 0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16
const factoryABI=[
    "function getPair(address tokenA, address tokenB) external view returns (address pair)"
]

//using the above LP address can get code(functions) that are needed
//https://bscscan.com/address/0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16#code
const pairABI = [
    "function token0() external view returns (address)",
    "function token1() external view returns (address)",
    "function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)"
]

const routerABI= [
    //notice take this version of the getAmountOut(). dont take the "internal" version
    //also remove the overrie and virtual from it
    "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)"
]

module.exports={
    erc20ABI,
    factoryABI,
    pairABI,
    routerABI
}