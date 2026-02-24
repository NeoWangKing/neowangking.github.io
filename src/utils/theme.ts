// 函数：更改网页主题为 theme（theme只能是dark或者light）
export function changePageTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme)
}

// 函数：获取系统当前主题
export function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const themeKey = 'gyoza-theme'

// 函数：获取本地当前主题，如果没有，则默认跟随系统
export function getLocalTheme() {
  const local = localStorage.getItem(themeKey)
  if (local === 'dark' || local === 'light') {
    return local
  } else {
    setLocalTheme('system')
    return 'system'
  }
}

// 函数：设置本地主题
export function setLocalTheme(theme: string) {
  localStorage.setItem(themeKey, theme)
}
