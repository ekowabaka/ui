
import {Nav} from "nav.js"

const fzui = {
  nav: new Nav(),
  dropdowns: new Dropdowns()
};

window.addEventListener('load', () => {
    fzui.dropdowns.init([document]);
    fzui.nav.init();
  });
