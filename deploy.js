const { cmd } = require('../lib/command')

cmd({
  pattern: 'deploy',
  desc: 'Style Kings Bot को deploy करने का पूरा तरीका बताता है',
  category: 'info',
  use: '.deploy'
}, async (m) => {
  const message = `
*👑 Style Kings Bot - Deploy Guide 👑*

*🚀 Step 1: Fork Repository*
🔗 https://github.com/Boss-Manas/👑-Style-Kings-Bot-👑/fork

*🔐 Step 2: Get Pair Code*
🌐 Replit: https://replit.com/@DGXeon/Xeon-PairCode?v=1  
🌐 Easy Method: https://knight-bot-paircode.onrender.com

📁 *creds.json* मिलने के बाद, उसे अपने GitHub repo के *session* फोल्डर में अपलोड करें।

*⚙️ Step 3: Deploy Bot*
📺 Tutorial: https://youtu.be/dDyiEHF8rIQ  
🖥️ Free Hosting: https://bot-hosting.net/?aff=1068419752923508776

🧠 *Katabump Panel से Host करें:*
🔗 https://dashboard.katabump.com/auth/login#d6b7d6

_Bot Owner: Boss Manas 👑_
`
  await m.reply(message)
})