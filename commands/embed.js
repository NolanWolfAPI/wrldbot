const Discord = require("discord.js");

exports.run = (client, message, args) => {

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to use this command!")

const Message = args.join(" ");
  
  let embedmessage =  new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`${Message}`);
  message.delete().catch();
  message.channel.send(embedmessage)
  
}