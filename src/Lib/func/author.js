module.exports = {
  handle: (msg, params) => {
    const values = params.map(p => msg.author[params]).filter(v => v != undefined);
    return values.join(' ');
  }
}