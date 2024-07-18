how to use this lib?

```js
const {
  Client
} = require("@master-harttmans/vintage.js");


const bot = new Client({
  token: "YOUR_Bot_TOKEM"
});

bot.command("$Hello", "Hello, #author[username]");
bot.command("$say", "#message[1;]");
bot.start();
```

docs: read wiki in github!
