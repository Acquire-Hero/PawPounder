// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IUniswapV2Router02 {
    function factory() external pure returns (address);
    function WETH() external pure returns (address);

    // addLiquidity, addLiquidityETH 등 필요한 함수...
}