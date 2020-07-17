const Discord = require("discord.js")
exports.run = (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Error: Sorry, you do not have the correct Permissions MANAGE_MESSAGES.");
        if (isNaN(args[0])) return message.channel.send(":x: **ERROR:** Please Supply a Valid Number.");
        if (args[0] > 1000) return message.channel.send(":x: **ERROR:** In a single purge, there is a max of 1000 messages.");

        message.channel.bulkDelete(args[0])
        .then ( messages => message.channel.send(`**Successfully Deleted \`${messages.size}/${args[0]}\` messages.**`)
        .then(message => {
            message.delete(10000)
          }))

}
