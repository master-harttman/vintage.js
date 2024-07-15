class Inerprer {
  constructor() {}

  static parse(response) {
    return response.replace(/\$(\w+)\[\]/g, (match, p1) => {
      switch (p1) {
        case 'ping':
          return 'Pong!';
        default:
          return match;
      }
    });
  }
}

module.exports = {
  Inerprer
}
