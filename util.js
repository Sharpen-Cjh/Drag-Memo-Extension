const makeHighLight = (range) => {
  const { parentNode } = range.commonAncestorContainer;
  const span = document.createElement("span");
  span.style.position = "absolute";
  span.style.left = `${selectStartMousePosition.x}px`;
  span.style.top = `${selectStartMousePosition.y}px`;
  span.style.backgroundColor = "blue";
  span.style.zIndex = 9;

  span.textContent = "hi";
  parentNode.appendChild(span);
};

const setSelectStartMousePosition = (x, y) => {
  (selectStartMousePosition.x = x), (selectStartMousePosition.y = y);
};

document.addEventListener("selectstart", () => {
  const selectStartMousePosition = copyObject(mousePosition);

  setSelectStartMousePosition(
    selectStartMousePosition.x,
    selectStartMousePosition.y
  );
});

const range = selection?.getRangeAt?.(0);
