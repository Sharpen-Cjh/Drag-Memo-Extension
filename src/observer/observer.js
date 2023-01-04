import { ICON } from "../icons/icon";

class Observer {
  update(state) {}
}

export class ToolBox extends Observer {
  update(selectionState, getMemo, createMemo, showSavedTitles) {
    const Tool = (name, svg) => {
      const toolIcon = document.createElement("div");

      toolIcon.style.zIndex = 11;
      toolIcon.style.border = "1px solid #0d6efd";
      toolIcon.style.borderRadius = "2px";
      toolIcon.innerHTML = svg;
      toolIcon.addEventListener("click", () => {
        name();
      });

      return toolIcon;
    };

    const toolBoxIcon = document.createElement("div");

    toolBoxIcon.style.display = "flex";
    toolBoxIcon.style.flexDirection = "row";
    toolBoxIcon.style.width = "95px";
    toolBoxIcon.style.height = "28px";
    toolBoxIcon.style.position = "absolute";
    toolBoxIcon.style.left = `${selectionState.event.pageX}px`;
    toolBoxIcon.style.top = `${selectionState.event.pageY}px`;
    toolBoxIcon.style.zIndex = 10;
    toolBoxIcon.style.backgroundColor = "#ffffff";
    toolBoxIcon.classList.add("tool-box");

    toolBoxIcon.appendChild(Tool(getMemo, ICON.getMemo));
    toolBoxIcon.appendChild(Tool(createMemo, ICON.createMemo));
    toolBoxIcon.appendChild(Tool(showSavedTitles, ICON.showHighLight));

    document.body.appendChild(toolBoxIcon);
  }
}

export class MemoEditor extends Observer {
  update(selectionState, memoState, deleteMemo, closeMemo) {
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

    document.body.appendChild(memoEditorBox);
  }
}
