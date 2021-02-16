const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: Throgle
Profile Link: https://www.roblox.com/users/9527/profile
Groups (AUSA Groups): United States of America (Federal Worker) - Department of Homeland Security (Chief of Staff) - Metropolitan Police (Patrol Officer) - Secret Service (Special Agent in Charge) 
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Secret
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.
`)
  message.channel.send(embed)
}
