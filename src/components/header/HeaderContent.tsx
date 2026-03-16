import { useState } from 'react'
import { menus } from '@/config.json'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import {
  usePathName,
  useShouldAccessibleMenuShow,
  useShouldHeaderMenuBgShow,
  useShouldHeaderMetaShow,
} from './hooks'
import { RootPortal } from '@/components/RootPortal'

export function HeaderContent() {
  return (
    <>
      <AnimatedMenu />
      <AccessibleMenu />
    </>
  )
}

function AnimatedMenu() {
  const shouldBgShow = useShouldHeaderMenuBgShow()
  const shouldHeaderMetaShow = useShouldHeaderMetaShow()

  return (
    <AnimatePresence>
      {!shouldHeaderMetaShow && (
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <HeaderMenu isBgShow={shouldBgShow} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function AccessibleMenu() {
  const shouldShow = useShouldAccessibleMenuShow()

  return (
    <RootPortal>
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            className="fixed z-10 top-12 inset-x-0 flex justify-center pointer-events-none"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            <HeaderMenu isBgShow />
          </motion.div>
        )}
      </AnimatePresence>
    </RootPortal>
  )
}

function HeaderMenu({ isBgShow }: { isBgShow: boolean }) {
  const pathName = usePathName()
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [radius, setRadius] = useState(0)

  const background = `radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, rgb(var(--color-accent) / 0.2) 0%, transparent 50%)`

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    const bounds = currentTarget.getBoundingClientRect()
    setMouseX(clientX - bounds.left)
    setMouseY(clientY - bounds.top)
    setRadius(Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2.5)
  }

  return (
    <nav
      className={clsx('relative rounded-full group pointer-events-auto', {
        'shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur':
          isBgShow,
      })}
      onMouseMove={handleMouseMove}
    >
      
      <div className="text-sm px-0 flex">
        <div
          className="absolute -z-1 -inset-px rounded-full opacity-0 group-hover:opacity-100"
          style={{ background }}
          aria-hidden
        ></div>
        {menus.map((menu) => (
          <HeaderMenuItem
            key={menu.name}
            href={menu.link}
            title={menu.name}
            icon={menu.icon}
            isActive={pathName === menu.link}
          />
        ))}
      </div>
    </nav>
  )
}

function HeaderMenuItem({
  href,
  isActive,
  title,
  icon,
}: {
  href: string
  isActive: boolean
  title: string
  icon: string
}) {
  return (
    <a
      className={clsx('relative block px-4 py-1.5 rounded-full transition durantion-300', isActive ? 'text-accent font-bold bg-accent/15 border border-accent/40' : 'hover:text-accent')}
      href={href}
    >
      <div className="flex space-x-2">
        {isActive && (
          <motion.i
            className={clsx('iconfont', icon)}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          ></motion.i>
        )}
        <span>{title}</span>
      </div>
    </a>
  )
}
