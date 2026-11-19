// Safe to commit: it only contains placeholders.
// The GitHub deploy workflow fills them from your repository secrets and publishes the result as firebase-config.js.
// For local use, copy this file to firebase-config.js (it is git-ignored) and type your real values in.
window.WFM_CONFIG = {
  firebase: {
    apiKey:      "__FIREBASE_API_KEY__",
    authDomain:  "__FIREBASE_AUTH_DOMAIN__",
    databaseURL: "__FIREBASE_DATABASE_URL__",
    projectId:   "__FIREBASE_PROJECT_ID__",
    appId:       "__FIREBASE_APP_ID__"
  },
  requireSignIn: "__REQUIRE_SIGN_IN__"   // "true" = people must sign in with email + password
};
