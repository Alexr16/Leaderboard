import './style.scss';
import { add } from './modules/functions.js';

const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  add();
});