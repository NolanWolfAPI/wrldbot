const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {
  message.delete();
    let comment = args.join(" ");
    if(!comment) return message.channel.send(message, "Please specify a comment/reason.");

    let ideaEmbed = new Discord.RichEmbed()
    .setTitle("**SUGGESTION**")
    .setColor("GREEN")
    .setAuthor(`${message.author.username}`)
    .setFooter(`Thanks for the suggestion ${message.author.username}`)
    .setTimestamp()
    .addField("Idea", comment, true);

    let channel = message.guild.channels.find(`name`, "suggestions");
    if(!channel) return message.channel.send(message, "Could not find the channel.")
  
  const send = await channel.send(ideaEmbed)
    await send.react("🇾");
    await send.react("🇳");
};