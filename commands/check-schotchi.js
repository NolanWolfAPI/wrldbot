const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: Schotchi
Profile Link: https://www.roblox.com/users/1407860617/profile
Groups (AUSA Groups): United States of America (Department Director) - U.S. Marshal Service (Chief U.S. Marshal)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Control Unclassified
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.`)
  message.channel.send(embed)
}
