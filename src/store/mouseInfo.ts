import { atom } from 'jotai'

export type MouseLocation = { mouseX: number; mouseY: number }
export const mouseLocationAtom = atom<MouseLocation>({ mouseX: 0, mouseY: 0 })
