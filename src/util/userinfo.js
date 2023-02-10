export const getUserInfo = async () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get("userInfo", (userInfo) => {
      userInfo ? resolve(userInfo) : reject();
    });
  });
};
