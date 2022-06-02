const aoijs = require("aoi.js") // 引入aoi.js

const AntonioMLZ = new aoijs.Bot({
token: "OTgxNzcwMTkxMDE0ODc5MjMy.Gs2-9t.fqNcbPKtuoMtaOEhiAvpHx8IiQZ2B0bcPrnopk", // token
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