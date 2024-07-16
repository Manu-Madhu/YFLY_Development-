import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMPXicM6F_WkYy1lgqS4Uv_LBNWT0KiPM",
    authDomain: "yfly-notification.firebaseapp.com",
    projectId: "yfly-notification",
    storageBucket: "yfly-notification.appspot.com",
    messagingSenderId: "443029180843",
    appId: "1:443029180843:web:f63e127fa0ce0dd27c02ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

