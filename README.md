# Fahodzi UI

A lightweight UI library providing modular SCSS styles and custom Web Components for modern web interfaces.

## Installation

### Via npm

```bash
npm install @ekowabaka/ui
```

### Via Composer

```bash
composer require ekowabaka/ui
```

---

## Quick Start

### 1. Direct Script / Stylesheet

Include the compiled CSS and JS bundles from `dist/`:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="dist/fzui.css" />
  <script src="dist/fzui.js"></script>
  <script>
    fzui.initialize();
  </script>
</head>
<body>
  <fz-app-frame>
    <fz-sidebar slot="sidebar">
      <fz-sidebar-item icon="dashboard" active>Dashboard</fz-sidebar-item>
      <fz-sidebar-item icon="settings">Settings</fz-sidebar-item>
    </fz-sidebar>
    <main>
      <h1>Welcome</h1>
      <button class="button primary">Click Me</button>
    </main>
  </fz-app-frame>
</body>
</html>
```

### 2. ES Module Import

```javascript
import '@ekowabaka/ui/css';
import { initialize } from '@ekowabaka/ui';

// Registers custom elements: fz-card, fz-dropdown, fz-menu, fz-app-frame, fz-avatar, fz-sidebar, etc.
initialize();
```

---

## Web Components

Calling `initialize()` registers the following custom elements:

| Component | Element Tag | Description |
|-----------|-------------|-------------|
| **App Frame** | `<fz-app-frame>` | Full application shell layout with responsive sidebar support |
| **Sidebar** | `<fz-sidebar>` | Collapsible navigation sidebar |
| **Sidebar Item** | `<fz-sidebar-item>` | Sidebar navigation link / item with icon support |
| **Card** | `<fz-card>` | Structured content card with header, body, and actions |
| **Callout** | `<fz-callout>` | Callout alert and notification banner with classifications, elevation layers, and corner styles |
| **Dropdown** | `<fz-dropdown>` | Interactive popup / menu trigger container |
| **Menu** | `<fz-menu>` | Context and action menu |
| **Menu Item** | `<fz-menu-item>` | Action item inside `<fz-menu>` |
| **Menu Separator** | `<fz-menu-separator>` | Visual divider within `<fz-menu>` |
| **Avatar** | `<fz-avatar>` | User avatar with status indicator and sizing |

---

## SCSS Styles

Fahodzi UI includes global CSS/SCSS utilities for:

- **Buttons & Button Groups** (`.button`, `.button.primary`, `.button-group`, etc.)
- **Forms** (inputs, selects, checkboxes, toggles, floating labels)
- **Tables** (styled responsive tables)
- **Modals & Overlays**
- **Tabs & Pills**
- **Colors & Modifiers** (theming variables and utility classes)

To import individual SCSS files:

```scss
@import "@ekowabaka/ui/sass/fzui";
```

---

## Development

```bash
# Build production bundles (dist/fzui.js, dist/fzui.min.js, dist/fzui.css, dist/fzui.min.css)
npm run build

# Build demo pages (demo/*.html)
npm run build:examples

# Build both bundles and demo
npm run build:all

# Watch mode during development
npm run watch
npm run watch:examples
```

---

## License

[MIT](LICENSE) © James Ekow Abaka Ainooson

