const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 'kedi') {
    msg.reply('miavvvvv  ');
  }
});
client.on('message', msg => {
  if (msg.content === 'miov') {
    msg.reply('miov');
  }
});
client.on('message', msg => {
  if (msg.content === 'felix istermisin') {
    msg.reply('mau OwO');
  }
});
client.on('message', msg => {
  if (msg.content === 'yapımcın kim  ') {
    msg.reply('onura1 v2 olive yapımcısı');
  }
});

client.login(process.env.BOT_TOKEN);
