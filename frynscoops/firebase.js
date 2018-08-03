// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyBwLVZ2bAovT11Q8REEbKwnQ5bsm5SXgAE",
//   authDomain: "frynscoops.firebaseapp.com",
//   databaseURL: "https://frynscoops.firebaseio.com",
//   projectId: "frynscoops",
//   storageBucket: "",
//   messagingSenderId: "766135347041"
// };
// firebase.initializeApp(config);

// var database = firebase.database()

// function writeUserData (userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture: imageUrl
//   });
// }
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBwLVZ2bAovT11Q8REEbKwnQ5bsm5SXgAE',
  authDomain: 'frynscoops.firebaseapp.com',
  databaseURL: 'https://frynscoops.firebaseio.com',
  projectId: 'frynscoops',
  storageBucket: 'frynscoops.appspot.com',
  messagingSenderId: '766135347041'
}
firebase.initializeApp(config)

// Authenticate with Firebase anonymously
firebase
  .auth()
  .signInAnonymously()
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // ...
  })

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous
    var uid = user.uid
    // ...
    console.log('Anonymous')
  } else {
    // User is signed out.
    // ...
  }
  // ...
})

function writeUserData(email, name, phone, message) {
  let result;
  return firebase
    .database()
    .ref('messages/' + Math.floor(Math.random()*10000000000))
    .set(
      {
        nickname: name,
        email: email,
        message: message,
        phone: phone
      }
    )
}
