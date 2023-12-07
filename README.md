# Token_Swap_Using_PancakeSwap
Implementing #token swap functionality by coding from scratch. Through this project  we I have shown how we can fetch the amount of equivalent token by fetching realtime market value using the #pancakeswap #smartcontract .

Through this we can see how actually the #liquidity pool works. I used the #factoryContract and #routerContract of the pancakeSwap. Through this I have learned how actually in the backend the swapping price is fetched in the #pancakeswap platform.
Completed it in three steps:
1. Fetched the contract addresses like factoryAddres, routerAddress, fromAddress(1st Token, here BUSD), toAddress(2nd Token, here WBNB).
2. Fetched the required ABI of the required functions for fetching the realtime equivalent token.
3. Finally, with the help of the ABI and Contract address took the instances of the  token contracts and the router and factory contracts. Then used them to fetch and show the final result.

The final result shows How many WBNB token can we get with exchange of 100 BUST token at the current time instance.
INSTRUCTION
-- Just clone the repository
-- npm install
-- node PriceFetch
