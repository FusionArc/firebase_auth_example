var firebase = require("firebase/app");
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
console.log('FIREBASE');
const auth = firebase.auth();

// signed in / not signed in //
const signedIn = document.getElementById('signed-in');
const signedOut = document.getElementById('signed-out');

// buttons //
const googleLoginButton = document.getElementById('google-login-button');
const emailLoginButton = document.getElementById('email-login-button');
const signOutButton = document.getElementById('sign-out-button');

// Users Profile //
const userDetails = document.getElementById('user-details');

// Social Auth Init //
const provider = new firebase.auth.GoogleAuthProvider();

// button functionality / event handlers //
googleLoginButton.onclick = () => auth.signInWithPopup(provider);
signOutButton.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        signedIn.hidden = "false";
        signedOut.innerHTML.hidden = "true";
        userDetails.innerHTML = `<h4>${user.displayName}</h4>`;
        userDetails.style.marginRight = "3rem";
        console.log(`${user.uid}`);
    } else {
        signedOut.hidden = "false";
        signedIn.hidden = "true";
        userDetails.innerHTML = "";
    }
});
