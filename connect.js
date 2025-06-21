const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');
  const sock = makeWASocket({ auth: state });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;
    if (msg.key.fromMe) return;

    const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';

    if (text.startsWith('.sticker')) {
      const sticker = require('../commands/sticker');
      await sticker.execute(sock, msg);
    }
  });

  console.log("✅ Bot Connected to WhatsApp!");
}

const usePairingCode = true // या false कर दो और QR से login करो

module.exports = connectToWhatsApp;