import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import axios from "../api/axios";
import { notifyRoute } from "../utils/Endpoint";

const firebaseConfig = {
    apiKey: "AIzaSyBMPXicM6F_WkYy1lgqS4Uv_LBNWT0KiPM",
    authDomain: "yfly-notification.firebaseapp.com",
    projectId: "yfly-notification",
    storageBucket: "yfly-notification.appspot.com",
    messagingSenderId: "443029180843",
    appId: "1:443029180843:web:f63e127fa0ce0dd27c02ee"
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const requestPermissionAndGetToken = async (userId) => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const token = await getToken(messaging, {vapidKey: "BMzUxQCa4DAvV9C_yEynasBeBT4BvGXHNyzUWo3Dvi-4TCTb-q565aZMvPlDjgWzFlwkRYd_XRWa-9ncf6jkAzE"});

        if(token){
          console.log('FCM Token:', token);
          saveTokenToServer(userId, token);
        }else{
          console.log("Failed to generate the app registration token")
        }
      
      }
      else{
        console.log('user permission denied')
      }


    } catch (error) {
      console.error('Error getting FCM token:', error);
    }
  };


  const saveTokenToServer = async (userId, token) => {
    try {
      await axios.post(`${notifyRoute}/fcmtoken`, { userId, token });
      console.log('Token sent to server successfully');
    } catch (error) {
      console.error('Error sending token to server:', error);
    }
  };


  export const onMessageListener = () => {
    return new Promise((resolve, reject) => {
      onMessage(messaging, (payload) => {
        console.log('Message recieved')
        console.log(payload)
        resolve(payload);
      }, (error) => {
        console.log(error)
        reject(error);
      });
    });
  };