import './style.scss';
import { add, display } from './modules/functions.js';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  add();
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  display();
});

document.addEventListener('DOMContentLoaded', () => {
  display();
});