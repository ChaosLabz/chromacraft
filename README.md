# ChromaCraft

A fully stylizable color picker component library for React.

## Features

- Full color picker (canvas, sliders, dropper, gradient, recents)
- Compact color strip (named swatches for quick selection)
- Framework-agnostic core (pure color math)
- Fully themeable via CSS custom properties
- Accessible (keyboard nav, ARIA)
- Dark/light mode support

## Install

```bash
npm install @chaoslabz/chromacraft
```

## Usage

```tsx
import { ColorPicker, ColorStrip } from '@chaoslabz/chromacraft'

// Full picker
<ColorPicker value="#3b82f6" onChange={setColor} enableDropper />

// Compact strip
<ColorStrip value={color} onChange={setColor} />
```

## Status

Skeleton - core utilities implemented, React components stubbed.

## License

MIT - ChaosLabz 2026
