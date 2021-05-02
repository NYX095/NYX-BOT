let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
WHATSAPP BOT TUTORIAL

$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ pkg install bash -y
$ git clone https://github.com/NYX095/NYX-BOT
$ cd NYX-BOT
$ (npm install) Atau (bash install.sh)
$ node index.js
```

Recode: NYX
Script Ori Oleh : Nurutomo
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

