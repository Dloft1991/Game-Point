
// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyBCxWHPFt6Cy0vSRMHeRt4cpxup-MZ7mAk",
    authDomain: "gamepoint-a3bee.firebaseapp.com",
    databaseURL: "https://gamepoint-a3bee.firebaseio.com",
    projectId: "gamepoint-a3bee",
    storageBucket: "gamepoint-a3bee.appspot.com",
    messagingSenderId: "977653430582",
    appId: "1:977653430582:web:269971e392c4823d"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

//Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignOut = document.getElementById("btnSignOut");
const btnSignUp = document.getElementById("btnSignUp");
const auth = firebase.auth();

btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    console.log("Signed In");
   
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    
    
});

//Add signup Event

    btnSignUp.addEventListener('click', e => {
        //TODO: check for real email
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        console.log("Signed Up");
        
    
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        
    });

    btnSignOut.addEventListener('click', e => {
        firebase.auth().signOut();
        
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        btnSignOut.classList.remove("hide");
    } else {
        console.log("not logged in");
        btnSignOut.classList.add("hide");
    }
    });
