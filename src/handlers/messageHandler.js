const config = require("../config");

module.exports = function messageHandler(message, client) {
  //Return if bot
  if (message.author.bot) return;

  //Handle commands
  if (message.content.startsWith(config.prefix)) {
    try {
      const input = message.content.slice(config.prefix.length).split(" ");
      if (input[0] == "") input.shift();
      const file = require(`../commands/${input[0]}.js`);

      if (file.permission && !message.member.hasPermission(file.permission)) {
        return message.reply(`You don't have permission (${file.permission})`);
      }

      const args = message.content.split(" ");
      args.shift();

      file.command(message, args, client);
    } catch (e) {
      console.log(e);
      return message.reply("Command not found");
    }
  }
};
