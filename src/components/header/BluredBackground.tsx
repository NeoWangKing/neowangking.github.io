import { useHeaderBgOpacity } from './hooks'

export function BluredBackground() {
  const opacity = useHeaderBgOpacity()

  return (
    <div
      className="absolute inset-0 -z-1 border-b border-primary bg-white/70 dark:bg-zinc-800/70 backdrop-saturate-200 backdrop-blur-lg transform-gpu"
      style={{
        opacity: opacity,
        transitionDuration: '0.3s',
      }}
    ></div>
  )
}
