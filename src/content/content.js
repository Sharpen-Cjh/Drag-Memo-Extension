import { MESSAGE } from "../constants/message";
import { ICON } from "../icons/icon";

let selectionState = {
  selectionText: window.getSelection().toString().trim(),
  event: "",
};
let memoState = {
  title: "",
  description: "",
};
let toolBox = document.getElementById("tool-box");
let memoEditorContainer = document.getElementById("memo-editor-container");

document.addEventListener("mouseup", (event) => {
  const selectionText = window.getSelection().toString().trim();
  deleteToolBox(event);
  setSelectionState({ selectionText, event });
});

const setSelectionState = (newState) => {
  if (toolBox) {
    return;
  }
  selectionState = { ...selectionState, ...newState };
  renderToolBox();
};

const setMemoState = (newState) => {
  if (memoEditorContainer) {
    return;
  }
  memoState = { ...memoState, ...newState };
  renderMemoEditor();
};

const renderToolBox = () => {
  toolBox = document.getElementById("tool-box");

  if (selectionState.selectionText && !toolBox) {
    addToolBox();

    return;
  } else if (toolBox !== selectionState.event.target?.parentNode) {
    deleteToolBox();
  }
};

const addToolBox = () => {
  toolBox = document.createElement("div");
  const getMemoIcon = document.createElement("div");
  const createMemoIcon = document.createElement("div");
  const showHighLightIcon = document.createElement("div");

  toolBox.style.display = "flex";
  toolBox.style.flexDirection = "row";
  toolBox.style.width = "95px";
  toolBox.style.height = "28px";
  toolBox.style.position = "absolute";
  toolBox.style.left = `${selectionState.event.pageX}px`;
  toolBox.style.top = `${selectionState.event.pageY}px`;
  toolBox.style.zIndex = 10;
  toolBox.style.backgroundColor = "#ffffff";
  toolBox.setAttribute("id", "tool-box");

  getMemoIcon.style.zIndex = 11;
  getMemoIcon.style.border = "1px solid #0d6efd";
  getMemoIcon.style.borderRadius = "2px";
  getMemoIcon.innerHTML = ICON.getMemo;
  getMemoIcon.setAttribute("class", "get-memo-button");

  getMemoIcon.addEventListener("click", () => {
    getMemo();
  });

  createMemoIcon.style.zIndex = 11;
  createMemoIcon.style.border = "1px solid #0d6efd";
  createMemoIcon.style.borderRadius = "2px";
  createMemoIcon.innerHTML = ICON.createMemo;
  createMemoIcon.setAttribute("class", "create-memo-button");

  createMemoIcon.addEventListener("click", () => {
    createMemo();
  });

  showHighLightIcon.style.zIndex = 11;
  showHighLightIcon.style.border = "1px solid #0d6efd";
  showHighLightIcon.style.borderRadius = "2px";
  showHighLightIcon.innerHTML = ICON.showHighLight;

  showHighLightIcon.addEventListener("click", () => {
    showSavedTitles();
  });

  toolBox.appendChild(getMemoIcon);
  toolBox.appendChild(createMemoIcon);
  toolBox.appendChild(showHighLightIcon);

  document.body.appendChild(toolBox);
};

const deleteToolBox = (event) => {
  if (toolBox === event?.target?.parentNode) {
    return;
  }
  toolBox?.parentNode?.removeChild(toolBox);
  toolBox = "";
};

