var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

let token = new Buffer(auth.token, 'base64');
// Initialize Discord Bot
var bot = new Discord.Client({
   token: token.toString('ascii'),
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;
            case 'estranho':
                bot.sendMessage({
                    to: channelID,
                    message: 'Estava achar estranho man!!!'
                });
                break;
            case 'comp':
                bot.sendMessage({
                    to: channelID,
                    message: '@everyone COMP FILHOS DA PUTA'
                });
                break;
            case 'fuckali':
                bot.sendMessage({
                    to: channelID,
                    message: '<@605024160359514113> GET TROLLED XDDDDD <:KEKW:640600544397885481>'
                });
                break;
            // Just add any case commands if you want to..
         }
     }
});