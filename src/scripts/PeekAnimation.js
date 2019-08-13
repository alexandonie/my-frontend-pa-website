import { random } from './utils';

class PeekAnimation {
  constructor (parent) {
    this.parent = parent;
    this.children = null;
  }

  init () {
    if (!this.parent) {
      throw new Error('Invalid element. Peek animation cannot be applied.');
    }

    this.children = [...this.parent.children];

    if (!this.children.length) {
      return;
    }

    setInterval(this.peek.bind(this), 2000);
  }

  peek () {
    const peek = ['top', 'right', 'bottom', 'left'];
    const side = peek[random(0, peek.length - 1)];
    const elem = this.children[random(0, this.children.length - 1)];

    this.children.forEach(el => el.removeAttribute('class'));
    elem.classList.add(`peek-${side}`);
  }
}

export default PeekAnimation;
