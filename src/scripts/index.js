import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import NavbarInitiator from './utils/navbar-initiator';
import DropdownInitiator from './utils/dropdown-initiator';
import App from './views/app';
import swRegister from './utils/sw-register';

NavbarInitiator();
DropdownInitiator();

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
