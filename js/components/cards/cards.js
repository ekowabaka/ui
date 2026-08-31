import styles from './cards.css';

export class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}).innerHTML = 
            `<style>
                ${styles}
            </style>
            <div class="card">
                <slot name="image"></slot>
                <div class="card__body">
                    <slot name="title"></slot>
                    <slot></slot>
                </div>
            </div>`
    }
}
