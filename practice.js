
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvQi3nPUQTAsvKEZOqriNiLhn_SHGQEiI",
    authDomain: "c42project-76068.firebaseapp.com",
    databaseURL: "https://c42project-76068-default-rtdb.firebaseio.com",
    projectId: "c42project-76068",
    storageBucket: "c42project-76068.appspot.com",
    messagingSenderId: "902051016262",
    appId: "1:902051016262:web:6a43375783aa21c999e447"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  function addUser(){

    user_name = document.getElementById("user_name").value
firebase.database().ref("/").child(user_name).update({
    Name: "Trisha"
})

   
  }