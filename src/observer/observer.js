import { ICON } from "../icons/icon";

class Observer {
  update(state) {}
}

export class ToolBox extends Observer {
  update(newSelectionState, getMemo, createMemo, showSavedTitles) {
    const Tool = (name, svg) => {
      const toolIcon = document.createElement("div");

      toolIcon.style.zIndex = 11;
      toolIcon.style.border = "1px solid #0d6efd";
      toolIcon.style.borderRadius = "2px";
      toolIcon.classList.add(name);
      toolIcon.innerHTML = svg;

      return toolIcon;
    };

    const toolBox = document.createElement("div");

    toolBox.style.display = "flex";
    toolBox.style.flexDirection = "row";
    toolBox.style.width = "95px";
    toolBox.style.height = "28px";
    toolBox.style.position = "absolute";
    toolBox.style.left = `${newSelectionState.event.pageX}px`;
    toolBox.style.top = `${newSelectionState.event.pageY}px`;
    toolBox.style.zIndex = 10;
    toolBox.style.backgroundColor = "#ffffff";
    toolBox.classList.add("tool-box");
    toolBox.addEventListener("click", (event) => {
      const { className } = event.target;

      switch (className) {
        case "getMemo":
          getMemo(newSelectionState);
          break;
        case "createMemo":
          createMemo(newSelectionState);
          break;
        case "showSavedTitles":
          showSavedTitles(newSelectionState);
      }
    });

    toolBox.appendChild(Tool("getMemo", ICON.getMemo));
    toolBox.appendChild(Tool("createMemo", ICON.createMemo));
    toolBox.appendChild(Tool("showSavedTitles", ICON.showHighLight));

    document.body.appendChild(toolBox);
  }
}

export class MemoEditor extends Observer {
  update(newMemoState, newSelectionState, deleteMemo, closeMemo) {
    const Button = (name, svg) => {
      const buttonIcon = document.createElement("div");

      buttonIcon.style.width = "25px";
      buttonIcon.style.height = "25px";
      buttonIcon.classList.add(name);
      buttonIcon.innerHTML = svg;

      return buttonIcon;
    };

    const MemoEditorHeader = () => {
      const memoEditorHeader = document.createElement("div");

      memoEditorHeader.style.width = "300px";
      memoEditorHeader.style.height = "30px";
      memoEditorHeader.style.display = "flex";
      memoEditorHeader.style.flexDirection = "row";
      memoEditorHeader.style.justifyContent = "space-between";
      memoEditorHeader.style.padding = "5px";
      memoEditorHeader.classList.add("memoEditor-header");
      memoEditorHeader.addEventListener("click", (event) => {
        const { className } = event.target;

        switch (className) {
          case "deleteMemo":
            deleteMemo(newMemoState);
            break;
          case "closeMemo":
            closeMemo(newMemoState);
            break;
        }
      });

      memoEditorHeader.appendChild(Button("deleteMemo", ICON.deleteMemo));
      memoEditorHeader.appendChild(Button("closeMemo", ICON.closeMemo));

      return memoEditorHeader;
    };

    const MemoEditorTitle = (memoState) => {
      const memoEditorTitle = document.createElement("div");

      memoEditorTitle.style.width = "240px";
      memoEditorTitle.style.height = "30px";
      memoEditorTitle.style.color = "black";
      memoEditorTitle.style.textAlign = "center";
      memoEditorTitle.style.fontWeight = "20px";
      memoEditorTitle.style.fontSize = "20px";
      memoEditorTitle.style.overflow = "hidden";
      memoEditorTitle.style.textOverflow = "ellipsis";

      memoEditorTitle.textContent = memoState.title;

      return memoEditorTitle;
    };

    const MemoEditorBody = (newMemoState) => {
      const memoEditorBody = document.createElement("textarea");

      memoEditorBody.style.width = "295px";
      memoEditorBody.style.height = "300px";
      memoEditorBody.style.overflow = "auto";
      memoEditorBody.style.marginTop = "10px";
      memoEditorBody.style.resize = "none";

      memoEditorBody.classList.add("memo-editor");
      memoEditorBody.innerText = newMemoState.description || "";
      memoEditorBody.addEventListener("change", (event) => {
        newMemoState.description = event.target.value;
      });

      return memoEditorBody;
    };

    const memoEditorBox = document.createElement("div");

    memoEditorBox.style.width = "300px";
    memoEditorBox.style.height = "300px";
    memoEditorBox.style.display = "flex";
    memoEditorBox.style.flexDirection = "column";
    memoEditorBox.style.alignItems = "center";
    memoEditorBox.style.backgroundColor = "#ffffff";
    memoEditorBox.style.color = "black";
    memoEditorBox.style.position = "absolute";
    memoEditorBox.style.left = `${newSelectionState.event.pageX}px`;
    memoEditorBox.style.top = `${newSelectionState.event.pageY}px`;
    memoEditorBox.style.zIndex = 8;
    memoEditorBox.style.border = "3px solid #0d6efd";
    memoEditorBox.style.borderRadius = "5px";
    memoEditorBox.classList.add("memo-editor-box");

    memoEditorBox.appendChild(MemoEditorHeader());
    memoEditorBox.appendChild(MemoEditorTitle(newMemoState));
    memoEditorBox.appendChild(MemoEditorBody(newMemoState));

    document.body.appendChild(memoEditorBox);
  }
}
