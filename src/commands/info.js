const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const path = require("path");
const config = require("../config");

module.exports = {
  name: "Information",
  description: "Print the info",
  hide: true,
  permission: "ADMINISTRATOR",
  command: async (message) => {
    message.delete();

    const embed = new MessageEmbed({
      ...config.embedTheme,
      title: "Information",
      fields: [
        {
          name: "1. There are no rules",
          value: "Just respect eachother ye",
        },
        {
          name: "2. Ask & get",
          value: "This place is everyone's - if you want something just ask",
        },
      ],
    });

    await message.channel.send(embed);
  },
};
