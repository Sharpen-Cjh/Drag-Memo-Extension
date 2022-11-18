const createMemoSvg = `<svg width="30px" height="30px" pointer-events="none" viewBox="-0.02 0 45.975 45.975" xmlns="http://www.w3.org/2000/svg">
<path id="_15.Pencil" data-name="15.Pencil" d="M44.929,14.391a.955.955,0,0,1-.183.276L16.84,42.572a.949.949,0,0,1-.475.434L2.513,46.886a.682.682,0,0,1-.094.026l-.047.014c-.008,0-.017,0-.024,0a1.061,1.061,0,0,1-.286.045.926.926,0,0,1-.282-.041c-.021-.006-.04,0-.061-.009s-.013-.01-.021-.013a.94.94,0,0,1-.24-.141.885.885,0,0,1-.113-.086.884.884,0,0,1-.086-.113.952.952,0,0,1-.141-.24.239.239,0,0,1-.013-.021c-.007-.02,0-.04-.009-.061a.985.985,0,0,1-.041-.281,1.1,1.1,0,0,1,.045-.287c0-.008,0-.016,0-.023l.014-.049c.011-.03.013-.063.026-.093l3.88-13.852a.954.954,0,0,1,.434-.475L32.937,3.71c.04-.045.087-.083.128-.127l.3-.3c.015-.015.034-.02.05-.034A8.016,8.016,0,0,1,44.929,14.391ZM41.15,15.5l-3.619-3.619L13.891,35.522c0,.008.014.011.018.019l2.373,4.827ZM3.559,44.473l2.785-.779L4.338,41.689ZM4.943,39.53,8.5,43.089l6.12-1.715S12.035,36,12.031,36L6.657,33.41Zm7.547-5.406c.008,0,.011.013.019.018L36.15,10.5,32.531,6.881,7.663,31.749ZM38.922,3a6.073,6.073,0,0,0-4.489,1.994l-.007-.007-.514.513,8.619,8.619.527-.528-.006-.006A6.091,6.091,0,0,0,38.922,3Z" transform="translate(-1.055 -1)" fill-rule="evenodd"/>
</svg>
`;

const getMemoSvg = `<svg width="30px" height="30px" pointer-events="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><style>.c{fill:none;stroke:#1237a5;stroke-linecap:round;stroke-linejoin:round;}</style></defs><g id="a"/><g id="b"><path class="c" d="M16.58,10.03c0,3.62-2.93,6.55-6.55,6.55s-6.55-2.93-6.55-6.55S6.41,3.47,10.03,3.47s6.55,2.93,6.55,6.55Z"/><line class="c" x1="14.82" x2="20.53" y1="14.78" y2="20.53"/></g></svg>`;

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

