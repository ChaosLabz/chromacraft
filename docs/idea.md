# ChromaCraft - Color Picker Shared Library

**Status:** Skeleton
**CRN:** `crn:chaoslabz:shared-libs:global:default:lib/chromacraft`
**Repo:** https://github.com/ChaosLabz/chromacraft
**Registered:** CoreIQ shared-libs registry

## Vision

A fully stylizable, modern color picker component library that serves all ChaosLabz products. Two primary modes with a shared core.

## Modes

### 1. Full Color Picker

Complete color selection experience:
- HSL canvas (saturation/lightness 2D plane)
- Hue slider (rainbow bar)
- Alpha/opacity slider
- Hex/RGB/HSL input fields
- Eyedropper tool (EyeDropper API)
- Gradient mode (two-color with stops)
- Recent colors (persisted per user)
- Favorite colors (pinned)
- Bold, modern, clean icon-based UI

### 2. Color Strip (Compact)

Adjustable range with named colors:
- Horizontal or vertical strip of swatches
- Named colors with tooltips
- Active state ring
- Configurable color sets per context
- Integration: right-click folder color, label color, category assignment

## Design Principles

- **Fully stylizable** - CSS custom properties for every visual token
- **Framework agnostic core** - pure TS color math, React wrapper separate
- **Icon-based** - Lucide icons, no text labels in compact mode
- **Accessible** - keyboard nav, ARIA roles, focus management
- **Themeable** - dark/light mode via CSS vars
- **Composable** - use full picker, strip, or individual sub-components

## Integration Points

| Product | Use Case |
|---|---|
| Tactiq | Folder colors, label colors, priority colors |
| PlanIQ | Task category colors, timeline colors |
| CoreIQ | Theme customization, brand colors |
| InboxIQ | Tag colors, sender colors |

## Architecture

```
chromacraft/
  src/
    core/       - Pure color math (hex, rgb, hsl, gradient)
    react/      - React components (ColorPicker, ColorStrip)
    styles/     - Base CSS with custom properties
  dist/         - Built output
```

## API Surface

```tsx
import { ColorPicker, ColorStrip } from '@chaoslabz/chromacraft'

// Full picker
<ColorPicker value="#3b82f6" onChange={setColor} enableDropper enableGradient showRecents />

// Compact strip (for menus, right-click, inline)
<ColorStrip value={folderColor} onChange={setFolderColor}
  colors={[{ name: 'Red', value: '#ef4444' }, ...]} />
```

## Dependencies (ChaosLabz Shared Libs)

| Library | Why |
|---|---|
| `@chaoslabz/tooltip` | Popover positioning for picker dropdown, swatch tooltips |
| `@chaoslabz/escape-stack` | Escape key closes picker without closing parent modal/menu |
| `@chaoslabz/context-menu` | ColorStrip integration in right-click menus |
| `@chaoslabz/dialog` | Full picker as modal/popover primitive |
| `@chaoslabz/ui-events` | Emit color-change events for cross-component sync |
| `@chaoslabz/shortcut-hints` | Alt-overlay for picker keyboard shortcuts |
| `@chaoslabz/beacon-ts` | Observability - track picker usage, popular colors |

## Roadmap

### M1 - Core + ColorStrip (v0.1.0)
- [x] Core color utilities (hex/rgb/hsl, gradient)
- [ ] ColorStrip component (named swatches, active ring)
- [ ] Integration: Tactiq label color picker
- [ ] Depends: `@chaoslabz/tooltip` (swatch names)

### M2 - Full Picker (v0.2.0)
- [ ] HSL canvas (2D saturation/lightness)
- [ ] Hue slider (rainbow bar)
- [ ] Hex/RGB/HSL input fields
- [ ] Depends: `@chaoslabz/dialog` (popover mode), `@chaoslabz/escape-stack`

### M3 - Advanced Features (v0.3.0)
- [ ] Eyedropper tool (EyeDropper API)
- [ ] Recent colors (localStorage persistence)
- [ ] Favorite colors (pin/unpin)
- [ ] Depends: `@chaoslabz/beacon-ts` (usage tracking)

### M4 - Gradient + Integration (v0.4.0)
- [ ] Gradient mode (two-color with stops)
- [ ] Alpha/opacity slider
- [ ] Context menu integration (right-click folder color)
- [ ] Depends: `@chaoslabz/context-menu`, `@chaoslabz/ui-events`

### M5 - Polish (v1.0.0)
- [ ] Full keyboard navigation
- [ ] WCAG AA contrast checker built-in
- [ ] Shortcut hints overlay
- [ ] Depends: `@chaoslabz/shortcut-hints`
