const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: ioletsgoScooby
Profile Link: https://www.roblox.com/users/78227466/profile
Groups (AUSA Groups): United States of America (Immigrant) - Secret Service (Emergency Response Team)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Confidential
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.
`)
  message.channel.send(embed)
}
