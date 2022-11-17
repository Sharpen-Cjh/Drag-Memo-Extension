chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
  try {
    const memo = {
      title: msg,
    };

    const response = await fetch("http://localhost:8080/memo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(memo),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
