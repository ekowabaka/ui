import styles from './cards.css';

export class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}).innerHTML = 
            `<style>
                ${styles}
            </style>
            <div class="card">
                <slot name="title"></slot>
                <slot></slot>
            </div>`
    }
}

