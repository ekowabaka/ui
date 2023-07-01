
import {navOperations} from "./nav.js"

window.addEventListener('load', () => {
    //fzui.dropdowns.init([document]);
    //Nav.init();
    navOperations.init();
  });

window.fzui = {
  nav: navOperations
};


