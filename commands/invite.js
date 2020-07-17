const Discord = require("discord.js")
exports.run = (client, message, args) => {
  
  let embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(client.user.username, client.user.displayAvatarURL)  
  .setTitle("Invite")
  .setDescription('[Bot Invite](https://discord.com/api/oauth2/authorize?client_id=733707417614811146&permissions=8&scope=bot)\n[Support Server](https://discord.gg/wrld)');
  message.author.send(embed)
}
