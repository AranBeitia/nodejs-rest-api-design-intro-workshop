// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const admin = require("firebase-admin");
const config = require("../config/config");

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: FB_API_KEY,
//   authDomain: FB_AUTH_DOMAIN,
//   projectId: FB_PROJECT_ID,
//   storageBucket: FB_STORAGE_BUCKET,
//   messagingSenderId: FB_MESSAGE_SENDER_ID,
//   appId: FB_APP_ID,
// };

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(config.firebase.certConfig),
});

const auth = admin.auth();

module.exports = {
  admin: admin,
  auth: auth,
};
