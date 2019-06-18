(function(){
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeW-gE5hhyCAbmLXKV9gHiDS40imlf1ys",
    authDomain: "gamepoint-677f1.firebaseapp.com",
    databaseURL: "https://gamepoint-677f1.firebaseio.com",
    projectId: "gamepoint-677f1",
    storageBucket: "gamepoint-677f1.appspot.com",
    messagingSenderId: "1047445270506",
    appId: "1:1047445270506:web:f611ca3ff7f5cfc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Get elements
const textEmail = document.getElementById("textEmail");
const textPassword = document.getElementById("textPassword");
const signIn = document.getElementById("signIn");
const signOut = document.getElementById("signOut");
const createAccount = document.getElementById("createAccount");


signIn.addEventListener('click', e => {
    const email = textEmail.value;
    const pass = textPassword.value;
    const auth = firebase.auth();

    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

//Add signup Event

    createAccount.addEventListener('click', e => {
        //TODO: check for real email
        const email = textEmail.value;
        const pass = textPassword.value;
        const auth = firebase.auth();
    
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    signOut.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        signOut.classList.remove("hide");
    } else {
        console.log("not logged in");
        signOut.classList.add("hide");
    }
    });

}());

