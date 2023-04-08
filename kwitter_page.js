//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name")

    function send(){
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like: 0

      })
      document.getElementById("msg").value = " "
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code        
console.log(firebase_message_id)
console.log(message_data)
name = message_data["name"]
message = message_data["message"]
like = message_data["like"]
nametag = "<h4>"+name +"<img class='user_tick' src='tick.png'></h4>"
messagetag = "<h3 class='message_h4'>"+message +"</h3>"
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLikes(this.id)'>"
spantag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>"

row = nametag + messagetag + like_button + spantag
document.getElementById("output").innerHTML +=row
//End code

      } });  }); }
getData();

function updateLikes(message_id){
  console.log("Message_id" + message_id)
  button_id = message_id
likes = document.getElementById(button_id).value
  update_Likes = Number(likes)+1
  console.log(update_Likes)

  firebase.database().ref(room_name).child(message_id).update({
    like: update_Likes
  })
}

function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")

  window.location = "index.html"
}