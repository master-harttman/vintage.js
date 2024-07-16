class Interpreter {
  constructor(client) {
    this.client = client;
  }

  parse(response, msg) {
    return response.replace(/\$(\w+)\[(.*?)\]/g, (match, p1, p2) => {
      switch (p1) {
        case 'ping':
          return 'Pong!';
        case 'getBotName':
          return this.client.user.username;
        case 'getBotTag':
          return `${this.client.user.username}#${this.client.user.discriminator}`;
        case 'message':
          return this.handleMessage(p2, msg.content);
        case 'author':
          return this.handleName(p2, msg);
        default:
          return match;
      }
    });
  }

  handleMessage(params, content) {
    const words = content.split(' ');
    if (!params) {
      return content; // $message[]
    }

    const [start, end] = params.split(';').map(Number);
    if (start && !end) {
      return words.slice(start - 1).join(' '); // $message[5]
    } else if (!start && end) {
      return words.slice(0, end).join(' '); // $message[;5]
    } else if (start && end) {
      return words.slice(start - 1, end).join(' '); // $message[1;5]
    }

    return content;
  }

  handleName(params, msg) {
    const properties = params.split(';');
    const values = properties.map(param => msg.author[param]).filter(value => value !== undefined);
    return values.join(' ');
  }
}

module.exports = {
  Interpreter
}
