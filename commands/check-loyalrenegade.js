const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: LoyalRenegade
Profile Link: https://www.roblox.com/users/96297629/profile
Groups (AUSA Groups): United States of America (Military Command) - United States Military (Joint Chiefs of Staff) - Secret Service (Counter Assault Team)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Secret
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.
`)
  message.channel.send(embed)
}
