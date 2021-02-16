const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: xCrosby_87
Profile Link: https://www.roblox.com/users/123201407/profile
Groups (AUSA Groups): United States of America (Federal Worker) - Department of Defense (Defense Force Protection Agency) - Metropolitan Police (Commander)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Secret
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.
`)
  message.channel.send(embed)
}
