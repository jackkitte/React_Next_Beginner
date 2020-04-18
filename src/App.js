import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/Sampledata';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBhv8u5jybdvqpIhtmlhd2XoJp4FYzOSTY",
  authDomain: "react-beginner-2c891.firebaseapp.com",
  databaseURL: "https://react-beginner-2c891.firebaseio.com",
  projectId: "react-beginner-2c891",
  storageBucket: "react-beginner-2c891.appspot.com",
  messagingSenderId: "363290921869",
  appId: "1:363290921869:web:6bf6f5c39eb621d7280bc4",
  measurementId: "G-NZKRMGST8V"
}

firebase.initializeApp(config);
class App extends Component {

  render() {
    return (
      <div>
        <h1>Memo</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}

export default App;
