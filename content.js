window.onload = () => {
  const renderIcon = (event) => {
    const draggedText = window.getSelection().toString();

    if (draggedText) {
      const iconBox = document.createElement("div");
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

      iconBox.style.left = `${event.clientX}px`;
      iconBox.style.top = `${event.clientY}px`;
      iconBox.style.display = "block";
      iconBox.style.position = "absolute";
      iconBox.style.zIndex = 7;

      iconBox.innerHTML = memoIcon;

      document.body.appendChild(iconBox);
    }
  };

  document.addEventListener("mouseup", getText);
  document.addEventListener("mouseup", renderIcon);
};
