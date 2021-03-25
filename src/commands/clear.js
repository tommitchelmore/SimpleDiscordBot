const { MessageEmbed } = require("discord.js");
const config = require("../config");

module.exports = {
  name: "Clear",
  description: "Clear messages",
  permission: "ADMINISTRATOR",
  command: async (message, args) => {
    if (!args[0])
      return await message.reply(
        "Please specify a number of messages to clear"
      );

    message.delete();

    try {
      await message.channel.bulkDelete(args[0]);

      const embed = new MessageEmbed({
        ...config.embedTheme,
        title: `Cleared ${args[0]} messages`,
        description: "(Where possible)",
      });

      await message.channel.send(embed);
    } catch (e) {
      await message.reply("Failed to delete messages");
    }
  },
};
