import { menus } from '@/config.json'
import { clsx } from 'clsx'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import {
  usePathName,
  useShouldHeaderMenuBgShow,
  useShouldHeaderMetaShow,
} from './hooks'

export function HeaderContent() {
  return <AnimatedMenu />
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

// 滑块指示器和鼠标悬停蒙版
function HeaderMenu({ isBgShow }: { isBgShow: boolean }) {
  const pathName = usePathName()
  const navRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // 滑块动画值
  const sliderX = useMotionValue(0)
  const sliderWidth = useMotionValue(0)
  // 调整弹簧参数：降低刚度(stiffness)使速度变慢，增大阻尼(damping)减少弹跳
  // 原参数: { stiffness: 300, damping: 30 }
  // 新参数: { stiffness: 180, damping: 40 }  —— 可自行调节
  const springSliderX = useSpring(sliderX, { stiffness: 180, damping: 40 })
  const springSliderWidth = useSpring(sliderWidth, { stiffness: 180, damping: 40 })

  // 鼠标跟随蒙版相关（保持不变）
  const [showFollower, setShowFollower] = useState(false)
  const followerX = useMotionValue(0)
  const followerY = useMotionValue(0)
  const followerWidth = useMotionValue(48)
  const followerHeight = useMotionValue(32)
  const springFollowerX = useSpring(followerX, { stiffness: 200, damping: 25 })
  const springFollowerY = useSpring(followerY, { stiffness: 200, damping: 25 })
  const springFollowerWidth = useSpring(followerWidth, { stiffness: 200, damping: 25 })
  const springFollowerHeight = useSpring(followerHeight, { stiffness: 200, damping: 25 })

  // 监听路径变化更新激活索引（用于页面切换后保持高亮）
  useEffect(() => {
    const index = menus.findIndex(menu => menu.link === pathName)
    setActiveIndex(index !== -1 ? index : null)
  }, [pathName])

  // 当激活索引变化时更新滑块位置（用于浏览器前进/后退或直接URL访问）
  useEffect(() => {
    if (activeIndex !== null && itemRefs.current[activeIndex] && navRef.current) {
      const element = itemRefs.current[activeIndex]!
      const navRect = navRef.current.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()
      sliderX.set(elementRect.left - navRect.left)
      sliderWidth.set(elementRect.width)
    }
  }, [activeIndex, sliderX, sliderWidth])

  // 新增：处理菜单项点击，立即更新滑块位置
  const handleItemClick = (index: number) => {
    if (itemRefs.current[index] && navRef.current) {
      const element = itemRefs.current[index]!
      const navRect = navRef.current.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()
      sliderX.set(elementRect.left - navRect.left)
      sliderWidth.set(elementRect.width)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    // ... 保持不变 ...
    if (!navRef.current || !showFollower) return
    const rect = navRef.current.getBoundingClientRect()
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top

    let minDist = Infinity
    let closestIndex = -1
    itemRefs.current.forEach((el, idx) => {
      if (el) {
        const elRect = el.getBoundingClientRect()
        const centerX = elRect.left + elRect.width / 2 - rect.left
        const centerY = elRect.top + elRect.height / 2 - rect.top
        const dist = Math.hypot(mouseXPos - centerX, mouseYPos - centerY)
        if (dist < minDist) {
          minDist = dist
          closestIndex = idx
        }
      }
    })

    if (closestIndex !== -1) {
      const el = itemRefs.current[closestIndex]!
      const elRect = el.getBoundingClientRect()
      const targetX = elRect.left + elRect.width / 2 - rect.left
      const targetY = elRect.top + elRect.height / 2 - rect.top
      followerX.set(targetX)
      followerY.set(targetY)
      followerWidth.set(elRect.width)
      followerHeight.set(elRect.height)
    }
  }

  return (
    <nav
      ref={navRef}
      className={clsx('relative rounded-full group pointer-events-auto', {
        'shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur': isBgShow,
      })}
      onMouseEnter={() => setShowFollower(true)}
      onMouseLeave={() => setShowFollower(false)}
      onMouseMove={handleMouseMove}
    >
      {/* 滑块指示器 */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="absolute inset-y-0 bg-accent/20 border border-accent/40 rounded-full pointer-events-none box-border"
            style={{
              x: springSliderX,
              width: springSliderWidth,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* 鼠标悬停跟随蒙版 */}
      <AnimatePresence>
        {showFollower && (
          <motion.div
            className="absolute bg-accent/10 rounded-full pointer-events-none"
            style={{
              x: springFollowerX,
              y: springFollowerY,
              width: springFollowerWidth,
              height: springFollowerHeight,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="text-sm px-0 flex relative">
        {menus.map((menu, index) => (
          <HeaderMenuItem
            key={menu.name}
            ref={(el) => (itemRefs.current[index] = el)}
            href={menu.link}
            title={menu.name}
            icon={menu.icon}
            isActive={pathName === menu.link}
            onClick={() => handleItemClick(index)}  // 传递点击回调
          />
        ))}
      </div>
    </nav>
  )
}

// 单个菜单项（接收 onClick 回调）
const HeaderMenuItem = React.forwardRef<
  HTMLAnchorElement,
  {
    href: string
    isActive: boolean
    title: string
    icon: string
    onClick?: () => void
  }
>(({ href, isActive, title, icon, onClick }, ref) => {
  return (
    <a
      ref={ref}
      className={clsx(
        'relative block px-4 py-1.5 rounded-full transition durantion-300',
        isActive
          ? 'text-accent font-bold'        // 仅保留文字高亮，移除背景和边框
          : 'hover:text-accent'
      )}
      href={href}
      data-astro-history="replace"
      onClick={onClick}
    >
      <div className="flex space-x-2">
        {isActive && (
          <motion.i
            className={clsx('iconfont', icon)}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          />
        )}
        <span>{title}</span>
      </div>
    </a>
  )
})