import { ICON } from "../icons/icon";

const Button = (name, svg) => {
  const buttonIcon = document.createElement("div");

  buttonIcon.style.width = "25px";
  buttonIcon.style.height = "25px";
  buttonIcon.innerHTML = svg;
  buttonIcon.addEventListener("click", () => {
    name();
  });

  return buttonIcon;
};

const MemoEditorHeader = (deleteMemo, closeMemo) => {
  const memoEditorHeader = document.createElement("div");

  memoEditorHeader.style.width = "300px";
  memoEditorHeader.style.height = "30px";
  memoEditorHeader.style.display = "flex";
  memoEditorHeader.style.flexDirection = "row";
  memoEditorHeader.style.justifyContent = "space-between";
  memoEditorHeader.classList.add("memoEditor-header");

  memoEditorHeader.appendChild(Button(deleteMemo, ICON.deleteMemo));
  memoEditorHeader.appendChild(Button(closeMemo, ICON.closeMemo));

  return memoEditorHeader;
};

const MemoEditorTitle = (memoState) => {
  const memoEditorTitle = document.createElement("div");

  memoEditorTitle.style.width = "240px";
  memoEditorTitle.style.height = "30px";
  memoEditorTitle.style.color = "black";
  memoEditorTitle.style.fontWeight = "20px";
  memoEditorTitle.style.fontSize = "20px";
  memoEditorTitle.textContent = memoState.title;

  return memoEditorTitle;
};

const MemoEditorBody = (memoState) => {
  const memoEditorBody = document.createElement("textarea");

  memoEditorBody.style.width = "295px";
  memoEditorBody.style.height = "300px";
  memoEditorBody.style.overflow = "auto";
  memoEditorBody.style.marginTop = "10px";
  memoEditorBody.style.resize = "none";

  memoEditorBody.classList.add("memo-editor");
  memoEditorBody.innerText = memoState.description || "";
  memoEditorBody.addEventListener("change", (event) => {
    memoState.description = event.target.value;
  });

  return memoEditorBody;
};

export const MemoEditor = (
  selectionState,
  memoState,
  deleteMemo,
  closeMemo
) => {
  const memoEditorBox = document.createElement("div");

  memoEditorBox.style.display = "flex";
  memoEditorBox.style.flexDirection = "column";
  memoEditorBox.style.backgroundColor = "#ffffff";
  memoEditorBox.style.color = "black";
  memoEditorBox.style.position = "absolute";
  memoEditorBox.style.width = "300px";
  memoEditorBox.style.height = "300px";
  memoEditorBox.style.left = `${selectionState.event.pageX}px`;
  memoEditorBox.style.top = `${selectionState.event.pageY}px`;
  memoEditorBox.style.zIndex = 8;
  memoEditorBox.style.border = "3px solid #0d6efd";
  memoEditorBox.style.borderRadius = "5px";
  memoEditorBox.classList.add("memo-editor-box");

  memoEditorBox.appendChild(MemoEditorHeader(deleteMemo, closeMemo));
  memoEditorBox.appendChild(MemoEditorTitle(memoState));
  memoEditorBox.appendChild(MemoEditorBody(memoState));

  return memoEditorBox;
};
