import style from './callout.scss';

const DEFAULT_ICONS = {
    notification: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    info: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    error: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    danger: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    warning: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    success: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 11 12 14 22 4"></polyline></svg>`,
    neutral: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
    default: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
};

export class CalloutComponent extends HTMLElement {
    static get observedAttributes() {
        return [
            'classification',
            'type',
            'notification',
            'info',
            'error',
            'danger',
            'warning',
            'success',
            'neutral',
            'closable',
            'dismissible'
        ];
    }

    #defaultIconEl;
    #closeBtn;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = `
            <style>${style}</style>
            <div class="callout" role="status" aria-live="polite">
                <div class="callout__icon">
                    <slot name="icon">
                        <span class="callout__default-icon"></span>
                    </slot>
                </div>
                <div class="callout__content">
                    <div class="callout__title">
                        <slot name="title"></slot>
                    </div>
                    <div class="callout__body">
                        <slot></slot>
                    </div>
                </div>
                <div class="callout__actions">
                    <slot name="action"></slot>
                    <button type="button" class="callout__close" aria-label="Dismiss">
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        this.#defaultIconEl = this.shadowRoot.querySelector('.callout__default-icon');
        this.#closeBtn = this.shadowRoot.querySelector('.callout__close');

        this.#closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.dismiss();
        });

        this.#updateIcon();
    }

    connectedCallback() {
        this.#updateIcon();
    }

    attributeChangedCallback(name) {
        if (name !== 'closable' && name !== 'dismissible') {
            this.#updateIcon();
        }
    }

    #updateIcon() {
        if (!this.#defaultIconEl) return;
        const cls = this.getClassification();
        const iconSvg = DEFAULT_ICONS[cls] || DEFAULT_ICONS.default;
        this.#defaultIconEl.innerHTML = iconSvg;
    }

    getClassification() {
        const attr = this.getAttribute('classification') || this.getAttribute('type');
        if (attr) return attr.toLowerCase();
        for (const name of ['notification', 'info', 'error', 'danger', 'warning', 'success', 'neutral']) {
            if (this.hasAttribute(name) || this.classList.contains(name) || this.classList.contains(`fz-callout--${name}`)) {
                return name;
            }
        }
        return 'notification';
    }

    dismiss() {
        const event = new CustomEvent('dismiss', { bubbles: true, composed: true, cancelable: true });
        this.dispatchEvent(event);
        if (!event.defaultPrevented) {
            this.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            this.style.opacity = '0';
            this.style.transform = 'translateY(-4px)';
            setTimeout(() => {
                this.remove();
                this.dispatchEvent(new CustomEvent('dismissed', { bubbles: true, composed: true }));
            }, 200);
        }
    }

    close() {
        this.dismiss();
    }
}

export class NotificationComponent extends CalloutComponent {
    connectedCallback() {
        super.connectedCallback?.();
        if (!this.hasAttribute('classification') && !this.hasAttribute('type')) {
            this.setAttribute('classification', 'notification');
        }
    }
}

/**
 * Display a notification using the callout component.
 *
 * @param {string|Object} optionsOrMessage
 * @param {Object} [maybeOptions]
 * @returns {CalloutComponent} The created callout element.
 */
export function notify(optionsOrMessage, maybeOptions = {}) {
    const options = typeof optionsOrMessage === 'string'
        ? { message: optionsOrMessage, ...maybeOptions }
        : { ...optionsOrMessage };

    const {
        message = '',
        title = '',
        classification = 'notification',
        layer = '2',
        corner = 'subtle',
        duration = 4500,
        closable = true,
        icon = null,
        position = 'top-right',
        container = null
    } = options;

    let targetContainer = container;
    if (!targetContainer) {
        let containerEl = document.querySelector(`.fz-notification-container.fz-notification-container--${position}`);
        if (!containerEl) {
            containerEl = document.createElement('div');
            containerEl.className = `fz-notification-container fz-notification-container--${position}`;
            document.body.appendChild(containerEl);
        }
        targetContainer = containerEl;
    }

    const callout = document.createElement('fz-callout');
    callout.setAttribute('classification', classification);
    callout.setAttribute('layer', String(layer));
    if (corner) callout.setAttribute('corner', corner);
    if (closable) callout.setAttribute('closable', '');

    if (icon) {
        const iconEl = document.createElement('span');
        iconEl.slot = 'icon';
        if (typeof icon === 'string') {
            iconEl.innerHTML = icon;
        } else if (icon instanceof Node) {
            iconEl.appendChild(icon);
        }
        callout.appendChild(iconEl);
    }

    if (title) {
        const titleEl = document.createElement('span');
        titleEl.slot = 'title';
        titleEl.textContent = title;
        callout.appendChild(titleEl);
    }

    if (message) {
        const bodyEl = document.createElement('div');
        if (typeof message === 'string') {
            bodyEl.innerHTML = message;
        } else if (message instanceof Node) {
            bodyEl.appendChild(message);
        }
        callout.appendChild(bodyEl);
    }

    targetContainer.appendChild(callout);

    if (duration > 0) {
        const timer = setTimeout(() => {
            callout.dismiss();
        }, duration);
        callout.addEventListener('dismiss', () => clearTimeout(timer), { once: true });
    }

    return callout;
}

notify.notification = (msg, opts) => notify(msg, { ...opts, classification: 'notification' });
notify.info = (msg, opts) => notify(msg, { ...opts, classification: 'info' });
notify.error = (msg, opts) => notify(msg, { ...opts, classification: 'error' });
notify.warning = (msg, opts) => notify(msg, { ...opts, classification: 'warning' });
notify.success = (msg, opts) => notify(msg, { ...opts, classification: 'success' });
