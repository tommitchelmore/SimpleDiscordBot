const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const path = require("path");
const config = require("../config");

module.exports = {
  name: "Help",
  description: "The bot's help command",
  command: async (message) => {
    const embed = new MessageEmbed({
      ...config.embedTheme,
      title: "Stinker help",
      description: `A full list of available commands - you can use any of them like this: \`${config.prefix}<command>\``,
    });

    const files = await fs.promises.readdir(__dirname);
    files.forEach((file) => {
      file = require(`./${file}`);
      if (
        file.hide ||
        file.name === undefined ||
        file.description === undefined
      )
        return;
      embed.addField(file.name, file.description);
    });

    await message.channel.send(embed);
  },
};
