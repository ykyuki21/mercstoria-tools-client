export type Element = 'fire' | 'water' | 'wind' | 'light' | 'dark'
export type Unit = {
  id: number
  name: string
  fullName: string
  rarity: number
  element: Element
  weapon: number
}
