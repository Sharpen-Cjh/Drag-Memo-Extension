chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  (async () => {
    if (request.action === "createMemo") {
      try {
        const memo = {
          title: request.selectionText,
        };
        const response = await fetch("http://localhost:8080/memos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(memo),
        });
        const result = await response.json();
        sendResponse(result);
      } catch (error) {
        sendResponse(error);
        console.log(error);
      }
    }
  })();
  return true;
});
