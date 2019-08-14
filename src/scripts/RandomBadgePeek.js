import { random } from './utils';

class RandomBadgePeek {
  constructor (parent) {
    this.parent = parent;
    this.peekClasses = ['badge--peek-left', 'badge--peek-top', 'badge--peek-right', 'badge--peek-bottom'];
  }

  init () {
    if (!this.parent) {
      throw new Error('Invalid element. Random badge peek cannot be applied.');
    }

    const children = [...this.parent.children];

    if (!children.length) {
      return;
    }

    this.applyPeek(children);
  }

  applyPeek (badges) {
    while (this.peekClasses.length) {
      const badgeIndex = random(0, badges.length - 1);
      const badge = badges[badgeIndex];

      badge.classList.add(this.peekClasses.pop());

      // remove badge from array to avoid the chance of having it picked twice
      badges.splice(badgeIndex, 1);
    }
  }
}

export default RandomBadgePeek;
