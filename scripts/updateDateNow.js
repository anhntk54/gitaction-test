const { ApiPromise, WsProvider } = require('@polkadot/api');
const fs = require('fs/promises');
async function main () {
  const timeElapsed = Date.now();
const today = new Date(timeElapsed);
  const data = {
    dateNow: today.toISOString(),
  }

  await fs.writeFile('data/today.json', JSON.stringify(data, null, 2));
  console.log(`You are connected to and save time now`);
}
main().catch(console.error).finally(() => process.exit());
