module.exports = {
  name: 'quote',
  description: 'Send a random quote.',
  execute(bot, message) {
    bot.sendMessage(message.from, '💬 "Believe in yourself."');
  },
};