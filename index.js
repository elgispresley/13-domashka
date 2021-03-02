const { runbot } = require('./lib/bot');
const { setCommands } = require('./lib/bot-cmds');

async function start() {
    try {
        setCommands();
        await runbot();
    } catch (error) {
        console.log('Ошибка', error)
    }
}
start();