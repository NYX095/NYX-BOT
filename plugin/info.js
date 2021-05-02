let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: NYX
Script: @Nurotomo
Github: 
https://github.com/NYX095

*Sosmed :*
Kritik kami di sosmed.
OWNER UTAMA : +62 858-1741-4657
OWNER 2 : +62 812-1646-5289

*Thanks To :*
Nurotomo
NYX
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
║>DONASI? KETIK #donasi
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

