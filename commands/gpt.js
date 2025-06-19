module.exports = {
  name: 'gpt',
  description: 'Ask ChatGPT anything.',
  execute(bot, message) {
    bot.sendMessage(message.from, '🤖 GPT: How can I help you?');
  },
};
