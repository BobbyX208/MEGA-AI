let handler = async (m, { conn, command, args, usedPrefix }) => {
  let user = global.db.data.users[m.sender]

  if (user.chicken > 0) return m.reply('You already have this')
  if (user.gold < 500)
    return m.reply(`🟥 *You don't have sufficient amount of gold in your wallet to buy a chicken*`)

  user.gold -= 1000
  user.chicken += 1
  m.reply(
    `🎉 You have successfully bought a chicken to fight! Use the command ${usedPrefix}cock-fight <amount>`
  )
}

handler.help = ['buych']
handler.tags = ['economy']
handler.command = ['buy-chicken', 'buych']

handler.group = true

export default handler
