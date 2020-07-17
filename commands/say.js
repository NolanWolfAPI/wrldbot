
const Discord = require("discord.js");
 exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Error: Sorry, you do not have the correct Permissions MANAGE_MESSAGES.");

   
   const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
}