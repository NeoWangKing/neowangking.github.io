// PostToc.tsx
import { pageScrollLocationAtom } from '@/store/scrollInfo'
import type { MarkdownHeading } from 'astro'
import clsx from 'clsx'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'

/**
 * 获取当前视口内可见的所有标题，并找出其中最靠近视口顶部的一个（主活动项）
 */
function useActiveItems() {
  const [activeItems, setActiveItems] = useState<Set<string>>(new Set())
  const [primaryItem, setPrimaryItem] = useState<string>('')
  const scrollY = useAtomValue(pageScrollLocationAtom)

  useEffect(() => {
    const $article = document.querySelector('#markdown-wrapper')
    if (!$article) return

    const $headings = Array.from($article.querySelectorAll('h1,h2,h3,h4,h5,h6'))
    const visibleSlugs = new Set<string>()
    let primarySlug = ''
    let minDistance = Infinity
    const viewportHeight = window.innerHeight

    $headings.forEach(($heading) => {
      const rect = $heading.getBoundingClientRect()
      // 判断是否与视口相交（可见）
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const slug = $heading.id
        visibleSlugs.add(slug)

        // 计算该标题顶部距离视口顶部的绝对距离
        const distanceToTop = Math.abs(rect.top)
        if (distanceToTop < minDistance) {
          minDistance = distanceToTop
          primarySlug = slug
        }
      }
    })

    setActiveItems(visibleSlugs)
    setPrimaryItem(primarySlug)
  }, [scrollY])

  return { activeItems, primaryItem }
}

export function PostToc({ headings }: { headings: MarkdownHeading[] }) {
  const { activeItems, primaryItem } = useActiveItems()

  return (
    <ul
      className="relative overflow-y-auto space-y-2 group text-xs"
      style={{
        maxHeight: 'min(380px, calc(100vh - 250px))',
        scrollbarWidth: 'none',
      }}
    >
      {headings.map((item) => (
        <TocItem
          key={item.slug}
          slug={item.slug}
          text={item.text}
          depth={item.depth}
          isActive={activeItems.has(item.slug)}
          isPrimary={item.slug === primaryItem}  // 新增
        />
      ))}
    </ul>
  )
}

export function TocItem({
  slug,
  text,
  depth,
  isActive,
  isPrimary,
}: {
  slug: string
  text: string
  depth: number
  isActive: boolean
  isPrimary: boolean
}) {
  const barWidth = 5 + 10 * (depth - 2)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById(slug)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      history.pushState(null, '', '#' + slug)
    }
  }

  return (
    <li className="relative">
      {/* 左侧示意条 */}
      <span
        className={clsx(
          'absolute left-0 top-2 rounded-full transition-all duration-300',
          isPrimary
            ? 'bg-accent h-1.5'            // 主活动项：更高更粗
            : isActive
            ? 'bg-accent h-1'
            : 'bg-zinc-300 dark:bg-zinc-700 h-1',
        )}
        style={{ width: `${barWidth}px` }} // 主活动项宽度稍宽
      />
      {/* 链接文本 */}
      <a
        className={clsx(
          'inline-block transition-all duration-300',
          isPrimary
            ? 'opacity-100 text-accent font-bold text-base' // 主活动项：加粗、稍大
            : isActive
            ? 'opacity-100 text-accent/75 text-sm'
            : 'opacity-60 group-hover:opacity-100 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
        )}
        style={{ paddingLeft: `${barWidth + 8}px` }}
        href={`#${slug}`}
        onClick={handleClick}
      >
        <span>{text}</span>
      </a>
    </li>
  )
}
