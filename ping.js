module.exports = {
  name: 'ping',
  description: 'Check bot status.',
  execute(bot, message) {
    bot.sendMessage(message.from, '✅ Bot is online!');
  },
};