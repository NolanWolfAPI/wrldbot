const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: Emre5765
Profile Link: https://www.roblox.com/users/917277927/profile
Groups (AUSA Groups): United States of America (Federal Worker) - U.S. Marshal Service (U.S. Marshal)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Controlled Unclassified
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.`)
  message.channel.send(embed)
}
