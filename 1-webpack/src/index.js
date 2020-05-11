import nav from './nav';
import { top, bottom, footer } from './footer';
import { makeButton } from './button';
import { red, blue } from './button-styles';
import "./index.css";

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
document.body.appendChild(mainContent);
mainContent.appendChild(footer);