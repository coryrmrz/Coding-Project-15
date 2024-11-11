//Task 4: Create the main application
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js"; //import formulas from portfolio.js
import Transaction from "./transaction.js"; //import transaction class from transaction.js

console.log("Total Portfolio Value:", calculatePortfolioValue()); //displays total portfolio value output
console.log("Allocation Percentages:", getPortfolioAllocation()); //displays allocation percentages output

const transaction1 = new Transaction(1, "sell", 10); // selling 10 stock shares of AMZN - Amazon
console.log("First Transaction:", transaction1); //displays first transaction output
//Because of insufficient stock for AMZN - Amazon, error message will occur
const transaction2 = new Transaction(3, "buy", 20); //buying 20 stock shares of JPM - JP Morgan
console.log("Second Transaction:", transaction2); //displays second transaction output

console.log("Updated Total Portfolio Value:", calculatePortfolioValue()); //displays updated portfolio value output
console.log("Updated Allocation Percentages:", getPortfolioAllocation()); //displays updated allocation percentages output