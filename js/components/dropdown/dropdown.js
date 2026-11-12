import styles from './dropdown.scss'

export class DropdownComponent extends HTMLElement {
    static get observedAttributes() {
        return ['no-arrow', 'arrow', 'without-arrow', 'no-caret']
    }

    #button
    #contents

    #onDocumentClick = (event) => {
        if (!event.composedPath().includes(this)) {
            this.close()
        }
    }

    get noArrow() {
        return this.hasAttribute('no-arrow') ||
            this.hasAttribute('without-arrow') ||
            this.hasAttribute('no-caret') ||
            this.getAttribute('arrow') === 'false' ||
            this.getAttribute('arrow') === 'none' ||
            this.classList.contains('no-arrow') ||
            this.classList.contains('fz-dropdown--no-arrow') ||
            this.classList.contains('dropdown--no-arrow')
    }

    set noArrow(value) {
        if (value) {
            this.setAttribute('no-arrow', '')
        } else {
            this.removeAttribute('no-arrow')
            this.removeAttribute('without-arrow')
            this.removeAttribute('no-caret')
            if (this.getAttribute('arrow') === 'false' || this.getAttribute('arrow') === 'none') {
                this.removeAttribute('arrow')
            }
        }
    }

    get arrow() {
        return !this.noArrow
    }

    set arrow(value) {
        if (!value || value === 'false' || value === 'none') {
            this.noArrow = true
        } else {
            this.noArrow = false
        }
    }

    constructor() {
        super()
        this.attachShadow({mode: 'open'}).innerHTML =
            `<style>
                ${styles}
            </style>
            <div class="dropdown">
                <slot name="button"></slot>
                <div class="contents">
                    <slot></slot>
                </div>
            </div>`

        this.#button = this.shadowRoot.querySelector('slot[name="button"]')
        this.#contents = this.shadowRoot.querySelector('.contents')
    }

    connectedCallback() {
        this.#button.addEventListener('click', this.#onButtonClick)
    }

    disconnectedCallback() {
        this.#button.removeEventListener('click', this.#onButtonClick)
        this.close()
    }

    #onButtonClick = () => {
        this.toggle()
    }

    open() {
        this.#contents.classList.add('active')
        document.addEventListener('click', this.#onDocumentClick)
    }

    close() {
        this.#contents.classList.remove('active')
        document.removeEventListener('click', this.#onDocumentClick)
    }

    toggle() {
        if (this.#contents.classList.contains('active')) {
            this.close()
        } else {
            this.open()
        }
    }
}
