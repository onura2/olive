const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`miaw ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'miaw') {
    msg.reply('miaw miaw miaw');
  }
});

client.login('NTc3NDQ2MDQ4NTc0NzM0MzY2.XNp-rQ.fVywp_qx3Sg0YYjojQx0JVX7yOM');
