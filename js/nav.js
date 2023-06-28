/**
 * Implements the highlighting of the current tab or pill for tab and pill
 * user interfaces.
 */

class Nav {
    init () {
        const tabs = document.querySelectorAll('.tabs > li');
        tabs.forEach(x => x.addEventListener('click',
            event => {
                const parent = event.target.parentNode
                parent.querySelectorAll("li").forEach(x => x.classList.remove("active"))
                event.target.classList.add("active")
            }
        ));
    }
}

// fzui.nav = new (function() {
//     this.init = function() {
//         const tabs = document.querySelectorAll('.nav > li > a');
//         tabs.forEach(x => x.addEventListener('click', event => {
//             const parent = event.target.parentNode;
//             parent.parentNode.querySelectorAll("li").forEach(x => x.classList.remove('active'));
//             parent.classList.add('active');
//         }))
//     }
// })();

