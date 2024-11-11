//Task 3: Create the Transaction module
import { assets, getAssetById } from './asset.js'; //import asset array from asset.js
export class Transaction { //Transaction class
    constructor(assetId, type, quantity) { //contructor creates new transaction with assetID, type, and quantity
        this.assetId = assetId; //Stores asset's ID
        this.type = type; //Stores type of transaction
        this.quantity = quantity; //Stores quantity of asset during transaction

        const asset = getAssetById(assetId); //retrieves asset object
        if (type === 'sell' && asset.quantity < quantity) { //if transaction type is sell and there isn't enough in stock
            throw new Error(`Insufficient quantity for sale of ${asset.name}`); //throw error message
        }

        if (type === 'buy') { //if transaction type is buy
            asset.quantity += quantity; //increase quantity
        } else if (type === 'sell') { //if transaction type is sell
            asset.quantity -= quantity; //decrease quantity
        }
    }
}