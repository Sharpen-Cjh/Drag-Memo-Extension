const memoIcon = `<svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M8 6C8 4.89543 8.89543 4 10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6Z" fill="#2F88FF" stroke="black" stroke-width="4" stroke-linejoin="round"/>
<path d="M16 20H32" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 28H32" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const saveIcon = `<svg width="25px" height="25px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z" fill="#2F88FF" stroke="black" stroke-width="4" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6" fill="#43CCF8"/>
<path d="M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z" stroke="white" stroke-width="4" stroke-linejoin="round"/>
<path d="M9 6H34.2814" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 26H34" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 34H24.0083" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const closeIcon = `<svg width="25px" height="25px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#2F88FF" stroke="black" stroke-width="4" stroke-linejoin="round"/>
<path d="M29.6569 18.3431L18.3432 29.6568" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3432 18.3431L29.6569 29.6568" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const copyObject = (obj) => {
  const result = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result[key] = copyObject(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
};

let mousePosition = {
  x: 0,
  y: 0,
};

window.onload = () => {
  const renderMemoIcon = (event) => {
    const selection = window.getSelection();
    const selectionText = selection.toString();

    if (selection.toString()) {
      const iconBox = document.createElement("div");

      iconBox.style.left = `${event.pageX}px`;
      iconBox.style.top = `${event.pageY}px`;
      iconBox.style.display = "block";
      iconBox.style.position = "absolute";
      iconBox.style.zIndex = 7;

      iconBox.innerHTML = memoIcon;
      iconBox.addEventListener("click", () => {
        chrome.runtime.sendMessage(null, selectionText);

        renderMemoEditor(event, selectionText);

        iconBox.style.display = "none";
      });

      document.body.appendChild(iconBox);
    }
  };

  const renderMemoEditor = (event, selectionText) => {
    const memoEditorContainer = document.createElement("div");
    const memoEditorHeader = document.createElement("div");
    const memoSaveButton = document.createElement("div");
    const memoCloseButton = document.createElement("div");
    const memoEditor = document.createElement("div");

    memoEditorContainer.style.display = "flex";
    memoEditorContainer.style.flexDirection = "column";
    memoEditorContainer.style.backgroundColor = "#0a95ff";
    memoEditorContainer.style.color = "white";
    memoEditorContainer.style.position = "absolute";
    memoEditorContainer.style.width = "300px";
    memoEditorContainer.style.height = "300px";
    memoEditorContainer.style.left = `${event.pageX}px`;
    memoEditorContainer.style.top = `${event.pageY}px`;
    memoEditorContainer.style.zIndex = 8;
    memoEditorContainer.style.borderRadius = "5px";
    memoEditorContainer.setAttribute("class", "memoEditor-container");
    memoEditorContainer.setAttribute("id", selectionText);

    memoEditorHeader.style.width = "300px";
    memoEditorHeader.style.height = "30px";
    memoEditorHeader.style.display = "flex";
    memoEditorHeader.style.flexDirection = "row";
    memoEditorHeader.style.justifyContent = "space-between";
    memoEditorHeader.style.backgroundColor = "#f2f1f1";
    memoEditorHeader.style.border = "1px solid #e2e2e2";
    memoEditorHeader.setAttribute("class", "memoEditor-header");

    memoSaveButton.style.width = "30px";
    memoSaveButton.style.height = "30px";
    memoSaveButton.style.fontSize = "small";
    memoSaveButton.style.textAlign = "center";
    memoSaveButton.textContent = "Save";
    memoSaveButton.innerHTML = saveIcon;
    memoSaveButton.setAttribute("class", "memo-save-button");

    memoCloseButton.style.width = "30px";
    memoCloseButton.style.height = "30px";
    memoCloseButton.style.fontSize = "small";
    memoCloseButton.style.textAlign = "center";
    memoCloseButton.textContent = "Close";
    memoCloseButton.innerHTML = closeIcon;
    memoCloseButton.addEventListener("click", closeMemo);
    memoCloseButton.setAttribute("class", "memo-close-button");

    memoEditor.style.width = "300px";
    memoEditor.style.height = "270px";
    memoEditor.contentEditable = "true";

    memoEditorContainer.appendChild(memoEditorHeader);
    memoEditorContainer.appendChild(memoEditor);
    memoEditorHeader.appendChild(memoSaveButton);
    memoEditorHeader.appendChild(memoCloseButton);

    document.body.appendChild(memoEditorContainer);
  };

  const setMousePosition = (x, y) => {
    (mousePosition.x = x), (mousePosition.y = y);
  };

  const closeMemo = () => {
    document.querySelector(".memoEditor-container").style.display = "none";
  };

  document.addEventListener("mousedown", (event) => {
    const { x, y } = event;
    setMousePosition(x, y);
  });

  document.addEventListener("mouseup", renderMemoIcon);
};
