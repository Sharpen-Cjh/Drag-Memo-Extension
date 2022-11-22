const createMemoSvg = `<svg width="30px" height="25px" pointer-events="none" viewBox="-0.02 0 45.975 45.975" xmlns="http://www.w3.org/2000/svg">
<path id="_15.Pencil" data-name="15.Pencil" d="M44.929,14.391a.955.955,0,0,1-.183.276L16.84,42.572a.949.949,0,0,1-.475.434L2.513,46.886a.682.682,0,0,1-.094.026l-.047.014c-.008,0-.017,0-.024,0a1.061,1.061,0,0,1-.286.045.926.926,0,0,1-.282-.041c-.021-.006-.04,0-.061-.009s-.013-.01-.021-.013a.94.94,0,0,1-.24-.141.885.885,0,0,1-.113-.086.884.884,0,0,1-.086-.113.952.952,0,0,1-.141-.24.239.239,0,0,1-.013-.021c-.007-.02,0-.04-.009-.061a.985.985,0,0,1-.041-.281,1.1,1.1,0,0,1,.045-.287c0-.008,0-.016,0-.023l.014-.049c.011-.03.013-.063.026-.093l3.88-13.852a.954.954,0,0,1,.434-.475L32.937,3.71c.04-.045.087-.083.128-.127l.3-.3c.015-.015.034-.02.05-.034A8.016,8.016,0,0,1,44.929,14.391ZM41.15,15.5l-3.619-3.619L13.891,35.522c0,.008.014.011.018.019l2.373,4.827ZM3.559,44.473l2.785-.779L4.338,41.689ZM4.943,39.53,8.5,43.089l6.12-1.715S12.035,36,12.031,36L6.657,33.41Zm7.547-5.406c.008,0,.011.013.019.018L36.15,10.5,32.531,6.881,7.663,31.749ZM38.922,3a6.073,6.073,0,0,0-4.489,1.994l-.007-.007-.514.513,8.619,8.619.527-.528-.006-.006A6.091,6.091,0,0,0,38.922,3Z" transform="translate(-1.055 -1)" fill-rule="evenodd"/>
</svg>
`;
const getMemoSvg = `
<svg width="30px" height="30px" pointer-events="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<defs><style>.c{fill:none;stroke:#1237a5;stroke-linecap:round;stroke-linejoin:round;}</style></defs>
<g id="a"/><g id="b"><path class="c" d="M16.58,10.03c0,3.62-2.93,6.55-6.55,6.55s-6.55-2.93-6.55-6.55S6.41,3.47,10.03,3.47s6.55,2.93,6.55,6.55Z"/>
<line class="c" x1="14.82" x2="20.53" y1="14.78" y2="20.53"/></g>
</svg>`;
const deleteSvg = `
  <svg
    width="25px"
    height="25px"
    viewBox="0 0 35 35"
    data-name="Layer 2"
    id="e1c043b0-44b4-451c-80e1-98e21b9b3b3c"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M26.887,34.75H8.113a3.345,3.345,0,0,1-3.532-2.86c0-.034,0-.068,0-.1V7.179a1.25,1.25,0,0,1,2.5,0V31.716a1.048,1.048,0,0,0,1.036.534H26.887a1.048,1.048,0,0,0,1.036-.534V6.962a1.25,1.25,0,0,1,2.5,0V31.789c0,.033,0,.067,0,.1A3.345,3.345,0,0,1,26.887,34.75Z" />
    <path d="M33.111,8.212H1.889a1.25,1.25,0,0,1,0-2.5H33.111a1.25,1.25,0,0,1,0,2.5Z" />
    <path d="M23.369,8.212a1.25,1.25,0,0,1-1.25-1.25V3.411a.654.654,0,0,0-.661-.661H13.542a.654.654,0,0,0-.661.661V6.962a1.25,1.25,0,0,1-2.5,0V3.411A3.165,3.165,0,0,1,13.542.25h7.916a3.165,3.165,0,0,1,3.161,3.161V6.962A1.25,1.25,0,0,1,23.369,8.212Z" />
  </svg>
`;
const closeSvg = `
<svg width="25px" height="25px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#2F88FF" stroke="black" stroke-width="4" stroke-linejoin="round"/>
<path d="M29.6569 18.3431L18.3432 29.6568" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3432 18.3431L29.6569 29.6568" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const showHighLightSvg = `
<svg width="29px" height="29px" pointer-events="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title/><g id="idea">
<path d="M16.52,3.66A7,7,0,0,0,5,9.17a9.49,9.49,0,0,0,3,6.24c.51.58,1,1.18,1,1.49v2.38A2.72,2.72,0,0,0,11.72,22h.56A2.72,2.72,0,0,0,15,19.28V16.9c0-.31.53-.91,1-1.49A9.43,9.43,0,0,0,19,9,7,7,0,0,0,16.52,3.66ZM12.28,21h-.56A1.72,1.72,0,0,1,10,19.28V18h4v1.28A1.72,1.72,0,0,1,12.28,21Zm3-6.25c-.73.81-1.3,1.46-1.3,2.15V17H10v-.1c0-.69-.57-1.34-1.3-2.15A8.63,8.63,0,0,1,6,9.15a6,6,0,0,1,5-6.06A6,6,0,0,1,18,9C18,11.7,16.44,13.46,15.3,14.75Z"/><path d="M21.5,8h-1a.5.5,0,0,0,0,1h1a.5.5,0,0,0,0-1Z"/><path d="M4,8.5A.5.5,0,0,0,3.5,8h-1a.5.5,0,0,0,0,1h1A.5.5,0,0,0,4,8.5Z"/><path d="M3.85,2.15a.49.49,0,0,0-.7.7l1,1a.48.48,0,0,0,.7,0,.48.48,0,0,0,0-.7Z"/><path d="M19.5,4a.47.47,0,0,0,.35-.15l1-1a.49.49,0,0,0-.7-.7l-1,1a.48.48,0,0,0,0,.7A.47.47,0,0,0,19.5,4Z"/><path d="M19.85,13.15a.49.49,0,0,0-.7.7l1,1a.48.48,0,0,0,.7,0,.48.48,0,0,0,0-.7Z"/><path d="M4.15,13.15l-1,1a.48.48,0,0,0,0,.7.48.48,0,0,0,.7,0l1-1a.49.49,0,0,0-.7-.7Z"/><path d="M13.15,7.15l-3,3a.47.47,0,0,0-.11.54.5.5,0,0,0,.46.31h1.79l-1.14,1.15a.48.48,0,0,0,0,.7.48.48,0,0,0,.7,0l2-2a.47.47,0,0,0,.11-.54A.5.5,0,0,0,13.5,10H11.71l2.14-2.15a.49.49,0,0,0-.7-.7Z"/>
</g>
</svg>`;

const MESSAGE_LOGIN_PLEASE = "로그인 부탁드립니다.";
const MESSAGE_FAIL_GET_MEMO = "메모를 불러오는데 실패하였습니다.";
const MESSAGE_SUCCESS_CREATE_MEMO = "메모가 생성 됐습니다.";
const MESSAGE_FAIL_CREATE_MEMO = "메모 생성이 실패하였습니다.";
const MESSAGE_CONFIRM_DELETE = "메모를 정말 삭제하시겠습니까?";
const MESSAGE_FAIL_DELETE_MEMO = "메모 삭제가 실패됐습니다.";
const MESSAGE_FAIL_SAVE_MEMO = "메모 저장이 실패됐습니다.";

document.addEventListener("mouseup", (event) => {
  renderToolBox(event);
});

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
  getMemoIcon.innerHTML = getMemoSvg;
  getMemoIcon.setAttribute("class", "get-memo-button");

  getMemoIcon.addEventListener("click", (event) => {
    getMemo(event, selectionText, toolBox);
  });

  createMemoIcon.style.zIndex = 11;
  createMemoIcon.style.border = "1px solid #0d6efd";
  createMemoIcon.style.borderRadius = "2px";
  createMemoIcon.innerHTML = createMemoSvg;
  createMemoIcon.setAttribute("class", "create-memo-button");

  createMemoIcon.addEventListener("click", () => {
    createMemo(event, selectionText, toolBox);
  });

  showHighLightIcon.style.zIndex = 11;
  showHighLightIcon.style.border = "1px solid #0d6efd";
  showHighLightIcon.style.borderRadius = "2px";
  showHighLightIcon.innerHTML = showHighLightSvg;

  showHighLightIcon.addEventListener("click", () => {
    showSavedTitles(toolBox);
  });

  toolBox.appendChild(getMemoIcon);
  toolBox.appendChild(createMemoIcon);
  toolBox.appendChild(showHighLightIcon);

  document.body.appendChild(toolBox);
};
const getMemo = (event, selectionText, toolBox) => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE_LOGIN_PLEASE);
    }

    chrome.runtime.sendMessage(
      { action: "getMemo", selectionText, userInfo },
      (response) => {
        if (response.success && response.memo !== null) {
          const memo = response.memo;
          const { title, description } = memo;

          renderMemoEditor(event, title, description);
          toolBox.parentNode.removeChild(toolBox);

          return;
        } else {
          window.alert(MESSAGE_FAIL_GET_MEMO);

          toolBox.parentNode.removeChild(toolBox);
        }
      }
    );
  });
};
const createMemo = (event, selectionText, toolBox) => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE_LOGIN_PLEASE);
    }

    chrome.runtime.sendMessage(
      {
        action: "createMemo",
        selectionText,
        userInfo,
      },
      (response) => {
        if (response.success) {
          window.alert(MESSAGE_SUCCESS_CREATE_MEMO);
          renderMemoEditor(event, selectionText);

          toolBox.parentNode.removeChild(toolBox);

          return;
        } else {
          window.alert(MESSAGE_FAIL_CREATE_MEMO);

          toolBox.parentNode.removeChild(toolBox);
        }
      }
    );
  });
};
const showSavedTitles = (toolBox) => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE_LOGIN_PLEASE);
    }

    chrome.runtime.sendMessage(
      { action: "getMemoTitles", userInfo },
      (response) => {
        response.map((title) => {
          showHighLight(title);
        });

        toolBox.parentNode.removeChild(toolBox);
      }
    );
  });
};
const showHighLight = (text) => {
  let innerHTML = document.querySelector("body").innerHTML;
  const index = innerHTML.indexOf(text);

  if (index >= 0) {
    innerHTML =
      innerHTML.substring(0, index) +
      "<mark>" +
      innerHTML.substring(index, index + text.length) +
      "</mark>" +
      innerHTML.substring(index + text.length);
    document.querySelector("body").innerHTML = innerHTML;

    return;
  }
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

  memoEditorHeader.style.width = "294px";
  memoEditorHeader.style.height = "30px";
  memoEditorHeader.style.display = "flex";
  memoEditorHeader.style.flexDirection = "row";
  memoEditorHeader.style.justifyContent = "space-between";
  memoEditorHeader.style.backgroundColor = "#f2f1f1";
  memoEditorHeader.setAttribute("class", "memoEditor-header");

  memoTitle.style.width = "240px";
  memoTitle.style.height = "30px";
  memoTitle.style.color = "black";
  memoTitle.style.fontSize = "small";
  memoTitle.style.fontWeight = "20px;";
  memoTitle.style.textAlign = "center";
  memoTitle.style.justifyContent = "center";
  memoTitle.textContent = title;

  memoDeleteButton.style.width = "30px";
  memoDeleteButton.style.height = "30px";
  memoDeleteButton.innerHTML = deleteSvg;
  memoDeleteButton.setAttribute("class", "memo-save-button");

  memoDeleteButton.addEventListener("click", () => {
    deleteMemo(title);
  });

  memoCloseButton.style.width = "30px";
  memoCloseButton.style.height = "30px";
  memoCloseButton.innerHTML = closeSvg;

  memoCloseButton.addEventListener("click", () => {
    closeMemo(title);
  });
  memoCloseButton.setAttribute("class", "memo-close-button");

  memoEditor.style.width = "300px";
  memoEditor.style.height = "300px";
  memoEditor.style.overflow = "auto";
  memoEditor.contentEditable = "true";
  memoEditor.setAttribute("class", "memo-editor");
  memoEditor.innerText = description || "";

  memoEditorContainer.appendChild(memoEditorHeader);
  memoEditorContainer.appendChild(memoEditor);
  memoEditorHeader.appendChild(memoDeleteButton);
  memoEditorHeader.appendChild(memoTitle);
  memoEditorHeader.appendChild(memoCloseButton);

  document.body.appendChild(memoEditorContainer);
};
const deleteMemo = (memoId) => {
  chrome.storage.local.get("userInfo", (userInfo) => {
    if (Object.keys(userInfo).length === 0) {
      return window.alert(MESSAGE_LOGIN_PLEASE);
    }

    const result = window.confirm(MESSAGE_CONFIRM_DELETE);
    const memoEditorContainer = document.getElementById(memoId);

    if (result) {
      chrome.runtime.sendMessage(
        { action: "deleteMemo", memoId, userInfo },
        (response) => {
          if (response.success) {
            memoEditorContainer.parentNode.removeChild(memoEditorContainer);

            return;
          } else {
            window.alert(MESSAGE_FAIL_DELETE_MEMO);
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
      return window.alert(MESSAGE_LOGIN_PLEASE);
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
          window.alert(MESSAGE_FAIL_SAVE_MEMO);
          memoEditorContainer.parentNode.removeChild(memoEditorContainer);
        }
      }
    );
  });
};
