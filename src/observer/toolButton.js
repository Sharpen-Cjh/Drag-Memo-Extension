import { ICON } from '../icons/icon';

export class ToolButton {
  constructor(name) {
    this.name = name;
    this.iconName = ICON[name];
  }

  render() {
    const button = document.createElement('div');

    button.innerHTML = this.iconName;
    button.classList.add('tool-button');
    button.setAttribute('id', this.name);

    return button;
  }

  static factory(name) {
    switch (name) {
      case 'GetMemoButton':
        return new GetMemoButton();
      case 'CreateMemoButton':
        return new CreateMemoButton();
      case 'ShowSavedMemosButton':
        return new ShowSavedMemosButton();
    }
  }
}

class GetMemoButton extends ToolButton {
  constructor() {
    super('GetMemoButton');
  }
}

class CreateMemoButton extends ToolButton {
  constructor() {
    super('CreateMemoButton');
  }
}

class ShowSavedMemosButton extends ToolButton {
  constructor() {
    super('ShowSavedMemosButton');
  }
}
