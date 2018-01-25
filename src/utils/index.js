export const cleanHSL = (h, s, l) => {
  const cleanS = s > 100 ? 100 : s < 0 ? 0 : s
  const cleanL = l > 100 ? 100 : l < 0 ? 0 : l
  return hslString(h, cleanS, cleanL)
}

export const hslString = (h, s, l) => `hsl(${h}, ${s}%, ${l}%)`
