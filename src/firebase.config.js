import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAgXKsuGZjPYLToWwHZDHzTq0tB5uRAL-A",
    authDomain: "resturantapp-9afb1.firebaseapp.com",
    databaseURL: "https://resturantapp-9afb1-default-rtdb.firebaseio.com",
    projectId: "resturantapp-9afb1",
    storageBucket: "resturantapp-9afb1.appspot.com",
    messagingSenderId: "240079174620",
    appId: "1:240079174620:web:479872cc61d74ec083ed19"
  };
  


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)


export {app, firestore, storage};