const renderMemoEditor = () => {
  memoEditorContainer = document.createElement("div");
  const memoEditorHeader = document.createElement("div");
  const memoTitle = document.createElement("div");
  const memoDeleteButton = document.createElement("div");
  const memoCloseButton = document.createElement("div");
  const memoEditor = document.createElement("textarea");

  memoEditorContainer.style.display = "flex";
  memoEditorContainer.style.flexDirection = "column";
  memoEditorContainer.style.backgroundColor = "#ffffff";
  memoEditorContainer.style.color = "black";
  memoEditorContainer.style.position = "absolute";
  memoEditorContainer.style.width = "300px";
  memoEditorContainer.style.height = "300px";
  memoEditorContainer.style.left = `${selectionState.event.pageX}px`;
  memoEditorContainer.style.top = `${selectionState.event.pageY}px`;
  memoEditorContainer.style.zIndex = 8;
  memoEditorContainer.style.border = "3px solid #0d6efd";
  memoEditorContainer.style.borderRadius = "5px";
  memoEditorContainer.setAttribute("class", "memoEditor-container");
  memoEditorContainer.setAttribute("id", "memo-editor-container");

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
    deleteMemo();
  });

  memoCloseButton.style.width = "25px";
  memoCloseButton.style.height = "25px";
  memoCloseButton.style.margin = "0px";
  memoCloseButton.innerHTML = ICON.closeMemo;

  memoCloseButton.addEventListener("click", () => {
    closeMemo();
  });
  memoCloseButton.setAttribute("class", "memo-close-button");

  memoTitle.style.width = "240px";
  memoTitle.style.height = "30px";
  memoTitle.style.color = "black";
  memoTitle.style.fontWeight = "20px";
  memoTitle.style.overflow = "auto";
  memoTitle.style.fontSize = "20px";
  memoTitle.textContent = memoState.title;

  memoEditor.style.width = "300px";
  memoEditor.style.height = "300px";
  memoEditor.style.overflow = "auto";
  memoEditor.style.marginTop = "10px";
  memoEditor.style.resize = "none";
  memoEditor.setAttribute("class", "memo-editor");
  memoEditor.innerText = memoState.description || "";
  memoEditor.addEventListener("change", (event) => {
    memoState.description = event.target.value;
  });

  memoEditorContainer.appendChild(memoEditorHeader);
  memoEditorContainer.appendChild(memoTitle);
  memoEditorContainer.appendChild(memoEditor);
  memoEditorHeader.appendChild(memoDeleteButton);
  memoEditorHeader.appendChild(memoCloseButton);

  document.body.appendChild(memoEditorContainer);
};

const deleteMemoEditor = () => {
  memoEditorContainer.parentNode.removeChild(memoEditorContainer);
  memoEditorContainer = "";
};

const getMemo = () => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }

    chrome.runtime.sendMessage(
      {
        action: "getMemo",
        selectionText: selectionState.selectionText,
        userInfo,
      },
      (response) => {
        if (response.success && response.memo !== null) {
          const {
            memo: { title, description },
          } = response;
          setMemoState({ title, description });
          deleteToolBox();

          return;
        } else {
          window.alert(MESSAGE.FAIL_GET_MEMO);

          deleteToolBox();
        }
      }
    );
  });
};

const getHighlightMemo = (title) => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }

    chrome.runtime.sendMessage(
      {
        action: "getMemo",
        selectionText: title,
        userInfo,
      },
      (response) => {
        if (response.success && response.memo !== null) {
          const {
            memo: { title, description },
          } = response;
          setMemoState({ title, description });

          return;
        } else {
          window.alert(MESSAGE.FAIL_GET_MEMO);
        }
      }
    );
  });
};

const createMemo = () => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }

    chrome.runtime.sendMessage(
      {
        action: "createMemo",
        selectionText: selectionState.selectionText,
        userInfo,
      },
      (response) => {
        if (response.success) {
          window.alert(MESSAGE.SUCCESS_CREATE_MEMO);
          setMemoState({
            title: selectionState.selectionText,
            description: "",
          });
          deleteToolBox();

          return;
        } else {
          window.alert(MESSAGE.FAIL_CREATE_MEMO);

          deleteToolBox();
        }
      }
    );
  });
};

const showSavedTitles = () => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }
    chrome.runtime.sendMessage(
      { action: "getMemoTitles", userInfo },
      (response) => {
        if (response.length !== 0) {
          response.forEach((title) => {
            highlight(title, selectionState.event);
            deleteToolBox();
          });

          return;
        } else {
          window.alert(MESSAGE.FAIL_GET_MEMO_TITLES);
          deleteToolBox();
        }
      }
    );
  });
};

const deleteMemo = () => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }

    const result = window.confirm(MESSAGE.CONFIRM_DELETE);

    if (result) {
      chrome.runtime.sendMessage(
        { action: "deleteMemo", memoId: memoState.title, userInfo },
        (response) => {
          if (response.success) {
            deleteMemoEditor();

            return;
          } else {
            window.alert(MESSAGE.FAIL_DELETE_MEMO);
            deleteMemoEditor();
          }
        }
      );

      return;
    }
  });
};

const closeMemo = () => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE.LOGIN_PLEASE);
    }

    chrome.runtime.sendMessage(
      {
        action: "patchMemo",
        memoId: memoState.title,
        innerText: memoState.description,
        userInfo,
      },
      (response) => {
        if (response.success) {
          deleteMemoEditor();

          return;
        } else {
          window.alert(MESSAGE.FAIL_SAVE_MEMO);
          deleteMemoEditor();
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

    highlightRect.addEventListener("click", () => {
      getHighlightMemo(title);
    });
  }
};
