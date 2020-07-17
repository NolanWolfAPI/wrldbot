const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (message.channel.type == "dm") return message.channel.send("This command only works in a server!");
        if(!message.member.hasPermission("MANAGE_MESSAGES") || !message.guild.owner) return message.channel.send(message, "MANAGE_MESSAGES required.");
  
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!mutee) return message.cantfindUser(message.channel);

        let muterole = message.guild.roles.find(r => r.name === "Muted")
        if(!muterole) return message.channel.send("There is no mute role to remove!") //if no role

        if(!mutee.roles.has(muterole.id)) return message.channel.send("That user is not muted to begin with!"); //if not muted
        mutee.removeRole(muterole.id); //remove role
        return message.channel.send(`${mutee} has been unmuted!`);
    }
