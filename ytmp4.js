module.exports = {
  name: 'ytmp4',
  description: 'Download YouTube video as MP4.',
  execute(bot, message) {
    bot.sendMessage(message.from, '🎥 Downloading MP4...');
  },
};