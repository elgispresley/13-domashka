const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.token);
exports.bot = bot;

exports.runbot = async function () {
    console.log('Запускаю бота...');
    try {
        await bot.launch()
        console.log('Бот успешно запущен');
    } catch (e) {
        console.log('Ошибка: ', e);
    }
};
