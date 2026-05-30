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

## Roadmap

1. Core color utilities (done - skeleton)
2. ColorStrip component (first consumer: Tactiq labels)
3. Full ColorPicker (first consumer: Tactiq folder settings)
4. Eyedropper integration
5. Gradient mode
6. Recent/favorites persistence
