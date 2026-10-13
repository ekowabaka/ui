import style from './avatars.scss'

export class AvatarComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>
                ${style}
            </style>
            <div class="avatar">
                <slot name="image"></slot>
                <slot name="name"></slot>
                <slot name="subname"></slot>
            </div>`
    }
}