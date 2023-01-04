import { MESSAGE } from "../constants/message";
import { ToolBox } from "../observer/observer";
import { MemoEditor } from "../observer/observer";
import Subject from "../subject/subject";

const subject = new Subject();
const toolBox = new ToolBox();
const memoEditor = new MemoEditor();

let selectionState = {
  selectionText: window.getSelection().toString().trim(),
  event: "",
};
let memoState = {
  title: "",
  description: "",
};

subject.subscribe(toolBox);
subject.subscribe(memoEditor);

document.addEventListener("mouseup", (event) => {
  const selectionText = window.getSelection().toString().trim();

  deleteToolBox(event);
  setSelectionState({ selectionText, event });
});

const setSelectionState = (newState) => {
  const toolBoxIcon = document.querySelector(".tool-box");

  if (toolBoxIcon) {
    return;
  }

  selectionState = { ...selectionState, ...newState };

  if (selectionState.selectionText) {
    subject.notify(
      toolBox,
      selectionState,
      getMemo,
      createMemo,
      showSavedTitles
    );

    return;
  }
};

const setMemoState = (newState) => {
  const memoEditorBox = document.querySelector(".memo-editor-box");

  if (memoEditorBox) {
    return;
  }

  memoState = { ...memoState, ...newState };

  subject.notify(memoEditor, selectionState, memoState, deleteMemo, closeMemo);
};

const deleteToolBox = (event) => {
  let toolBoxIcon = document.querySelector(".tool-box");

  if (toolBoxIcon === event?.target?.parentNode) {
    return;
  }

  toolBoxIcon?.parentNode?.removeChild(toolBoxIcon);
  toolBoxIcon = "";
};

const deleteMemoEditor = () => {
  let memoEditorBox = document.getElementsByClassName("memo-editor-box");

  memoEditorBox[0].parentNode.removeChild(memoEditorBox[0]);
  memoEditorBox = "";
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
          });
          deleteToolBox();

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
    highlightRect.style.top = rect.y + window.scrollY + "px";
    highlightRect.style.left = rect.x + "px";
    highlightRect.style.height = rect.height + "px";
    highlightRect.style.width = rect.width + "px";
    highlightRect.style.background = "#0d6efd";
    highlightRect.style.opacity = 0.5;
    highlightRect.style.position = "absolute";
    highlightRect.style.zIndex = 1;
    highlightRect.style.cursor = "pointer";

    highlightRect.addEventListener("click", () => {
      getHighlightMemo(title);
    });
  }
};
