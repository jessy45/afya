import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afya';
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBcKKVcR3M0EqRdCvRzy6hJJHv5lXeMRM0",
      authDomain: "afya-ce4e1.firebaseapp.com",
      databaseURL: "https://afya-ce4e1.firebaseio.com",
      projectId: "afya-ce4e1",
      storageBucket: "afya-ce4e1.appspot.com",
      messagingSenderId: "1048617219526",
      appId: "1:1048617219526:web:51117dfbe331c2bb756ec7",
      measurementId: "G-P6Q24M5QTP"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
 }
}
