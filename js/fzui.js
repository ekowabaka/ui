import '../sass/fzui.scss'
import { CardComponent } from './components/cards/cards.js'
import { DropdownComponent } from './components/dropdown/dropdown.js'
import { MenuComponent, MenuItemComponent, MenuSeparatorComponent } from './components/menu/menu.js'

export { CardComponent } from './components/cards/cards.js'
export { DropdownComponent } from './components/dropdown/dropdown.js'
export { MenuComponent, MenuItemComponent, MenuSeparatorComponent } from './components/menu/menu.js'

export function initialize() {
    customElements.define('fz-card', CardComponent)
    customElements.define('fz-dropdown', DropdownComponent)
    customElements.define('fz-menu', MenuComponent)
    customElements.define('fz-menu-item', MenuItemComponent)
    customElements.define('fz-menu-separator', MenuSeparatorComponent)
}
