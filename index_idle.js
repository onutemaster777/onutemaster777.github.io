const discord = require('discord.js-selfbot');
const bot = new discord.Client();
const child = require("child_process");
bot.on('ready', ()=>{

console.log("User is ready to work on 24/7 without taking commands.");
bot.user.setPresence({
    status: 'online'
});
});

bot.login("your token here to make your account always active");
