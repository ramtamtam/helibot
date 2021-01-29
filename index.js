require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache
    .get(`800820544953647194`)
    .send(`I'm ready to play! Try me 😆`);
});

client.on('message', (msg) => {
  if (msg.channel == '800820544953647194') {
    if (msg.content === 'ping') {
      // msg.reply('Pong!');
      msg.channel.send('Pong!');
    }
  } else {
    if (msg.content === 'ping') {
      msg.author.send('FU!, use bottest channel!');
      console.log(msg.author);
      msg.delete();
    }
  }
});

client.login(process.env.BOTTOKEN);
