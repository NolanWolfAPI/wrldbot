const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
   var embed = new Discord.RichEmbed()
  await embed.setColor('RANDOM')
 .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTitle('Backgroundcheck Reponse')
  await embed.setDescription(`
Username: Legislative_Ice
Profile Link: https://www.roblox.com/users/94224452/profile
Groups (AUSA Groups): United States of America (Cabinet) - Department of Justice (Attorney General) - Federal Bureau of Investigation (Attorney General) - Marshal Service (Attorney General) - White House Staff (Cabinet Secretary)
Flagged Groups (NSA, CIA, FBI Watchlist Groups): 
Clearance Level of User: Top Secret
Criminal Record: None.
Court Record: None.
Disciplinary Actions: None.
`)
  message.channel.send(embed)
}
