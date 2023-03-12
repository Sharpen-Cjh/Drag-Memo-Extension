import { MESSAGE } from '../constants/message';

import { ToolBox } from '../observer/observer';
import { MemoEditor } from '../observer/observer';
import Subject from '../subject/subject';

import { getUserInfo } from '../util/userinfo';
import { sendMessageReceiveResponse } from '../util/sendmessage';

const subject = new Subject();
const toolBox = new ToolBox();
const memoEditor = new MemoEditor();

subject.subscribe(toolBox);
subject.subscribe(memoEditor);

document.addEventListener('mouseup', (event) => {
  const toolBoxIcon = document.querySelector('.tool-box');

  if (toolBoxIcon) {
    return deleteToolBox(event);
  }

  const selectionText = window.getSelection().toString().trim();

  setSelectionState({ selectionText, event });
});

const setSelectionState = (newSelectionState) => {
  if (newSelectionState.selectionText) {
    subject.notify(
      toolBox,
      newSelectionState,
      getMemo,
      createMemo,
      showSavedMemos
    );

    return;
  }
};

const setMemoState = (newMemoState, newSelectionState) => {
  const memoEditorBox = document.querySelector('.memo-editor-box');

  if (memoEditorBox) {
    return;
  }

  subject.notify(
    memoEditor,
    newMemoState,
    newSelectionState,
    deleteMemo,
    closeMemo
  );
};

const deleteToolBox = (event) => {
  let toolBoxIcon = document.querySelector('.tool-box');

  if (toolBoxIcon === event?.target?.parentNode) {
    return;
  }

  toolBoxIcon?.parentNode?.removeChild(toolBoxIcon);
  toolBoxIcon = '';
};

const deleteMemoEditor = () => {
  let memoEditorBox = document.getElementsByClassName('memo-editor-box');

  memoEditorBox[0].parentNode.removeChild(memoEditorBox[0]);
  memoEditorBox = '';
};

const getMemo = async (newSelectionState) => {
  const userInfo = await getUserInfo();

  if (userInfo) {
    const message = {
      action: 'getMemo',
      selectionText: newSelectionState.selectionText,
      userInfo,
    };

    const response = await sendMessageReceiveResponse(message);

    if (response.success && response.memo !== null) {
      const newMemoState = response.memo;

      setMemoState(newMemoState, newSelectionState);
      deleteToolBox();

      return;
    }

    window.alert(MESSAGE.FAIL_GET_MEMO);
    deleteToolBox();
  }
};

const getHighlightMemo = async (title, newSelectionState) => {
  const userInfo = await getUserInfo();

  if (userInfo) {
    const message = {
      action: 'getMemo',
      selectionText: title,
      userInfo,
    };

    const response = await sendMessageReceiveResponse(message);

    if (response.success && response.memo !== null) {
      const newMemoState = response.memo;

      setMemoState(newMemoState, newSelectionState);

      return;
    }

    window.alert(MESSAGE.FAIL_GET_MEMO);
  }
};

const createMemo = async (newSelectionState) => {
  const userInfo = await getUserInfo();

  if (userInfo) {
    const message = {
      action: 'createMemo',
      selectionText: newSelectionState.selectionText,
      userInfo,
    };

    const response = await sendMessageReceiveResponse(message);

    if (response.success) {
      const newMemoState = {
        title: newSelectionState.selectionText,
        description: '',
      };

      setMemoState(newMemoState, newSelectionState);
      deleteToolBox();

      return;
    }
    window.alert(MESSAGE.FAIL_CREATE_MEMO);
    deleteToolBox();
  }
};

const showSavedMemos = async (newSelectionState) => {
  const userInfo = await getUserInfo();

  if (userInfo) {
    const message = {
      action: 'getMemoTitles',
      userInfo,
    };

    const response = await sendMessageReceiveResponse(message);

    if (response.length !== 0) {
      response.forEach((title) => {
        highlight(title, newSelectionState.event);
      });

      deleteToolBox();

      return;
    }

    window.alert(MESSAGE.FAIL_GET_MEMO_TITLES);
    deleteToolBox();
  }
};

const highlight = (title, event) => {
  const regex = RegExp(title, 'g');
  let selection;
  let range;
  let match;

  selection = window.getSelection();
  selection.removeAllRanges();

  while ((match = regex.exec(event.target.parentNode.textContent))) {
    let node = iterateNode(event.target.parentNode);
    let currentIndex = 0;
    let result = node.next();

    while (!result.done) {
      if (
        match.index >= currentIndex &&
        match.index < currentIndex + result.value.length
      ) {
        range = new Range();
        range.setStart(result.value, match.index - currentIndex);
      }

      if (
        match.index + title.length >= currentIndex &&
        match.index + title.length < currentIndex + result.value.length
      ) {
        range.setEnd(result.value, match.index + title.length - currentIndex);
        selection.addRange(range);

        addHighLightDiv(range.getClientRects(), title);
      }

      currentIndex += result.value.length;
      result = node.next();
    }
    selection.removeAllRanges();
  }
};

function* iterateNode(topNode) {
  const childNodes = topNode.childNodes;

  for (let i = 0; i < childNodes.length; i++) {
    let node = childNodes[i];
    if (node.nodeType === 3) {
      yield node;
    } else {
      yield* iterateNode(node);
    }
  }
}

const addHighLightDiv = (rects, title) => {
  for (let i = 0; i < rects.length; i++) {
    const rect = rects[i];
    const highlightRect = document.createElement('div');

    document.body.appendChild(highlightRect);

    highlightRect.classList.add('highlight-rect');
    highlightRect.style.top = rect.y + window.scrollY + 'px';
    highlightRect.style.left = rect.x + 'px';
    highlightRect.style.height = rect.height + 'px';
    highlightRect.style.width = rect.width + 'px';
    highlightRect.style.background = '#0d6efd';
    highlightRect.style.opacity = 0.5;
    highlightRect.style.position = 'absolute';
    highlightRect.style.zIndex = 6;
    highlightRect.style.cursor = 'pointer';

    highlightRect.addEventListener('click', (event) => {
      const newSelectionState = { event };

      getHighlightMemo(title, newSelectionState);
    });
  }
};

const deleteMemo = async (memoState) => {
  const userInfo = await getUserInfo();
  const result = window.confirm(MESSAGE.CONFIRM_DELETE);

  if (result && userInfo) {
    const message = {
      action: 'deleteMemo',
      memoId: memoState.title,
      userInfo,
    };
    const response = await sendMessageReceiveResponse(message);

    if (response.success) {
      deleteMemoEditor();
      return;
    }

    window.alert(MESSAGE.FAIL_DELETE_MEMO);
    deleteMemoEditor();
  }
};

const closeMemo = async (memoState) => {
  const userInfo = await getUserInfo();

  if (userInfo) {
    const message = {
      action: 'patchMemo',
      memoId: memoState.title,
      innerText: memoState.description,
      userInfo,
    };

    const response = await sendMessageReceiveResponse(message);

    if (response.success) {
      deleteMemoEditor();
      return;
    }

    window.alert(MESSAGE.FAIL_SAVE_MEMO);
    deleteMemoEditor();
  }
};
