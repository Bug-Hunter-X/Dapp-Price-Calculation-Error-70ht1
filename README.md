# Dapp Price Calculation Bug

This repository demonstrates a common error in decentralized applications (Dapps) involving incorrect data type handling during price calculations.  The bug occurs when the `calculateTotal` function attempts to add values that are not numbers, leading to unexpected results. The solution involves robust input validation and type checking.

## Bug Description

The `calculateTotal` function iterates through an array of items and sums their prices. However, if an item's price is not a number (e.g., a string or undefined), the addition will fail, leading to an inaccurate total. This bug could have significant financial consequences in a Dapp dealing with transactions.

## Solution

The solution involves adding input validation to ensure that `items[i].price` is a number before attempting the addition.  If it is not a number, a default value (such as 0) is used, or an error is thrown depending on the desired behavior.