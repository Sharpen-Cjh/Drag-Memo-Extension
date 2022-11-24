import { firebaseApp } from "./firebase_config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, async (user) => {
  if (user != null) {
    const { displayName, reloadUserInfo } = user;
    const idToken = await user.getIdToken();
    const userInfo = {
      username: displayName,
      googleId: reloadUserInfo.localId,
      idToken,
    };
    const { status } = await fetch("https://api.hello-word.site/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify(userInfo),
    });

    status === 200
      ? chrome.storage.local.set({ userInfo })
      : window.location.replace("./popup.html");
  } else {
    console.log("No user");
  }
});

document.querySelector(".button-logout").addEventListener("click", async () => {
  auth.signOut();

  chrome.storage.local.clear(() => {
    const error = chrome.runtime.lastError;
    if (error) {
      console.log(error);

      return;
    }
  });
  window.location.replace("./popup.html");
});

document.querySelector(".button-homePage").addEventListener("click", () => {
  window.open("https://www.hello-word.site");
});
