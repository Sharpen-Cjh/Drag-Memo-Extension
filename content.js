const memoIcon = `<svg width="24px" height="24px"
viewBox="0 0 24 24"
xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns="http://www.w3.org/2000/svg"
version="1.1"
xmlns:cc="http://creativecommons.org/ns#"
xmlns:dc="http://purl.org/dc/elements/1.1/"
>
<g transform="translate(0 -1028.4)">
  <path
    d="m2 4v13.531 2.469c0 1.105 0.8954 2 2 2h4 8l6-6v-12h-20z"
    transform="translate(0 1028.4)"
    fill="#f1c40f"
  />
  <path d="m22 1044.4-6 6v-4c0-1.1 0.895-2 2-2h4z" fill="#f39c12" />
  <path
    d="m4 2c-1.1046 0-2 0.8954-2 2v1 1h20v-1-1c0-1.1046-0.895-2-2-2h-4-8-4z"
    transform="translate(0 1028.4)"
    fill="#f1c40f"
  />
  <g fill="#f39c12">
    <rect height="2" width="14" y="1034.4" x="5" />
    <rect height="2" width="14" y="1038.4" x="5" />
    <rect height="2" width="9" y="1042.4" x="5" />
  </g>
</g>
</svg>`;

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

let selectStartMousePosition = {
  x: 0,
  y: 0,
};

window.onload = () => {
  const renderMemoIcon = (event) => {
    const selection = window.getSelection();
    const selectionText = selection.toString();

    if (selection.toString()) {
      const iconBox = document.createElement("div");
      const addMemoIcon = memoIcon;

      iconBox.style.left = `${event.pageX}px`;
      iconBox.style.top = `${event.pageY}px`;
      iconBox.style.display = "block";
      iconBox.style.position = "absolute";
      iconBox.style.zIndex = 7;

      iconBox.innerHTML = addMemoIcon;
      iconBox.addEventListener("click", () => {
        fetchMemoData();
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
    memoEditorContainer.style.backgroundColor = "royalBlue";
    memoEditorContainer.style.color = "white";
    memoEditorContainer.style.position = "absolute";
    memoEditorContainer.style.width = "200px";
    memoEditorContainer.style.height = "200px";
    memoEditorContainer.style.left = `${event.pageX}px`;
    memoEditorContainer.style.top = `${event.pageY}px`;
    memoEditorContainer.style.zIndex = 8;
    memoEditorContainer.style.borderRadius = "5px";
    memoEditorContainer.setAttribute("class", "memoEditor-container");
    memoEditorContainer.setAttribute("id", selectionText);

    memoEditorHeader.style.width = "200px";
    memoEditorHeader.style.height = "20px";
    memoEditorHeader.style.display = "flex";
    memoEditorHeader.style.flexDirection = "row";
    memoEditorHeader.style.justifyContent = "space-between";
    memoEditorHeader.setAttribute("class", "memoEditor-header");

    memoSaveButton.style.width = "50px";
    memoSaveButton.style.height = "20px";
    memoSaveButton.style.fontSize = "small";
    memoSaveButton.style.textAlign = "center";
    memoSaveButton.textContent = "Save";
    memoSaveButton.setAttribute("class", "memo-save-button");
    memoSaveButton.addEventListener("click", () => {});

    memoCloseButton.style.width = "50px";
    memoCloseButton.style.height = "20px";
    memoCloseButton.style.fontSize = "small";
    memoCloseButton.style.textAlign = "center";
    memoCloseButton.textContent = "Close";
    memoCloseButton.addEventListener("click", closeMemo);
    memoCloseButton.setAttribute("class", "memo-close-button");

    memoEditor.style.width = "200px";
    memoEditor.style.height = "180px";
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
