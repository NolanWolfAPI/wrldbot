const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: RothschiIds
Profile Link: https://www.roblox.com/users/573923349/profile
Groups (AUSA Groups): United States of America (Citizen) - Department of Justice (Judicial Directory)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Unclassified
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.`)
  message.channel.send(embed)
}
