import './styles/main.scss';

import PeekAnimation from './scripts/PeekAnimation';

// peekAnimation(document.querySelector('#peekAnimation'));

const peekAnimation = new PeekAnimation(document.querySelector('#peekAnimation'));
peekAnimation.init();

console.log('hello world');

// bla();
