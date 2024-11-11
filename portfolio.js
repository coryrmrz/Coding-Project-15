//Create the portfolio module
import { assets } from './asset.js'; //import assets array from assets.js

export function calculatePortfolioValue() { //function calulates total value of portfolio
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0); //use reduce to calculate total portfolio value
} //multiplies each asset's price by quantity and adds results total
export function getPortfolioAllocation() { //function calculates allocation percentage of each asset 
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({ //maps assets array and provides name and allocation
        name: asset.name, //asset's name
        allocation: ((asset.price * asset.quantity) / totalValue) * 100 //percentage of total portfolio value
    }));
}