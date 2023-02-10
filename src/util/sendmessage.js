export const sendMessageReceiveResponse = (message) => {
  console.log(123123);
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(message, (response) => {
      resolve(response);
    });
  });
};
