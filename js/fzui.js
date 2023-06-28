
import {init as initializeNavs} from "./nav.js"

const fzui = {
  //nav: new Nav(),
  //dropdowns: new Dropdowns()
};

window.addEventListener('load', () => {
    //fzui.dropdowns.init([document]);
    //Nav.init();
    initializeNavs();
  });
