const allNavs = new Map();

export const navOperations = {
    init: function() {
        document.querySelectorAll("ul.tabs").forEach(x => allNavs.set(x, new Nav(x))); 
    },
    get: function(nav) {      
        if (typeof nav === "string") {
            nav = document.getElementById(nav);
        }
        return allNavs.get(nav);
    }
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
    #panesContainer;

    /**
     * Create a new navigation around a un-ordered list with the list.
     *  
     *
     * @param {Element} container 
     */
    constructor (container) {
        let firstTab = null;
        
        container.querySelectorAll('li').forEach(tab => {
            if (firstTab === null) {
                firstTab = tab;
            }
            this.#initializeTab(tab);
            //tab.addEventListener('click', () => this.showTab(tab));
        });
        
        this.#tabsContainer = container;
        
        for (const node of container.parentNode.children) {
            if(node.classList.contains("panes")) {
                this.#panesContainer = node;
            }
        }

        if (this.#panesContainer !== null) {
            this.#panesContainer.querySelectorAll("div");
        }

        const tabObserver = new MutationObserver((list, observer) => this.#tabsMutated(list, observer));
        tabObserver.observe(container, {childList: true});

        if(firstTab) {
            this.showTab(firstTab);
        } 
    }

    #initializeTab(tab) {
        const tabInitialized = new CustomEvent("fz-tab-initialized", {detail: tab});
        tab.addEventListener('click', () => this.showTab(tab));
        this.#tabsContainer.dispatchEvent(tabInitialized);
    }

    #tabsMutated(mutations) {
        mutations = mutations.filter(x => x.type === "childList");
        for (const mutation of mutations) {
            mutation.addedNodes.forEach(node => {
                if(node.nodeName === 'LI') {
                    this.#initializeTab(node);
                }
            });
        }
    }

    showTab(node) {
        let nodeIndex;
        this.#tabsContainer.querySelectorAll("li").forEach((x, i) => {
            x.classList.remove("active");
            if (x === node) {
                nodeIndex = i;
            }
        });
        this.#tabsContainer.querySelectorAll("li").forEach(x => x.classList.remove("active"));
        node.classList.add("active");
        
        let paneIndex = 0;
        this.#panesContainer.querySelectorAll("div").forEach(x => x.classList.remove("active"));
        for (const pane of this.#panesContainer.childNodes) {
            if (pane.nodeType === Node.ELEMENT_NODE && paneIndex++ === nodeIndex) {
                pane.classList.add("active")
                break;
            }
        }
    }
}

