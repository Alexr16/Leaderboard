import './style.scss';
import { add, display } from './modules/functions.js';

const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  add();
  display();
});