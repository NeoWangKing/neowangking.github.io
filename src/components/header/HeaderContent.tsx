import { menus } from '@/config.json'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import {
  usePathName,
  useShouldHeaderMenuBgShow,
  useShouldHeaderMetaShow,
} from './hooks'

export function HeaderContent() {
  return (
    <>
      <AnimatedMenu />
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
          exit={{ y: -20, opacity: 0 }}
        >
          <HeaderMenu isBgShow={shouldBgShow} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function HeaderMenu({ isBgShow }: { isBgShow: boolean }) {
  const pathName = usePathName()

  return (
    <nav
      className={clsx('relative rounded-full group pointer-events-auto', {
        'shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur':
          isBgShow,
      })}
    >
      <div className="text-sm px-0 flex">
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
