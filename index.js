const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  checkUpdate: false,
  syncStatus: false
});
const { token, replyMessage } = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if(msg.author.bot) return;
  if(msg.mentions.has(client.user.id)) {
    msg.reply(`${replyMessage}`);
  }
});

client.login(token);