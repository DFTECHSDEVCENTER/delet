const Command = require("../../base/Command.js");

class Say extends Command {
    constructor(client) {
      super(client, {
        name: "say",
        description: "Repeats your message.",
        category: "Fun",
        usage: "say [message]",
        aliases: ["repeat", "echo"]
      });
    }

    async run(message, args, level, settings) { // eslint-disable-line no-unused-vars
      const ttsArgs = message.content.split(" ").slice(2);

      if (message.content.toLowerCase().startsWith(`${settings.prefix}say tts`)) {
        message.channel.send(ttsArgs.join(" "), { tts: true });
      } else {
        message.channel.send(args.join(" "));
      }
    }
}

module.exports = Say;