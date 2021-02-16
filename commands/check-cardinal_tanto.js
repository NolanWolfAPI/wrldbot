const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: cardinal_tanto 
Profile Link: https://www.roblox.com/users/114093502/profile
Groups (AUSA Groups): United States of America (Judicial Directory) - Department of Justice (Judicial Directory) - National Security Agency (Intelligence Community) - Intelligence Community (Director of Policy and Hierarchy)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Controlled Unclassified
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.`)
  message.channel.send(embed)
}
