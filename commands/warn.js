const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let reason = args.join(" ").slice(22);
  if(!reason) reason = "Unacceptable behavior.";
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to use this command!")
  
  let warnembed = new Discord.RichEmbed()
  .setTitle(`**Warn**`)
  .setDescription(`Message ID: ${message.id}`)
  .setColor("ORANGE")
  .setFooter(`At: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
  .addField(`Warned by:`, `Moderators at ${message.guild.name}`)
  .addField(`Warned user:`, `**Username** ${member.user.username}\n**ID** ${member.user.id}`)
  .addField(`Reason:`, `${reason}`);
  
  member.send(warnembed)
}