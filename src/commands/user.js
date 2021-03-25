const { MessageEmbed } = require("discord.js");
const config = require("../config");

module.exports = {
  name: "User",
  description: "Get a user's information",
  command: async (message) => {
    try {
      const user = message.mentions.users.first() || message.author;

      const embed = new MessageEmbed({
        ...config.embedTheme,
        title: `Information for ${user.username}`,
        fields: [
          {
            name: "Account",
            value: `${user.tag} (${user.id})`,
          },
          {
            name: "Account created",
            value: user.createdAt,
          },
          {
            name: "Bot?",
            value: user.bot,
          },
        ],
        thumbnail: {
          url: user.avatarURL(),
        },
      });

      await message.channel.send(embed);
    } catch (e) {
      await message.reply("Failed to fetch user information");
    }
  },
};
