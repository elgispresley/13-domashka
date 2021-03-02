const { Telegraf } = require('telegraf');

const token = '1655502548:AAEd3ZhkwiLBtCjlaUM1CKshagLHSh3nQpw';

const bot = new Telegraf(token);
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