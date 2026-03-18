import { atom } from 'jotai'

// 使用 Record 记录每个分类的展开状态，key 可以用分类的 slug
export const showSubCategoryAtom = atom<Record<string, boolean>>({})
