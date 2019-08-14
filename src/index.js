import './styles/main.scss';

/**
 * Babel polyfill for IE11
 * https://babeljs.io/docs/en/babel-polyfill/
*/
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import RandomBadgePeek from './scripts/RandomBadgePeek';

const randomBadgePeek = new RandomBadgePeek(document.querySelector('#randomBadgePeek'));
randomBadgePeek.init();
