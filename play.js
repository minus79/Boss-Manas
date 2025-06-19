module.exports = {
  name: 'play',
  description: 'Play a song from YouTube.',
  execute(bot, message) {
    bot.sendMessage(message.from, '🔊 Playing your requested song...');
  },
};