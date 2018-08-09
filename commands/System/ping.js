const Command = require("../../base/Command.js");

class Ping extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "Displays bot latency and API response times.",
      category: "System",
      usage: "ping",
      aliases: ["pong"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const msg = await message.channel.send("Ping! 🏓");
      msg.edit(`Pong! 🏓\nMessage roundtrip took: \`${msg.createdTimestamp - message.createdTimestamp}ms\`. Heartbeat (ping): \`${Math.round(this.client.ping)}ms\`.`);
    } catch (e) {
      this.client.logger.error(e);
    }
  }
}

module.exports = Ping;
