import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.14/mod.ts' 

// TODO - MAP IBC DENOMS TO CORRECT ASSETS
// TODO - CORRECT DECIMAL POINTS FOR IBC ASSETS

const filename = 'evmos-community-pool.json';
const json = await readJSON(filename)
const balances = Object.values(json.balances); 
const filteredBalances = balances.map(asset => ({ 
    asset: asset.denom,
    amount: asset.amount,
    friendlyAmount: (parseInt(asset.amount) / (10**(18)))
}));
const newFilename = `./processed/evmos-community-pool.json` 
await writeJSON(newFilename, filteredBalances)
console.log("Community Pool Balances - Processed")

// Keep unprocessed file?
// await removeFile('./evmos-community-pool.json') 
