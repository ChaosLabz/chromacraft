/**
 * Full color picker component.
 *
 * Features: hue/saturation canvas, lightness slider, hex input,
 * eyedropper tool, gradient mode, recent/favorite colors.
 * Fully stylizable via CSS variables and className prop.
 */

import type { ColorPickerProps } from './types'

export function ColorPicker({ value = '#3b82f6', onChange, enableDropper = true, enableGradient = false, showRecents = true, maxRecents = 8, className }: ColorPickerProps) {
  // TODO: Implement full picker UI
  return (
    <div className={`chromacraft-picker ${className || ''}`} data-testid="chromacraft-picker">
      <div className="chromacraft-canvas" />
      <div className="chromacraft-controls">
        <input type="text" value={value} onChange={e => onChange?.(e.target.value)} className="chromacraft-hex-input" />
      </div>
      {enableDropper && <button className="chromacraft-dropper" aria-label="Pick color from screen">dropper</button>}
      {showRecents && <div className="chromacraft-recents" data-max={maxRecents} />}
      {enableGradient && <div className="chromacraft-gradient" />}
    </div>
  )
}
