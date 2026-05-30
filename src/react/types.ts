/** Shared types for ChromaCraft React components. */

export interface ColorPickerProps {
  /** Current color value (hex). */
  value?: string
  /** Callback when color changes. */
  onChange?: (color: string) => void
  /** Enable eyedropper tool (requires EyeDropper API). */
  enableDropper?: boolean
  /** Enable gradient mode. */
  enableGradient?: boolean
  /** Show recent/favorite colors. */
  showRecents?: boolean
  /** Max recent colors to display. */
  maxRecents?: number
  /** Custom CSS class for the container. */
  className?: string
  /** Controlled open state for popover mode. */
  open?: boolean
}

export interface ColorStripProps {
  /** Current color value (hex). */
  value?: string
  /** Callback when color changes. */
  onChange?: (color: string) => void
  /** Named color presets. */
  colors?: Array<{ name: string; value: string }>
  /** Show as horizontal strip (default) or vertical. */
  orientation?: 'horizontal' | 'vertical'
  /** Custom CSS class. */
  className?: string
}
