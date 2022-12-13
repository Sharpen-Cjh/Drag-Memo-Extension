import { MESSAGE } from "../constants/message";
import { ICON } from "../icons/icon";

document.addEventListener("mouseup", (event) => {
  renderToolBox(event);
});

const makeToolBoxIcon = (event, selectionText) => {
  const toolBox = document.createElement("div");
  const getMemoIcon = document.createElement("div");
  const createMemoIcon = document.createElement("div");
  const showHighLightIcon = document.createElement("div");

  toolBox.style.display = "flex";
  toolBox.style.flexDirection = "row";
  toolBox.style.width = "95px";
  toolBox.style.height = "28px";
  toolBox.style.position = "absolute";
  toolBox.style.left = `${event.pageX}px`;
  toolBox.style.top = `${event.pageY}px`;
  toolBox.style.zIndex = 10;
  toolBox.style.backgroundColor = "#ffffff";
  toolBox.setAttribute("id", "tool-box");

  getMemoIcon.style.zIndex = 11;
  getMemoIcon.style.border = "1px solid #0d6efd";
  getMemoIcon.style.borderRadius = "2px";
  getMemoIcon.innerHTML = ICON.getMemo;
  getMemoIcon.setAttribute("class", "get-memo-button");

  getMemoIcon.addEventListener("click", (event) => {
    getMemo(event, selectionText, toolBox);
  });

  createMemoIcon.style.zIndex = 11;
  createMemoIcon.style.border = "1px solid #0d6efd";
  createMemoIcon.style.borderRadius = "2px";
  createMemoIcon.innerHTML = ICON.createMemo;
  createMemoIcon.setAttribute("class", "create-memo-button");

  createMemoIcon.addEventListener("click", () => {
    createMemo(event, selectionText, toolBox);
  });

  showHighLightIcon.style.zIndex = 11;
  showHighLightIcon.style.border = "1px solid #0d6efd";
  showHighLightIcon.style.borderRadius = "2px";
  showHighLightIcon.innerHTML = ICON.showHighLight;

  showHighLightIcon.addEventListener("click", () => {
    showSavedTitles(toolBox, event);
  });

  toolBox.appendChild(getMemoIcon);
  toolBox.appendChild(createMemoIcon);
  toolBox.appendChild(showHighLightIcon);

  document.body.appendChild(toolBox);
};

const renderMemoEditor = (event, title, description) => {
  const memoEditorContainer = document.createElement("div");
  const memoEditorHeader = document.createElement("div");
  const memoTitle = document.createElement("div");
  const memoDeleteButton = document.createElement("div");
  const memoCloseButton = document.createElement("div");
  const memoEditor = document.createElement("div");

  memoEditorContainer.style.display = "flex";
  memoEditorContainer.style.flexDirection = "column";
  memoEditorContainer.style.backgroundColor = "#ffffff";
  memoEditorContainer.style.color = "black";
  memoEditorContainer.style.position = "absolute";
  memoEditorContainer.style.width = "300px";
  memoEditorContainer.style.height = "300px";
  memoEditorContainer.style.left = `${event.pageX}px`;
  memoEditorContainer.style.top = `${event.pageY}px`;
  memoEditorContainer.style.zIndex = 8;
  memoEditorContainer.style.border = "3px solid #0d6efd";
  memoEditorContainer.style.borderRadius = "5px";
  memoEditorContainer.setAttribute("class", "memoEditor-container");
  memoEditorContainer.setAttribute("id", title);

  memoEditorHeader.style.width = "300px";
  memoEditorHeader.style.height = "30px";
  memoEditorHeader.style.display = "flex";
  memoEditorHeader.style.flexDirection = "row";
  memoEditorHeader.style.justifyContent = "space-between";
  memoEditorHeader.setAttribute("class", "memoEditor-header");

  memoDeleteButton.style.width = "30px";
  memoDeleteButton.style.height = "30px";
  memoDeleteButton.innerHTML = ICON.deleteMemo;
  memoDeleteButton.setAttribute("class", "memo-save-button");

  memoDeleteButton.addEventListener("click", () => {
    deleteMemo(title);
  });

  memoCloseButton.style.width = "25px";
  memoCloseButton.style.height = "25px";
  memoCloseButton.style.margin = "0px";
  memoCloseButton.innerHTML = ICON.closeMemo;

  memoCloseButton.addEventListener("click", () => {
    closeMemo(title);
  });
  memoCloseButton.setAttribute("class", "memo-close-button");

  memoTitle.style.width = "240px";
  memoTitle.style.height = "30px";
  memoTitle.style.color = "black";
  memoTitle.style.fontWeight = "20px";
  memoTitle.style.fontSize = "20px";
  memoTitle.textContent = title;

  memoEditor.style.width = "300px";
  memoEditor.style.height = "300px";
  memoEditor.style.overflow = "auto";
  memoEditor.style.marginTop = "10px";
  memoEditor.contentEditable = "true";
  memoEditor.setAttribute("class", "memo-editor");
  memoEditor.innerText = description || "";

  memoEditorContainer.appendChild(memoEditorHeader);
  memoEditorContainer.appendChild(memoTitle);
  memoEditorContainer.appendChild(memoEditor);
  memoEditorHeader.appendChild(memoDeleteButton);
  memoEditorHeader.appendChild(memoCloseButton);

  document.body.appendChild(memoEditorContainer);
};

