const connect = require('./lib/connect');

connect().catch(err => console.log("❌ Error:", err));
