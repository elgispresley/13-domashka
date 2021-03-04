const { bot } = require('./bot');
const { getTodaySchedule } = require('./schedule')

exports.setCommands = function () {
   bot.command('schedule', (ctx) => {

      const schedule = getTodaySchedule();

      ctx.reply(schedule);
   });
};

exports.infoBot = function () {

   bot.command('about', (ctx) => {

      const info = `
              
              Крч, это краткая инфа о боте:
               
              Который сможет навести суету)
              Создатель: myrzabekov.elgis@gmail.com
              Напишите ему в личку, 
              Что он молодец :-)
           
           `
      ctx.reply(info)
   });
};

exports.suetaaa = function () {
   const sueta = ['Иииууу!', 'Клубника бомба, честно говоря!', 'Эээ, тормози, да'];
   bot.command('suetaHasbika', (ctx) => {
      const suetaIndex = Math.floor(Math.random() * sueta.length)
      const suetuha = sueta[suetaIndex];
      ctx.reply(suetuha);
   })
};


exports.clubnikaBomba = function () {
   const video = ['https://youtu.be/z1GG4WobTUA?t=4', 'https://youtu.be/WL7HkRHMpvE', 'https://youtu.be/RWFHao7g7r0?t=54'];
   bot.command('frazyHasbika', (ctx) => {
      const frazyIndex = Math.floor(Math.random() * video.length)
      const suetuha = video[frazyIndex];
      ctx.reply(suetuha);
   })
};



