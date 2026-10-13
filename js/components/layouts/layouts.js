import appFrameStyle from './appframe.scss'
import sidebarStyle from './sidebar.scss'
import sidebarItemStyle from './sidebaritem.scss'

export class AppFrameComponent extends HTMLElement {
    #toggle
    #backdrop
    #mediaQuery = window.matchMedia('(max-width: 600px)')

    static get observedAttributes() {
        return ['open']
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>${appFrameStyle}</style>
            <div id="wrapper">
                <header>
                    <button type="button" class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
                        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
                        </svg>
                    </button>
                    <slot name="logo"></slot>
                    <slot name="search"></slot>
                    <slot name="topnav"></slot>
                </header>
                <aside>
                    <slot name="sidebar"></slot>
                </aside>
                <div class="backdrop"></div>
                <main>
                    <slot></slot>
                </main>
                <footer>
                    <slot name="footer"></slot>
                </footer>
            </div>`

        this.#toggle = this.shadowRoot.querySelector('.menu-toggle')
        this.#backdrop = this.shadowRoot.querySelector('.backdrop')

        this.#toggle.addEventListener('click', () => { this.open = !this.open })
        this.#backdrop.addEventListener('click', () => { this.open = false })
        this.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.open) {
                this.open = false
                this.#toggle.focus()
            }
        })
    }

    // Whether the off-canvas sidebar is open (only meaningful on narrow viewports).
    get open() {
        return this.hasAttribute('open')
    }

    set open(value) {
        this.toggleAttribute('open', Boolean(value))
    }

    connectedCallback() {
        this.#mediaQuery.addEventListener('change', this.#onViewportChange)
    }

    disconnectedCallback() {
        this.#mediaQuery.removeEventListener('change', this.#onViewportChange)
    }

    attributeChangedCallback(name) {
        if (name === 'open') {
            this.#toggle.setAttribute('aria-expanded', String(this.open))
        }
    }

    // Leaving the narrow layout always resets the drawer to closed.
    #onViewportChange = () => {
        this.open = false
    }
}

export class SidebarComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>${sidebarStyle}</style>
            <div id="sidebar">
                <slot></slot>
            </div>`
    }
}

export class SidebarItemComponent extends HTMLElement {
    #row
    #defaultSlot
    #childrenSlot

    static get observedAttributes() {
        return ['selected', 'expanded']
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>${sidebarItemStyle}</style>
            <div class="sidebar-item">
                <slot name="icon"></slot>
                <slot></slot>
                <span class="sidebar-item__caret" aria-hidden="true"></span>
            </div>
            <div class="sidebar-item__children">
                <slot name="subitems"></slot>
            </div>`

        this.#row = this.shadowRoot.querySelector('.sidebar-item')
        this.#defaultSlot = this.shadowRoot.querySelector('slot:not([name])')
        this.#childrenSlot = this.shadowRoot.querySelector('slot[name="subitems"]')

        this.#defaultSlot.addEventListener('slotchange', () => this.#moveNestedSidebars())
        this.#childrenSlot.addEventListener('slotchange', () => this.#updateChildren())
        this.#row.addEventListener('click', () => this.#toggle())
        this.#row.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                this.#toggle()
            }
        })
    }

    get selected() {
        return this.hasAttribute('selected')
    }

    set selected(value) {
        this.toggleAttribute('selected', Boolean(value))
    }

    get expanded() {
        return this.hasAttribute('expanded')
    }

    set expanded(value) {
        this.toggleAttribute('expanded', Boolean(value))
    }

    get hasChildren() {
        return this.#childrenSlot.assignedElements().length > 0
    }

    connectedCallback() {
        this.#moveNestedSidebars()
        this.#updateChildren()
        this.#updateAria()
    }

    attributeChangedCallback(name) {
        if (name === 'selected' || name === 'expanded') {
            this.#updateAria()
        }
    }

    // A nested <fz-sidebar> written as a plain child is reassigned to the
    // "subitems" slot so it renders below the row instead of inline.
    #moveNestedSidebars() {
        for (const child of this.children) {
            if (child.matches('fz-sidebar, .sidebar') && !child.hasAttribute('slot')) {
                child.setAttribute('slot', 'subitems')
            }
        }
    }

    #updateChildren() {
        const hasChildren = this.hasChildren
        this.toggleAttribute('has-children', hasChildren)
        if (hasChildren) {
            this.#row.setAttribute('role', 'button')
            this.#row.setAttribute('tabindex', '0')
        } else {
            this.#row.removeAttribute('role')
            this.#row.removeAttribute('tabindex')
        }
        this.#updateAria()
    }

    #toggle() {
        if (this.hasChildren) {
            this.expanded = !this.expanded
        }
    }

    #updateAria() {
        if (this.selected) {
            this.setAttribute('aria-current', 'page')
        } else {
            this.removeAttribute('aria-current')
        }

        if (this.hasChildren) {
            this.#row.setAttribute('aria-expanded', String(this.expanded))
        } else {
            this.#row.removeAttribute('aria-expanded')
        }
    }
}


