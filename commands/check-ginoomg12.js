const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: GinoOMG12
Profile Link: https://www.roblox.com/users/491954883/profile
Groups (AUSA Groups): United States of America (Citizen) - U.S. Marshal Service (Deputy Chief U.S. Marshal) - United States Military (Suspended)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Controlled Unclassified
Criminal Record: None.
Court Record: None
Disciplinary Actions: None.`)
  message.channel.send(embed)
}