const renderToolBox = (event) => {
  const selection = window.getSelection();
  const selectionText = selection.toString().trim();
  const toolBox = document.getElementById("tool-box");

  if (selectionText && !toolBox) {
    makeToolBoxIcon(event, selectionText);

    return;
  } else if (toolBox !== event.target.parentNode) {
    toolBox?.parentNode.removeChild(toolBox);
  }
};

const getMemo = (event, selectionText, toolBox) => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }

    chrome.runtime.sendMessage(
      { action: "getMemo", selectionText, userInfo },
      (response) => {
        if (response.success && response.memo !== null) {
          const {
            memo: { title, description },
          } = response;

          renderMemoEditor(event, title, description);
          toolBox?.parentNode.removeChild(toolBox);

          return;
        } else {
          window.alert(MESSAGE.FAIL_GET_MEMO);

          toolBox?.parentNode.removeChild(toolBox);
        }
      }
    );
  });
};

const createMemo = (event, selectionText, toolBox) => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }

    chrome.runtime.sendMessage(
      {
        action: "createMemo",
        selectionText,
        userInfo,
      },
      (response) => {
        if (response.success) {
          window.alert(MESSAGE.SUCCESS_CREATE_MEMO);

          renderMemoEditor(event, selectionText);

          toolBox.parentNode.removeChild(toolBox);

          return;
        } else {
          window.alert(MESSAGE.FAIL_CREATE_MEMO);

          toolBox.parentNode.removeChild(toolBox);
        }
      }
    );
  });
};

const showSavedTitles = (toolBox, event) => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }
    chrome.runtime.sendMessage(
      { action: "getMemoTitles", userInfo },
      (response) => {
        if (response.length !== 0) {
          response.forEach((title) => {
            highlight(title, event);
            toolBox?.parentNode?.removeChild(toolBox);
          });

          return;
        } else {
          window.alert(MESSAGE.FAIL_GET_MEMO_TITLES);
          toolBox?.parentNode.removeChild(toolBox);
        }
      }
    );
  });
};

const deleteMemo = (memoId) => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }

    const result = window.confirm(MESSAGE.CONFIRM_DELETE);
    const memoEditorContainer = document.getElementById(memoId);

    if (result) {
      chrome.runtime.sendMessage(
        { action: "deleteMemo", memoId, userInfo },
        (response) => {
          if (response.success) {
            memoEditorContainer.parentNode.removeChild(memoEditorContainer);

            return;
          } else {
            window.alert(MESSAGE.FAIL_DELETE_MEMO);
            memoEditorContainer.parentNode.removeChild(memoEditorContainer);
          }
        }
      );

      return;
    }
  });
};

const closeMemo = (memoId) => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }

    const { innerText } = document.getElementsByClassName("memo-editor")[0];
    const memoEditorContainer = document.getElementById(memoId);

    chrome.runtime.sendMessage(
      {
        action: "patchMemo",
        memoId,
        innerText,
        userInfo,
      },
      (response) => {
        if (response.success) {
          memoEditorContainer.parentNode.removeChild(memoEditorContainer);

          return;
        } else {
          window.alert(MESSAGE.FAIL_SAVE_MEMO);
          memoEditorContainer.parentNode.removeChild(memoEditorContainer);
        }
      }
    );
  });
};

const highlight = (title, event) => {
  const regex = RegExp(title, "g");
  let selection;
  let range;
  let match;

  selection = window.getSelection();
  selection.removeAllRanges();

  while ((match = regex.exec(event.target.parentNode.textContent))) {
    let node = iterateNode(event.target.parentNode);
    let currentIndex = 0;
    let result = node.next();

    while (!result.done) {
      if (
        match.index >= currentIndex &&
        match.index < currentIndex + result.value.length
      ) {
        range = new Range();
        range.setStart(result.value, match.index - currentIndex);
      }
      if (
        match.index + title.length >= currentIndex &&
        match.index + title.length < currentIndex + result.value.length
      ) {
        range.setEnd(result.value, match.index + title.length - currentIndex);
        selection.addRange(range);

        addHighLightDiv(range.getClientRects(), title);
      }

      currentIndex += result.value.length;
      result = node.next();
    }
    selection.removeAllRanges();
  }
};

function* iterateNode(topNode) {
  const childNodes = topNode.childNodes;

  for (let i = 0; i < childNodes.length; i++) {
    let node = childNodes[i];
    if (node.nodeType === 3) {
      yield node;
    } else {
      yield* iterateNode(node);
    }
  }
}

const addHighLightDiv = (rects, title) => {
  for (let i = 0; i < rects.length; i++) {
    const rect = rects[i];
    const highlightRect = document.createElement("div");

    document.body.appendChild(highlightRect);

    highlightRect.classList.add("highlight");
    highlightRect.textContent = title;
    highlightRect.style.top = rect.y + window.scrollY + "px";
    highlightRect.style.left = rect.x + "px";
    highlightRect.style.height = rect.height + "px";
    highlightRect.style.width = rect.width + "px";
    highlightRect.style.background = "#0d6efd";
    highlightRect.style.color = "#fff";
    highlightRect.style.position = "absolute";
    highlightRect.style.zIndex = 1;
    highlightRect.style.cursor = "pointer";
    highlightRect.style.fontSize = "80%";

    highlightRect.addEventListener("click", (event) => {
      getMemo(event, title);
    });
  }
};
