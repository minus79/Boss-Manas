module.exports = {
  name: 'sticker',
  description: 'Convert image to sticker.',
  execute(bot, message) {
    bot.sendMessage(message.from, '🖼️ Converting image to sticker...');
  },
};
