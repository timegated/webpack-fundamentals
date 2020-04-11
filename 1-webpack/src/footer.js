import './footer.css'
import { red, blue } from './button-styles';

const top = document.createElement('div');
top.innerText = 'Top Footer';
top.style = red;
const bottom = document.createElement('div');
bottom.innerText = 'Bottom footer'
bottom.style = blue;
 
const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);
export { top, bottom, footer };