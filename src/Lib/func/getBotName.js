module.exports = {
  handle: (msg, params, client) => {
    return client.user.username;
  }
}