/**
 * ChromaCraft core - framework-agnostic color manipulation utilities.
 *
 * Provides HSL/RGB/Hex conversion, gradient generation, and color math.
 * No DOM or React dependencies - pure functions only.
 */

export interface RGBColor { r: number; g: number; b: number; a?: number }
export interface HSLColor { h: number; s: number; l: number; a?: number }

/** Convert hex string to RGB. Supports #RGB, #RRGGBB, #RRGGBBAA. */
export function hexToRgb(hex: string): RGBColor {
  const clean = hex.replace('#', '')
  const len = clean.length
  if (len === 3) {
    return { r: parseInt(clean[0] + clean[0], 16), g: parseInt(clean[1] + clean[1], 16), b: parseInt(clean[2] + clean[2], 16) }
  }
  return { r: parseInt(clean.slice(0, 2), 16), g: parseInt(clean.slice(2, 4), 16), b: parseInt(clean.slice(4, 6), 16), a: len === 8 ? parseInt(clean.slice(6, 8), 16) / 255 : undefined }
}

/** Convert RGB to hex string. */
export function rgbToHex({ r, g, b }: RGBColor): string {
  return `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`
}

/** Convert RGB to HSL. */
export function rgbToHsl({ r, g, b }: RGBColor): HSLColor {
  const rn = r / 255, gn = g / 255, bn = b / 255
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l }
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6
  else if (max === gn) h = ((bn - rn) / d + 2) / 6
  else h = ((rn - gn) / d + 4) / 6
  return { h: h * 360, s, l }
}

/** Convert HSL to RGB. */
export function hslToRgb({ h, s, l }: HSLColor): RGBColor {
  if (s === 0) { const v = Math.round(l * 255); return { r: v, g: v, b: v } }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1
    if (t < 1/6) return p + (q - p) * 6 * t
    if (t < 1/2) return q
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
    return p
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  const hn = h / 360
  return { r: Math.round(hue2rgb(p, q, hn + 1/3) * 255), g: Math.round(hue2rgb(p, q, hn) * 255), b: Math.round(hue2rgb(p, q, hn - 1/3) * 255) }
}

/** Generate a linear gradient between two colors with N stops. */
export function generateGradient(from: string, to: string, stops: number): string[] {
  const a = hexToRgb(from), b = hexToRgb(to)
  return Array.from({ length: stops }, (_, i) => {
    const t = i / (stops - 1)
    return rgbToHex({ r: Math.round(a.r + (b.r - a.r) * t), g: Math.round(a.g + (b.g - a.g) * t), b: Math.round(a.b + (b.b - a.b) * t) })
  })
}
