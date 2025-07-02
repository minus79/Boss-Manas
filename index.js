const connect = require('./lib/connect'); // ✅ सही है

connect().catch(err => console.log("❌ Error:", err));
