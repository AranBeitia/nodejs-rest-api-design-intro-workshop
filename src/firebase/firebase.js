const admin = require("firebase-admin");
const config = require("../config/config");

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(config.firebase.certConfig),
});

const auth = admin.auth();

module.exports = {
  admin: admin,
  auth: auth,
};