window.onload = () => {
  const renderToolBoxIcon = (event, selectionText) => {
    const toolBox = document.createElement("div");
    const createMemoIcon = document.createElement("div");
    const getMemoIcon = document.createElement("div");

    toolBox.style.display = "flex";
    toolBox.style.flexDirection = "row";
    toolBox.style.width = "60px";
    toolBox.style.position = "absolute";
    toolBox.style.left = `${event.pageX}px`;
    toolBox.style.top = `${event.pageY}px`;
    toolBox.style.zIndex = 10;
    toolBox.setAttribute("id", "tool-box");

    createMemoIcon.style.zIndex = 11;
    createMemoIcon.innerHTML = createMemoSvg;
    createMemoIcon.setAttribute("class", "create-memo-button");

    createMemoIcon.addEventListener("click", () => {
      chrome.runtime.sendMessage(
        {
          action: "createMemo",
          selectionText,
        },
        (response) => {
          if (response.success) {
            window.alert("메모가 생성되었습니다.");
            renderMemoEditor(event, selectionText);

            toolBox.parentNode.removeChild(toolBox);

            return;
          } else {
            window.alert("이미 존재하는 메모입니다.");

            toolBox.parentNode.removeChild(toolBox);
          }
        }
      );
    });

    getMemoIcon.style.zIndex = 11;
    getMemoIcon.innerHTML = getMemoSvg;
    getMemoIcon.setAttribute("class", "get-memo-button");

    getMemoIcon.addEventListener("click", () => {
      chrome.runtime.sendMessage(
        { action: "getMemo", selectionText },
        (response) => {
          if (response.success && response.memo !== null) {
            const memo = response.memo;
            const { title, description } = memo;

            renderMemoEditor(event, title, description);
            toolBox.parentNode.removeChild(toolBox);

            return;
          } else {
            window.alert("해당 메모를 찾지 못했습니다. 메모를 생성하세요");
            toolBox.parentNode.removeChild(toolBox);
          }
        }
      );
    });

    toolBox.appendChild(getMemoIcon);
    toolBox.appendChild(createMemoIcon);

    document.body.appendChild(toolBox);
  };

  const renderMemoEditor = (event, title, description) => {
    const hasMemo = document.getElementById(title);

    if (hasMemo) {
      hasMemo.style.display = "flex";

      return;
    }

    const memoEditorContainer = document.createElement("div");
    const memoEditorHeader = document.createElement("div");
    const memoTitle = document.createElement("div");
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
    memoEditorContainer.setAttribute("id", title);

    memoEditorHeader.style.width = "300px";
    memoEditorHeader.style.height = "30px";
    memoEditorHeader.style.display = "flex";
    memoEditorHeader.style.flexDirection = "row";
    memoEditorHeader.style.justifyContent = "space-between";
    memoEditorHeader.style.backgroundColor = "#f2f1f1";
    memoEditorHeader.style.border = "1px solid #e2e2e2";
    memoEditorHeader.setAttribute("class", "memoEditor-header");

    memoTitle.style.width = "240px";
    memoTitle.style.height = "30px";
    memoTitle.style.color = "black";
    memoTitle.style.fontSize = "small";
    memoTitle.style.textAlign = "center";
    memoTitle.style.justifyContent = "center";
    memoTitle.textContent = title;

    memoSaveButton.style.width = "30px";
    memoSaveButton.style.height = "30px";
    memoSaveButton.innerHTML = saveIcon;
    memoSaveButton.setAttribute("class", "memo-save-button");

    memoCloseButton.style.width = "30px";
    memoCloseButton.style.height = "30px";
    memoCloseButton.innerHTML = closeIcon;
    memoCloseButton.addEventListener("click", () => {
      closeMemo(title);
    });
    memoCloseButton.setAttribute("class", "memo-close-button");

    memoEditor.style.width = "300px";
    memoEditor.style.height = "270px";
    memoEditor.contentEditable = "true";
    memoEditor.setAttribute("class", "memo-editor");
    memoEditor.innerText = description;

    memoEditorContainer.appendChild(memoEditorHeader);
    memoEditorContainer.appendChild(memoEditor);
    memoEditorHeader.appendChild(memoSaveButton);
    memoEditorHeader.appendChild(memoTitle);
    memoEditorHeader.appendChild(memoCloseButton);

    document.body.appendChild(memoEditorContainer);
  };

  const closeMemo = (memoId) => {
    const { innerText } = document.getElementsByClassName("memo-editor")[0];
    const memoEditorContainer = document.getElementById(memoId);

    chrome.runtime.sendMessage({
      action: "patchMemo",
      memoId,
      innerText,
    });

    memoEditorContainer.parentNode.removeChild(memoEditorContainer);
  };

  document.addEventListener("mouseup", (event) => {
    const selection = window.getSelection();
    const selectionText = selection.toString().trim();
    const toolBox = document.getElementById("tool-box");

    if (selectionText) {
      renderToolBoxIcon(event, selectionText);

      return;
    } else if (toolBox !== event.target.parentNode) {
      toolBox?.parentNode.removeChild(toolBox);
    }
  });
};
