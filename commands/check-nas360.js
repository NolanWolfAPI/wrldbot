const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: nas360
Profile Link: https://www.roblox.com/users/135632/profile
Groups (AUSA Groups): United States of America (Department Director) - Department of Defense (Assistant Secretary) - Metropolitan Police (Officer) - Defense Force Protection Agency (Director)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Top Secret
Criminal Record: None. 
Court Record: None.
Disciplinary Actions: None.
`)
  message.channel.send(embed)
}
