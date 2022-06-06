const aoijs = require("aoi.js") // 引入aoi.js

const bot = new aoijs.Bot({ //la constante bot lo puedes cambiar por cualquier cosa. al igual el bot.command => loquepusistedeconts.command
token: "TUTOKEN", // token
prefix: "!", // prefix
intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Events
bot.onMessage() //Cuando se recibe un mensaje, haz algo.

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms` //pingms sirve para monitorear el tiempo que tarda el comando en ejecutarse
})

bot.command({
name: "say",
code: `$message`
})

bot.command({
name: "help",
code: `este es un mesanje de ayuda!`
})

//Ready Event
bot.readyCommand({ 
    channel: "981770596000088087",
    code: `$log[Ready on $userTag[$clientID]]`
})
