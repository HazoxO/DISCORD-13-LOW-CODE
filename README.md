<p align="center">
  <a href="https://cdn3.emoji.gg/emojis/3716-blurple-github.png">
    <img width="200" src="https://cdn3.emoji.gg/emojis/3716-blurple-github.png">
  </a>
</p>

<h1 align="center">Bot de DiscordJS con Poco Codigo!</h1>

<div align="center">
  
  **The most advanced string-based package to create a Discord Bot fast and powerful.**

[![AoiJS Server][aoijs-server]][aoijs-server-url]
  
[aoijs-server]: https://img.shields.io/discord/773352845738115102?color=5865F2&logo=discord&logoColor=white
[aoijs-server-url]: https://discord.com/invite/964sU7VdxJ

  </div>
  ##Installation

**node.js 16.6.0 or newer is required.**  


```bash
npm install aoi.js
```

```bash
yarn add aoi.js
```

## Setup

```js
const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: "DISCORD BOT TOKEN",
prefix: "DISCORD BOT PREFIX",
intents: ["GUILDS", "GUILD_MESSAGES"]
})
//Events
bot.onMessage()
//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})
//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
```

## REPLIT Setup

**Pones en el codigo como si hicieras un bot en replit normalmente pero despues en la instalacion:**

```php
npm init -y && npm i --save-dev node@17.4.0 aoi.js
```

**Modificas el Package.json**

```json
"scripts": {
    "start": "node ."
  },
```

**Despues abres los archivos ocultos**

<img src="https://res.cloudinary.com/ddskoq3no/image/upload/v1654487583/2022-06-05_22_52_13-Greenshot_k9ywdf.png">

**Modificas el .replit**
<p>Agregas este siguiente comando</p>

```json
run = "npm start"
```

