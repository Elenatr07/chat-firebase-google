import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { createContext } from 'react';


firebase.initializeApp({
  apiKey: "AIzaSyDDLEemdOpfycese9ZZJ8azCo4zTj6i8k0",
  authDomain: "chat-express-d3d7f.firebaseapp.com",
  projectId: "chat-express-d3d7f",
  storageBucket: "chat-express-d3d7f.appspot.com",
  messagingSenderId: "264503715783",
  appId: "1:264503715783:web:9f2c7bec41838414e71be2",
  measurementId: "G-QDXV3BC0T5"
})

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>

    <App />
  </Context.Provider>,
  document.getElementById('root')
);


