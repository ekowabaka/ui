import breadcrumbStyles from './breadcrumbs.scss'
import breadcrumbItemStyles from './breadcrumb-item.scss'

const SEPARATOR_MAP = {
    slash: '"/"',
    chevron: '"›"',
    gt: '">"',
    arrow: '"→"',
    dot: '"·"',
}

export class BreadcrumbComponent extends HTMLElement {
    #nav
    #slot

    static get observedAttributes() {
        return ['label', 'aria-label', 'separator', 'variant', 'bar', 'pills', 'chevron']
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML = `
            <style>${breadcrumbStyles}</style>
            <nav class="breadcrumb" aria-label="Breadcrumbs">
                <ol class="breadcrumb__list">
                    <slot></slot>
                </ol>
            </nav>
        `

        this.#nav = this.shadowRoot.querySelector('nav')
        this.#slot = this.shadowRoot.querySelector('slot')
        this.#slot.addEventListener('slotchange', () => this.#syncItems())
    }

    connectedCallback() {
        this.#syncNavLabel()
        this.#syncSeparator()
        this.#syncItems()
    }

    attributeChangedCallback(name) {
        if (name === 'label' || name === 'aria-label') {
            this.#syncNavLabel()
        } else if (name === 'separator' || name === 'chevron') {
            this.#syncSeparator()
        } else if (name === 'variant' || name === 'bar' || name === 'pills') {
            this.#syncItems()
        }
    }

    #syncNavLabel() {
        if (!this.#nav) return
        const label = this.getAttribute('label') || this.getAttribute('aria-label') || 'Breadcrumbs'
        this.#nav.setAttribute('aria-label', label)
    }

    #syncSeparator() {
        const sep = this.getAttribute('separator')
        if (sep) {
            const key = sep.trim().toLowerCase()
            if (SEPARATOR_MAP[key]) {
                this.style.setProperty('--fz-breadcrumb-separator', SEPARATOR_MAP[key])
            } else {
                const escaped = sep.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
                this.style.setProperty('--fz-breadcrumb-separator', `"${escaped}"`)
            }
        } else if (this.hasAttribute('chevron')) {
            this.style.setProperty('--fz-breadcrumb-separator', SEPARATOR_MAP.chevron)
        } else {
            this.style.removeProperty('--fz-breadcrumb-separator')
        }
    }

    #getVariant() {
        const variantAttr = this.getAttribute('variant')?.toLowerCase()
        if (variantAttr === 'bar' || this.hasAttribute('bar') || this.classList.contains('bar') || this.classList.contains('fz-breadcrumb--bar')) {
            return 'bar'
        }
        if (variantAttr === 'pills' || this.hasAttribute('pills') || this.classList.contains('pills') || this.classList.contains('fz-breadcrumb--pills')) {
            return 'pills'
        }
        return 'plain'
    }

    #syncItems() {
        const items = this.#slot.assignedElements().filter(
            (el) => el.tagName === 'FZ-BREADCRUMB-ITEM'
        )
        const variant = this.#getVariant()
        const hasExplicitCurrent = items.some((item) => item.hasAttribute('current'))

        items.forEach((item, index) => {
            if (!item.hasAttribute('role')) {
                item.setAttribute('role', 'listitem')
            }

            if (variant !== 'plain') {
                item.setAttribute('data-variant', variant)
            } else {
                item.removeAttribute('data-variant')
            }

            const isAutoCurrent = !hasExplicitCurrent && index === items.length - 1
            item.toggleAttribute('data-auto-current', isAutoCurrent)
            if (typeof item._syncState === 'function') {
                item._syncState()
            }
        })
    }
}

export class BreadcrumbItemComponent extends HTMLElement {
    #container
    #link
    #iconSlot
    #defaultSlot

    static get observedAttributes() {
        return ['href', 'target', 'rel', 'current', 'data-auto-current']
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML = `
            <style>${breadcrumbItemStyles}</style>
            <span class="breadcrumb-item">
                <a class="breadcrumb-item__link" part="link">
                    <slot name="icon"></slot>
                    <slot></slot>
                </a>
            </span>
        `

        this.#container = this.shadowRoot.querySelector('.breadcrumb-item')
        this.#link = this.shadowRoot.querySelector('.breadcrumb-item__link')
        this.#iconSlot = this.shadowRoot.querySelector('slot[name="icon"]')
        this.#defaultSlot = this.shadowRoot.querySelector('slot:not([name])')

        this.#defaultSlot.addEventListener('slotchange', () => this._syncState())
    }

    get current() {
        return this.hasAttribute('current') || this.hasAttribute('data-auto-current')
    }

    set current(value) {
        this.toggleAttribute('current', Boolean(value))
    }

    connectedCallback() {
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'listitem')
        }
        this._syncState()
    }

    attributeChangedCallback() {
        this._syncState()
    }

    _syncState() {
        if (!this.#container || !this.#link) return

        const slottedAnchor = this.querySelector(':scope > a')
        const isCurrent = this.current

        if (slottedAnchor) {
            // Avoid nested <a> when the consumer provides their own <a> child
            if (this.#link.parentNode === this.#container) {
                this.#container.appendChild(this.#iconSlot)
                this.#container.appendChild(this.#defaultSlot)
                this.#link.remove()
            }
            if (isCurrent) {
                slottedAnchor.setAttribute('aria-current', 'page')
            } else {
                slottedAnchor.removeAttribute('aria-current')
            }
            return
        }

        if (this.#link.parentNode !== this.#container) {
            this.#container.appendChild(this.#link)
            this.#link.appendChild(this.#iconSlot)
            this.#link.appendChild(this.#defaultSlot)
        }

        const href = this.getAttribute('href')
        if (href !== null) {
            this.#link.setAttribute('href', href)
            this.#link.removeAttribute('role')
            this.#link.removeAttribute('tabindex')
        } else {
            this.#link.removeAttribute('href')
            this.#link.setAttribute('role', 'link')
            this.#link.setAttribute('tabindex', '0')
        }

        const target = this.getAttribute('target')
        if (target) {
            this.#link.setAttribute('target', target)
        } else {
            this.#link.removeAttribute('target')
        }

        const rel = this.getAttribute('rel')
        if (rel) {
            this.#link.setAttribute('rel', rel)
        } else {
            this.#link.removeAttribute('rel')
        }

        if (isCurrent) {
            this.#link.setAttribute('aria-current', 'page')
        } else {
            this.#link.removeAttribute('aria-current')
        }
    }
}
