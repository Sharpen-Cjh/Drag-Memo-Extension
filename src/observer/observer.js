import { ICON } from '../icons/icon';
import { ToolButton } from './toolButton';

class Observer {
  render(state) {}
}

export class ToolBox extends Observer {
  render(newSelectionState, getMemo, createMemo, showSavedMemos) {
    const toolBox = document.createElement('div');

    toolBox.style.left = `${newSelectionState.event.pageX}px`;
    toolBox.style.top = `${newSelectionState.event.pageY}px`;
    toolBox.classList.add('tool-box');
    toolBox.addEventListener('click', (event) => {
      const { id } = event.target;

      switch (id) {
        case 'GetMemoButton':
          getMemo(newSelectionState);
          break;
        case 'CreateMemoButton':
          createMemo(newSelectionState);
          break;
        case 'ShowSavedMemosButton':
          showSavedMemos(newSelectionState);
      }
    });

    const getMemoButton = ToolButton.factory('GetMemoButton');
    const createMemoButton = ToolButton.factory('CreateMemoButton');
    const showSavedMemosButton = ToolButton.factory('ShowSavedMemosButton');

    toolBox.appendChild(getMemoButton.render());
    toolBox.appendChild(createMemoButton.render());
    toolBox.appendChild(showSavedMemosButton.render());

    document.body.appendChild(toolBox);
  }
}

export class MemoEditor extends Observer {
  render(newMemoState, newSelectionState, deleteMemo, closeMemo) {
    const Button = (name, svg) => {
      const buttonIcon = document.createElement('div');

      buttonIcon.style.width = '25px';
      buttonIcon.style.height = '25px';
      buttonIcon.classList.add(name);
      buttonIcon.innerHTML = svg;

      return buttonIcon;
    };

    const MemoEditorHeader = () => {
      const memoEditorHeader = document.createElement('div');

      memoEditorHeader.classList.add('memo-editor-header');
      memoEditorHeader.addEventListener('click', (event) => {
        const { className } = event.target;

        switch (className) {
          case 'deleteMemo':
            deleteMemo(newMemoState);
            break;
          case 'closeMemo':
            closeMemo(newMemoState);
            break;
        }
      });

      memoEditorHeader.appendChild(Button('deleteMemo', ICON.deleteMemo));
      memoEditorHeader.appendChild(Button('closeMemo', ICON.closeMemo));

      return memoEditorHeader;
    };

    const MemoEditorTitle = (memoState) => {
      const memoEditorTitle = document.createElement('div');

      memoEditorTitle.classList.add('memo-editor-title');

      memoEditorTitle.textContent = memoState.title;

      return memoEditorTitle;
    };

    const MemoEditorBody = (newMemoState) => {
      const memoEditorBody = document.createElement('textarea');

      memoEditorBody.classList.add('memo-editor-body');
      memoEditorBody.innerText = newMemoState.description || '';
      memoEditorBody.addEventListener('change', (event) => {
        newMemoState.description = event.target.value;
      });

      return memoEditorBody;
    };

    const memoEditorContainer = document.createElement('div');

    memoEditorContainer.style.left = `${newSelectionState.event.pageX}px`;
    memoEditorContainer.style.top = `${newSelectionState.event.pageY}px`;
    memoEditorContainer.classList.add('memo-editor-container');

    memoEditorContainer.appendChild(MemoEditorHeader());
    memoEditorContainer.appendChild(MemoEditorTitle(newMemoState));
    memoEditorContainer.appendChild(MemoEditorBody(newMemoState));

    document.body.appendChild(memoEditorContainer);
  }
}
