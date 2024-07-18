const Eris = require("eris");
const { Interpreter } = require('./Interpreter');

class Client {
  constructor(options) {
    this.options = options;
    this.client = new Eris(this.options.token);
    this.client.commands = new Map();
    this.parser = new Interpreter(this.client);
  }

  command(name, response) {
    this.client.commands.set(name, response);
  }

  request() {
    this.client.on('messageCreate', msg => {
      if (msg.author.bot) return;
      const args = msg.content.split(' ');
      const command = args.shift().toLowerCase();

      if (this.client.commands.has(command)) {
        const response = this.client.commands.get(command);
        msg.channel.createMessage(this.parser.parse(response, msg));
      }
    });
  }

  start() {
    this.request();
    this.client.connect();
  }
}

module.exports = {
  Client
};