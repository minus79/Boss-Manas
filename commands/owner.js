module.exports = {
  name: 'owner',
  description: 'Show bot owner info.',
  execute(bot, message) {
    bot.sendMessage(message.from, '👑 Owner: Boss Manas');
  },
};
