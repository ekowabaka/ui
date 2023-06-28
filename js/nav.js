/**
 * Implements the highlighting of the current tab or pill for tab and pill
 * user interfaces.
 */

export function init() {
    document.querySelectorAll(".tabs").forEach(x => new Nav(x));
}

class Nav {
    #tabsContainer;
    #tabs;
    #panesContainer;
    #panes

    constructor (container) {
        this.#tabs = container.querySelectorAll('li');
        this.#tabs.forEach(tab => tab.addEventListener('click', e => this.#tabClicked(e)));
        this.#tabsContainer = container;
    }

    #tabClicked (event) {
        this.#tabs.forEach(x => x.classList.remove("active"));
        event.target.classList.add("active");
    }
}

