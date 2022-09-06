import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.14/mod.ts' 

// WIP - WILL FAIL

const filename = 'evmos-market-1h-unprocessed.json';
const json = await readJSON(filename)
console.log(json.market_cap_rank)
const lastUpdate = json.market_data.last_updated
const marketData = Object.values(json.market_data); 
const filteredPrice = marketData.map(current_price => ({ 
    currency: current_price.key,
    rate: current_price.value
}));
console.log(filteredPrice)
// const newFilename = `/processed/evmos-market-data.json` 
// await writeJSON(newFilename, filteredCurrencyRates)
// console.log("Wrote a post process file")

// await removeFile('./btc-price.json') // equivalent to removeFile('btc-price.json')