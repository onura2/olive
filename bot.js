const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`miaw ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'miaw') {
    msg.reply('miaw miaw miaw);
  }              
});
client.on('message', msg => {
  if (msg.content === 'felix ') {
    msg.reply('mau OwO');
  }
});

client.on('message', msg => {
  if (msg.content === 'kedi ') {
    msg.reply('mau OwO');
  }
});
client.login(process.env.BOT_TOKEN);
