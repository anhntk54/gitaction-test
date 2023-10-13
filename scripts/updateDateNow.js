const fs = require('fs/promises');

async function main() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let parametrs = '';
    if (process.argv[2]) {
        parametrs = process.argv[2];
    }
        const data = {
            dateNow: today.toISOString(),
            parametrs
        }

    await fs.writeFile('data/today.json', JSON.stringify(data, null, 2));
    console.log(`You are connected to and save time now`);
}

main().catch(console.error).finally(() => process.exit());
