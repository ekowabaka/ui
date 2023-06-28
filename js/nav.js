import {DomUtilities} from './dom.js'

/**
 * Holds all navs that are currently active.
 */
const allNavs = [];

/**
 * Implements the highlighting of the current tab or pill for tab and pill
 * user interfaces.
 */

export function init() {
    document.querySelectorAll("ul.tabs").forEach(x => new Nav(x));
}

/**
 * Represents a navigational unit.
 */
class Nav {
    /**
     * The container holding the list of tabs.
     */
    #tabsContainer;
    #tabs;
    #panesContainer;
    #panes
    #activeTab;

    constructor (container) {
        this.#activeTab = 0;
        this.#tabs = container.querySelectorAll('li');
        this.#tabs.forEach((tab, i) => tab.addEventListener('click', e => {
            this.showTab(i);
            if (e.target.classList.contains("active")) {
                this.#activeTab = i;
            }
        }));
        this.#tabsContainer = container;
        this.#panesContainer = DomUtilities.nextSibling(container);

        if (this.#panesContainer !== null) {
            this.#panes = this.#panesContainer.querySelectorAll("div");
        } else {
            this.#panes = [];
        }

        this.showTab(this.#activeTab);
    }

    showTab (index) {
        this.#tabs.forEach(x => x.classList.remove("active"));
        this.#panes.forEach(x => x.classList.remove("active"));
        this.#tabs[index].classList.add("active");   
        this.#activeTab = index;

        if (index < this.#panes.length) {
            this.#panes[index].classList.add("active");
        }
    }
}

