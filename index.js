const Discord = require("discord.js");
const client = new Discord.Client();
const disbut = require('discord-buttons')(client);

client.on('message', async msg => {

  if (msg.content.toLowerCase() === `!invite`) {
    
        let button = new disbut.MessageButton()
          .setStyle("url") // red, burple, green, url
          .setLabel('Add me!') // Description
          .setID('invite') // ID
          .setURL('http://gg.gg/auroramoan') // URL

        await msg.channel.send(msg.author, button)
  }
})


client.login(token);