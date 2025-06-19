module.exports = {
  name: 'ytmp3',
  description: 'Download YouTube video as MP3.',
  execute(bot, message) {
    bot.sendMessage(message.from, '🎵 Downloading MP3...');
  },
};
