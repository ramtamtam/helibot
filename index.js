require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user
    .setActivity('BOFH', { type: 'PLAYING' })
    .then((presence) =>
      console.log(`Activity set to ${presence.activities[0].name}`)
    )
    .catch(console.error);
});
client.on('message', (msg) => {
  if (msg.channel == '800820544953647194') {
    if (msg.content === 'ping') {
      msg.channel.send('Pong! (╯°□°）╯︵ ┻━┻');
    }
  } else {
    if (msg.content === 'ping') {
      msg.author.send('I know what you are doing here! Stop IT! ( ´･･)ﾉ(._.`)');
      console.log(msg.author);
      msg.delete();
    }
  }
});

client.login(process.env.BOTTOKEN);
