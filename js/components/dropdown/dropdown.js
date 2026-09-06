import styles from './dropdown.scss'

export class DropdownComponent extends HTMLElement {
    #button
    #contents

    #onDocumentClick = (event) => {
        if (!event.composedPath().includes(this)) {
            this.close()
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
