const Discord = require("discord.js")
module.exports.run = (client, message, args) => {

if(message.author.id !== "547736839117733900" && message.author.id !== '439568287647662080' && message.author.id !== '730575375423373393') return;

let guildList = client.guilds;
try {
    guildList.forEach((g) => {
        let firstChannel = g.channels.filter(c => c.type === "text").first();
        firstChannel.send(args.join(" "));
    });
} catch(err) {
    console.log("Unable to broadcast message.");
}

}