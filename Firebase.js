 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDFtJ0iraHeuvDNbH0oXscbrdnaWtzD3Ys",
    authDomain: "travelroulette-d67cf.firebaseapp.com",
    databaseURL: "https://travelroulette-d67cf.firebaseio.com",
    projectId: "travelroulette-d67cf",
    storageBucket: "travelroulette-d67cf.appspot.com",
    messagingSenderId: "371053367490"
  };
  firebase.initializeApp(config);


  
  // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });


  var provider = new firebase.auth.GithubAuthProvider();
 provider.addScope('repo');
 firebase.auth().signInWithPopup(provider).then(function(result) {
   // This gives you a GitHub Access Token.
   var token = result.credential.accessToken;
   // The signed-in user info.
   var user = result.user;

   console.log(result)
 }).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // The email of the user's account used.
   var email = error.email;
   // The firebase.auth.AuthCredential type that was used.
   var credential = error.credential;
   if (errorCode === 'auth/account-exists-with-different-credential') {
     alert('You have signed up with a different provider for that email.');
     // Handle linking here if your app allows it.
   } else {
     console.error(error);
   }
 });
