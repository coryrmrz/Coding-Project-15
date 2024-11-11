// Task 1: Create the asset module
export const assets = [ //assets array
    { id: 1, name: 'AMZN - Amazon', type: 'stock', price: 208, quantity: 5 }, //amazon stock
    { id: 2, name: 'WMT - Walmart', type: 'stock', price: 85, quantity: 10 }, //walmart stock
    { id: 3, name: 'JPM - JP Morgan', type: 'stock', price: 237, quantity: 15 } //jpmorgan stock
];
export function getAssetById(id) { //function to export asset based on unique id
    return assets.find(asset => asset.id === id); //finds asset's id and returns match
}
 