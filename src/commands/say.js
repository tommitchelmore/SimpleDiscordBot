const { MessageEmbed } = require("discord.js");
const config = require("../config");

module.exports = {
  name: "Say",
  description: "Stick a message in chat",
  hide: true,
  permission: "ADMINISTRATOR",
  command: async (message, args) => {
    message.delete();

    const embed = new MessageEmbed({
      ...config.embedTheme,
      title: args.join(" "),
      author: {
        name: "Message from " + message.author.username,
        iconURL: message.author.avatarURL(),
      },
    });

    await message.channel.send(embed);
  },
};
