import nav from './nav';
import { top, bottom } from './footer';
import { makeButton } from './button';
import { red, blue } from './button-styles';

top.classList.add('topFooter')
makeButton('My First Button', 'color: cyan')
top.innerText = 'Top Footer'
top.style = red;
top.style.fontSize = '24px'
document.body.appendChild(top)