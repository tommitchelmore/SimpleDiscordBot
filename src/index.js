const D = require("discord.js");
const config = require("./config");
const messageHandler = require("./handlers/messageHandler");
const client = new D.Client();
require("dotenv").config();

client.on("ready", () => {
  client.user.setPresence({
    activity: { name: `${config.prefix}help`, type: "LISTENING" },
    status: "dnd",
  });

  console.log(`Logged in as ${client.user.tag}`);

  /*
    client.channels.fetch(config.ids.channels.general)
        .then(c => c.send("I'm awake bitches"))
        .catch(e => console.log("Couldn't send wake up message!"))
    */
});

client.on("message", (m) => messageHandler(m, client));

client.login(process.env.TOKEN);

module.exports = client;
