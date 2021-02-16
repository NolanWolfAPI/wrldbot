const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: WxnddyOllion
Profile Link: https://www.roblox.com/users/59230124/profile
Groups (AUSA Groups): United States of America (Citizen) - Secret Service (Trainee) - Metropolitan Police (Patrol Officer)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Controlled Unclassified
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.
`)
  message.channel.send(embed)
}
