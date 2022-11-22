console.log("popup!");

import { firebaseApp } from "./firebase_config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const auth = getAuth(firebaseApp);
setPersistence(auth, browserLocalPersistence);

function init() {
  chrome.storage.local.get("userInfo", (userInfo) => {
    console.log(userInfo);
    if (Object.keys(userInfo).length !== 0) {
      window.location.replace("./main.html");

      return;
    }
  });
}
init();

document.querySelector(".button-google").addEventListener("click", () => {
  initFirebaseApp();
});

function initFirebaseApp() {
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      window.location.replace("./main.html");
    } else {
      startSignIn();
    }
  });
}

function startSignIn() {
  const user = auth.currentUser;
  if (user) {
    auth.signOut();
  } else {
    startAuth(true);
  }
}

function startAuth(interactive) {
  chrome.identity.getAuthToken({ interactive: true }, function (token) {
    if (chrome.runtime.lastError && !interactive) {
    } else if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else if (token) {
      const credential = GoogleAuthProvider.credential(null, token);

      signInWithCredential(auth, credential)
        .then((result) => {
          console.log("Success");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error("The OAuth token was null");
    }
  });
}
