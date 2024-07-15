how to use this lib?

EASY!
```js
const {
  Client
} = require("@master-harttmans/vintage.js");


const bot = new Client({
  token: "YOUR_Bot_TOKEM"
});

bot.command("ping", "$ping[]");
bot.start();
```