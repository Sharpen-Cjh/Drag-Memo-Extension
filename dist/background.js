chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  (async () => {
    if (request.action === "createMemo") {
      try {
        const memo = {
          title: request.selectionText,
        };
        const { googleId, idToken } = request.userInfo.userInfo;
        const response = await fetch(
          `http://localhost:8080/users/${googleId}/memo`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: `Bearer ${idToken}`,
            },
            body: JSON.stringify(memo),
          }
        );
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
        const { googleId, idToken } = request.userInfo.userInfo;
        const response = await fetch(
          `http://localhost:8080/users/${googleId}/memos/${request.selectionText}`,
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: `Bearer ${idToken}`,
            },
          }
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
        const { googleId, idToken } = request.userInfo.userInfo;
        const response = await fetch(
          `http://localhost:8080/users/${googleId}/memos/${request.memoId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: `Bearer ${idToken}`,
            },
            body: JSON.stringify(memo),
          }
        );
        const result = await response.json();

        sendResponse(result);
      } catch (error) {
        sendResponse(error);
        console.log(error);
      }

      return;
    }

    if (request.action === "deleteMemo") {
      try {
        const { googleId, idToken } = request.userInfo.userInfo;
        const response = await fetch(
          `http://localhost:8080/users/${googleId}/memos/${request.memoId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: `Bearer ${idToken}`,
            },
          }
        );
        const result = await response.json();

        sendResponse(result);
      } catch (error) {
        sendResponse(error);
        console.log(error);
      }

      return;
    }

    if (request.action === "getMemoTitles") {
      try {
        const { googleId, idToken } = request.userInfo.userInfo;
        const response = await fetch(
          `http://localhost:8080/users/${googleId}/memos/titles`,
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: `Bearer ${idToken}`,
            },
          }
        );
        const result = await response.json();

        sendResponse(result);
        console.log(error);
      } catch (error) {
        console.log(error);
      }
      return;
    }
  })();

  return true;
});
