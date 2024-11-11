// Create the asset module
export const assets = [
    { id: 1, name: 'AMZN - Amazon', type: 'stock', price: 208, quantity: 5 },
    { id: 2, name: 'WMT - Walmart', type: 'stock', price: 85, quantity: 10 },
    { id: 3, name: 'JPM - JP Morgan', type: 'stock', price: 237, quantity: 15 }
];
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}