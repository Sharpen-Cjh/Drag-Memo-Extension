export default class Subject {
  constructor(name) {
    this.observers = [];
    this.name = name;
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }

  notify(observer, state, fn1, fn2, fn3) {
    const index = this.observers.indexOf(observer);

    if (index > -1) {
      this.observers[index].render(state, fn1, fn2, fn3);
    }
  }
}
