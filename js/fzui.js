import '../sass/fzui.scss'
import { CardComponent } from './components/cards/cards.js'
import { DropdownComponent } from './components/dropdown/dropdown.js'
import { MenuComponent, MenuItemComponent, MenuSeparatorComponent } from './components/menu/menu.js'
import {AppFrameComponent} from "./components/layouts/layouts.js";
import {AvatarComponent} from "./components/avatars/avatars.js";
import {SidebarComponent, SidebarItemComponent} from "./components/layouts/layouts.js";
import { CalloutComponent, NotificationComponent, notify } from "./components/callout/callout.js";

export { CalloutComponent, NotificationComponent, notify };

export function initialize() {
    customElements.define('fz-callout', CalloutComponent)
    customElements.define('fz-notification', NotificationComponent)
    customElements.define('fz-card', CardComponent)
    customElements.define('fz-dropdown', DropdownComponent)
    customElements.define('fz-menu', MenuComponent)
    customElements.define('fz-menu-item', MenuItemComponent)
    customElements.define('fz-menu-separator', MenuSeparatorComponent)
    customElements.define('fz-app-frame', AppFrameComponent)
    customElements.define('fz-avatar', AvatarComponent)
    customElements.define('fz-sidebar', SidebarComponent)
    customElements.define('fz-sidebar-item', SidebarItemComponent)
}
