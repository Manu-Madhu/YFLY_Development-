importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyBMPXicM6F_WkYy1lgqS4Uv_LBNWT0KiPM",
    authDomain: "yfly-notification.firebaseapp.com",
    projectId: "yfly-notification",
    storageBucket: "yfly-notification.appspot.com",
    messagingSenderId: "443029180843",
    appId: "1:443029180843:web:f63e127fa0ce0dd27c02ee"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });