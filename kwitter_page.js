//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAi58a5znMVS9f_CSAThVW8cB4IWKozGXo",
      authDomain: "class-93-quitter.firebaseapp.com",
      databaseURL: "https://class-93-quitter-default-rtdb.firebaseio.com",
      projectId: "class-93-quitter",
      storageBucket: "class-93-quitter.appspot.com",
      messagingSenderId: "147719887222",
      appId: "1:147719887222:web:f3bab2555ad944e6058257"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name")
var room_name = localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
