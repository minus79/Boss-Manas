# 👑 Style Kings Bot 👑

<p align="center">
  <img src="https://files.catbox.moe/tuzl2r.jpg" />
</p>

**One of the Best WhatsApp Multi-Device Bots!**

const { stylekings } = require('../lib');

stylekings({
  pattern: 'deploy',
  desc: 'Deploy instructions for the bot',
  category: 'general',
  use: '.deploy',
  filename: __filename,
}, async (m, { conn }) => {
  const deployText = `*🚀 Style Kings Bot Deployment Guide*

*Step 1: Fork the Repository*
🔗 https://github.com/mruniquehacker/Knightbot-MD/fork

*Step 2: Get Pair Code*
🛠️ Replit: https://replit.com/@DGXeon/Xeon-PairCode?v=1
🔗 Easy Link: https://knight-bot-paircode.onrender.com

📁 creds.json फ़ाइल को *session* फोल्डर में अपलोड करें

*Step 3: Deploy Now*
🎥 Tutorial: https://youtu.be/dDyiEHF8rIQ
🖥️ Hosting: https://bot-hosting.net/?aff=1068419752923508776

🌐 Panel Deploy:
➡️ https://dashboard.katabump.com/auth/login#d6b7d6

_Bot by Boss Manas 👑_
`;

  await conn.sendMessage(m.chat, { text: deployText }, { quoted: m });
});

## 🛠 Features
- Group Management
- Auto Reply
- Media Tools
- Anime & Fun Commands
- And more...

## 🚀 Setup Instructions

### 4. Fork the Repository
Click the top-right button to fork this repo to your GitHub account.

### 5. Deploy on Railway
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/)

### 6. Scan QR
Run the bot locally or via Termux and scan QR to get started.

---

👑 Made with love by Boss Manas
