module.exports = {
  name: 'toimg',
  description: 'Convert sticker to image.',
  execute(bot, message) {
    bot.sendMessage(message.from, '📸 Converting sticker to image...');
  },
};
