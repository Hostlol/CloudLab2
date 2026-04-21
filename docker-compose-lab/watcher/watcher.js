const URL = 'http://api:8080/';
const INTERVAL_MS = 10_000;

function timestamp() {
    return new Date().toISOString();
}

async function ping() {
    try {
        const response = await fetch(URL);

        if (!response.ok) {
            console.log(
                `[${timestamp()}] FAILURE ${URL} returned ${response.status} ${response.statusText}`
            );
            return;
        }

        const body = await response.text();
        console.log(`[${timestamp()}] SUCCESS ${URL} -> ${body}`);
    } catch (error) {
        console.log(`[${timestamp()}] FAILURE ${URL} -> ${error.message}`);
    }
}

async function start() {
    await ping();
    setInterval(ping, INTERVAL_MS);
}

start();