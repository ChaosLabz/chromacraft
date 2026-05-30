/**
 * Compact color strip component.
 *
 * Renders a row of named color swatches for quick selection.
 * Use for folder colors, label colors, category assignment.
 * Reconfigurable: horizontal/vertical, custom color sets.
 */

import type { ColorStripProps } from './types'

const DEFAULT_COLORS = [
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Purple', value: '#a855f7' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Slate', value: '#64748b' },
]

export function ColorStrip({ value, onChange, colors = DEFAULT_COLORS, orientation = 'horizontal', className }: ColorStripProps) {
  return (
    <div className={`chromacraft-strip chromacraft-strip--${orientation} ${className || ''}`} data-testid="chromacraft-strip" role="radiogroup" aria-label="Color selection">
      {colors.map(c => (
        <button key={c.value} onClick={() => onChange?.(c.value)} title={c.name}
          className={`chromacraft-swatch ${value === c.value ? 'chromacraft-swatch--active' : ''}`}
          style={{ backgroundColor: c.value }} role="radio" aria-checked={value === c.value} aria-label={c.name} />
      ))}
    </div>
  )
}
