require('dotenv').config();

const { runbot } = require('./lib/bot');
const { setCommands, infoBot, suetaaa, clubnikaBomba } = require('./lib/bot-cmds');

async function start() {
    try {
        clubnikaBomba();
        suetaaa();
        infoBot();
        setCommands();
        await runbot();
    } catch (error) {
        console.log('Ошибка', error)
    }
}
start();