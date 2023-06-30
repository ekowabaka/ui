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
 * Navigation units could be either tab lists, or pills, or navigation men bars.
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
        this.#activeTab = -1;
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

        const tabObserver = new MutationObserver((list, observer) => this.#tabChangedCallback(list, observer));
        console.log(tabObserver);
        tabObserver.observe(container, {childList: true});

        if(this.#tabs.length > 0) {
            this.#activeTab = 0;
            this.showTab(this.#activeTab);
        }
    }

    #tabChangedCallback(mutations) {
        mutations = mutations.filter(x => x.type === "childList");
        for (const mutation of mutations) {
            if(mutation.addedNodes.length > 0) {
                
            }
        }
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

