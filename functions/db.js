const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp(functions.config().firebase);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
