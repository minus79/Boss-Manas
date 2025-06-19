module.exports = {
  name: 'menu',
  description: 'Show all commands.',
  execute(bot, message) {
    bot.sendMessage(message.from, '📜 Commands: menu, ping, play, sticker, ytmp3, ytmp4, gpt...');
  },
};