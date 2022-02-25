import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDM4Gpnwme1-DG--OLcojk274GSYgOpIRU",
    authDomain: "robot-friends-react-67612.firebaseapp.com",
    projectId: "robot-friends-react-67612",
    storageBucket: "robot-friends-react-67612.appspot.com",
    messagingSenderId: "684509213573",
    appId: "1:684509213573:web:25646f71a64448351d0aec",
    measurementId: "G-GX2QQYL772"
  };
  
const firebaseApp = firebase(firebaseConfig);

export default
    firebaseApp;
