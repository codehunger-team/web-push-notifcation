/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-analytics.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
    apiKey: "AIzaSyCc6ZkRQxufxbL2RFJse5p3WifshPmqOj0",
    authDomain: "fir-72c97.firebaseapp.com",
    databaseURL: "https://fir-72c97-default-rtdb.firebaseio.com",
    projectId: "fir-72c97",
    storageBucket: "fir-72c97.appspot.com",
    messagingSenderId: "322706324622",
    appId: "1:322706324622:web:500cd805e8b732cfa8dddf",
    measurementId: "G-WFCEJB3KRH"
    });
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   if (firebase.messaging.isSupported()) {
     firebase.messaging();
   }
/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
// Handle incoming messages. Called when:
// - a message is received while the app has focus

// Add the public key generated from the console here.
messaging.getToken({vapidKey: "fxHuyxxEE4uRaeAig6xJrN:APA91bF2z00nliBtjNnLx3KjJ9YuoMjNTw1Cw6Q6OIl27cfbPbPM8uN6atI9QqI-twG07l8RQLDWwZ_Xk010tntV-Pu4hxQZNGanlv8WROqH39eOb6EHhXwS_i022QWvBqjkyV46zlFk"});
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    /* Customize notification here */
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };
  
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});
console.log(notificationTitle);
