const { runbot } = require('./lib/bot');

async function start() {
    try {
       await runbot();
    } catch (error) {
        console.log('Ошибка', error)
    }
}
start();