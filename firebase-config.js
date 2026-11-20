// Copy the Web App config from Firebase Console > Project settings > Your apps.
// These values are public web-app identifiers, not service-account secrets.
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_APP_ID"
};
export const configured = !Object.values(firebaseConfig).some(v => String(v).startsWith("PASTE_"));
