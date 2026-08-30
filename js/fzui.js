import '../sass/fzui.scss';
import { CardComponent } from './components/cards/cards.js';

export function initialize() {
    customElements.define('fz-card', CardComponent);
}