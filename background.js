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

      return;
    }

    if (request.action === "getMemo") {
      try {
        const response = await fetch(
          `http://localhost:8080/memos/${request.selectionText}`
        );
        const result = await response.json();

        sendResponse(result);
      } catch (error) {
        sendResponse(error);
        console.log(error);
      }

      return;
    }

    if (request.action === "patchMemo") {
      try {
        const memo = {
          title: request.memoId,
          description: request.innerText,
        };
        const response = await fetch(
          `http://localhost:8080/memos/${request.memoId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(memo),
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  })();
  return true;
});
