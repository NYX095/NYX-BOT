let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • INDOSAT [085817414657]
│ • Telkomsel [081216465289]
│ • DANA [085815163593]
│ • TRI [089507455314]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281216465289
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa Tsel"
3.)Dan terus masukkan nomor kami 081216465289
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
