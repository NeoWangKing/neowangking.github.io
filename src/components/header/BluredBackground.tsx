import { AnimatePresence, motion } from 'framer-motion'

export function BluredBackground() {
  // const opacity = useHeaderBgOpacity()

  return (
    <AnimatePresence>
      <motion.div
        className="absolute inset-0 -z-1 border-b border-primary bg-white/70 dark:bg-zinc-800/70 backdrop-saturate-200 backdrop-blur-md transform-gpu"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
      ></motion.div>
    </AnimatePresence>
  )
}
