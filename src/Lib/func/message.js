module.exports = {
  handle: (msg, args) => {
    const words = msg.content.split(' ');
    if(!args) {
      return msg.content;
    }

    if(args[0] && !args[1]) {
      return words.slice(args[0] - 1).join(' ')
    } else if(!args[0] && args[1]) {
      return words.slice(0, args[1]).join(' ');
    } else if(args[0] && args[1]) {
      return words.slice(args[0] - 1, args[0]).join(' ');
    } else {
      throw new Error("Invald Params for func - message");
    }
  }
}