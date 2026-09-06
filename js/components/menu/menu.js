import menuStyles from './menu.scss'
import menuItemStyles from './menu-item.scss'
import separatorStyles from './menu-separator.scss'

export class MenuComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>
                ${menuStyles}
            </style>
            <div class="menu" role="menu">
                <slot></slot>
            </div>`
    }
}

export class MenuItemComponent extends HTMLElement {
    #parentMenu = null

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>
                ${menuItemStyles}
            </style>
            <div class="menu-item" role="menuitem">
                <slot></slot>
            </div>`
    }

    connectedCallback() {
        this.#parentMenu = this.closest('fz-menu')
        if (!this.#parentMenu) {
            console.warn('<fz-menu-item> should be nested inside an <fz-menu>.', this)
        }

        if (this.hasAttribute('disabled')) {
            this.setAttribute('aria-disabled', 'true')
        }
    }
}

export class MenuSeparatorComponent extends HTMLElement {
    #parentMenu = null

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>
                ${separatorStyles}
            </style>
            <hr class="menu-separator" role="separator" aria-orientation="horizontal" />`
    }

    connectedCallback() {
        this.#parentMenu = this.closest('fz-menu')
        if (!this.#parentMenu) {
            console.warn('<fz-menu-separator> should be nested inside an <fz-menu>.', this)
        }
    }
}
