
//ADD YOUR FIREBASE LINKS HERE
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
  
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

    function addRoom(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
purpose: "Adding Room Name"
      })

      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"

      
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("rooms_names:" + Room_names)
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML += row
//End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name", name)
window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

      window.location = "index.html"
}