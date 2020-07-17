const Discord = require("discord.js");

 exports.run = (client, message, args) => {

   let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Help Command')  
    .setFooter("WRLD Bot | Developed by nolan.#0999")
    .addField("`,avatar`", "Displays the avatar of pinged user.")
    .addField("`,ban`", "Bans the pinged user permanetly unless manually unbanned.")
    .addField("`,kick`", "Kicks the pinged user from the server.")
    .addField("`,warn`", "Warns a user for an infraction.")
    .addField("`,mute`", "Mutes a user for a certain amount of time.")
    .addField("`,unmute`", "Unmutes a muted user.")
    .addField("`,purge`", "Deletes a certain amount of messages.")
    .addField("`,embed`", "Embeds a message.")
    .addField("`,say`", "Makes the bot say a message.")
    .addField("`,stats`", "Gives the stats of the bot.")
    .addField("`,suggest`", "Sends a suggestion to #suggestions")
    .addField("`,userinfo`", "Gives discord information for a user.")
    .addField("`,serverinfo", "Gives information on the server.")
    .addField("`,invite`", "Invites the bot to a server.")
message.delete().catch();
message.channel.send(embed);
}