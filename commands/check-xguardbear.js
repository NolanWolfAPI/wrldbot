const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: xGuardBear
Profile Link: https://www.roblox.com/users/53155600/profile
Groups (AUSA Groups): United States of America (Department Director) - Department of Defense (Assistant Secretary) - Marshal Service (Senior U.S. Marshal) - Metropolitan Police (Commander) - United States Military (Suspended)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Top Secret
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.
`)
  message.channel.send(embed)
}
