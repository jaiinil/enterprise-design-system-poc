# 🎨 Enterprise Design System

A scalable, accessible, and framework-agnostic design system built with **Vanilla JavaScript**, **TypeScript**, **SCSS**, and **Storybook** — following **Atomic Design** principles and **BEM** methodology.

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| Vanilla JS + TypeScript | Component logic |
| SCSS + BEM | Styling methodology |
| Storybook | Component documentation & development |
| Atomic Design | Component architecture pattern |
| Vite | Build tool |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

Check your versions:

```bash
node --version
npm --version
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/enterprise-design-system.git

# 2. Go into the project directory
cd enterprise-design-system

# 3. Install all dependencies
npm install
```

### Run Storybook

```bash
npm run storybook
```

Storybook will open automatically at:

```
http://localhost:6006
```

---

## 📁 Folder Structure

```
enterprise-design-system/
│
├── .storybook/
│   ├── main.ts               # Storybook configuration
│   └── preview.ts            # Global styles and decorators
│
├── public/
│   └── assets/               # Static assets
│
├── src/
│   ├── assets/
│   │   ├── fonts/            # Font files (.woff2)
│   │   ├── icons/            # SVG icons
│   │   └── images/           # Images and logos
│   │
│   ├── tokens/               # Design tokens
│   │   ├── _colors.scss      # Color tokens
│   │   ├── _typography.scss  # Typography tokens
│   │   ├── _spacing.scss     # Spacing tokens
│   │   ├── _borders.scss     # Border tokens
│   │   ├── _shadows.scss     # Shadow tokens
│   │   └── index.scss        # Token entry point
│   │
│   ├── styles/               # Global styles
│   │   ├── _reset.scss       # CSS reset
│   │   ├── _typography.scss  # Global typography
│   │   └── global.scss       # Global entry point
│   │
│   ├── components/
│   │   ├── atoms/            # Smallest building blocks
│   │   │   ├── Button/
│   │   │   │   ├── Button.ts
│   │   │   │   ├── Button.scss
│   │   │   │   ├── Button.stories.ts
│   │   │   │   ├── Button.types.ts
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   │   ├── Input.ts
│   │   │   │   ├── Input.scss
│   │   │   │   ├── Input.stories.ts
│   │   │   │   ├── Input.types.ts
│   │   │   │   └── index.ts
│   │   │   ├── Label/
│   │   │   ├── Icon/
│   │   │   └── Badge/
│   │   │
│   │   ├── molecules/        # Combinations of atoms
│   │   │   ├── FormField/
│   │   │   ├── Card/
│   │   │   └── Notification/
│   │   │
│   │   ├── organisms/        # Complex components
│   │   │   ├── Header/
│   │   │   └── Form/
│   │   │
│   │   └── templates/        # Page layouts
│   │       └── AuthTemplate/
│   │
│   ├── utils/
│   │   ├── bem.ts            # BEM class name helper
│   │   ├── a11y.ts           # Accessibility helpers
│   │   └── index.ts          # Utils entry point
│   │
│   └── types/
│       ├── components.ts     # Shared base types
│       ├── declarations.d.ts # SCSS module declarations
│       └── index.ts          # Types entry point
│
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

---

## 🧱 Component Architecture

This design system follows **Atomic Design** principles:

| Level | Description | Examples |
|-------|-------------|---------|
| **Atoms** | Smallest building blocks | Button, Input, Label, Icon, Badge |
| **Molecules** | Combinations of atoms | FormField, Card, Notification |
| **Organisms** | Complex UI sections | Header, Form |
| **Templates** | Page layouts | AuthTemplate |

---

## 🎨 Styling — BEM Methodology

All components use **BEM (Block Element Modifier)** naming:

```scss
/* Block */
.button { }

/* Element */
.button__icon { }
.button__label { }

/* Modifier */
.button--primary { }
.button--disabled { }
.button--lg { }
```

---

## 🪙 Design Tokens

Tokens follow a **3-tier architecture**:

```
Primitive   →  Raw values
--color-blue-500: #3b82f6

Semantic    →  Purpose-based
--color-brand-primary: var(--color-blue-500)

Component   →  Component-specific
--button-bg: var(--color-brand-primary)
```

---

## ♿ Accessibility

All components are built with **WCAG 2.1 AA** compliance:

- ✅ Proper ARIA attributes (`aria-label`, `aria-invalid`, `aria-required`)
- ✅ Keyboard navigation support
- ✅ Focus ring visibility
- ✅ Screen reader friendly markup
- ✅ Color contrast compliance

---

## 🧩 Components Status

### Atoms

| Component | Status | Variants |
|-----------|--------|---------|
| Button | ✅ Done | primary, secondary, ghost |
| Input | ✅ Done | text, email, password, number |
| Label | ⏳ In Progress | - |
| Icon | ⏳ In Progress | - |
| Badge | ⏳ In Progress | - |

### Molecules

| Component | Status | Description |
|-----------|--------|-------------|
| FormField | ⏳ In Progress | Label + Input + Error |
| Card | ⏳ In Progress | - |
| Notification | ⏳ In Progress | - |

### Organisms

| Component | Status | Description |
|-----------|--------|-------------|
| Header | ⏳ In Progress | Logo + Nav + SearchBar |
| Form | ⏳ In Progress | Multiple FormFields |

---

## 🤝 Contributing

```bash
# 1. Create a new branch
git checkout -b feat/component-name

# 2. Make your changes

# 3. Commit with conventional commits
git commit -m "feat: add Badge component"

# 4. Push your branch
git push origin feat/component-name
```

### Commit Convention

| Prefix | Purpose |
|--------|---------|
| `feat:` | New component or feature |
| `fix:` | Bug fix |
| `docs:` | Documentation update |
| `style:` | Styling changes |
| `refactor:` | Code refactor |
| `chore:` | Build or config changes |

---

## 📄 License

MIT © 2025 Enterprise Design System