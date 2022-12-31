import { ICON } from "../icons/icon";

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

export const ToolBox = (
  selectionState,
  getMemo,
  createMemo,
  showSavedTitles
) => {
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
  toolBoxIcon.setAttribute("id", "tool-box");

  toolBoxIcon.appendChild(Tool(getMemo, ICON.getMemo));
  toolBoxIcon.appendChild(Tool(createMemo, ICON.createMemo));
  toolBoxIcon.appendChild(Tool(showSavedTitles, ICON.showHighLight));

  return toolBoxIcon;
};
