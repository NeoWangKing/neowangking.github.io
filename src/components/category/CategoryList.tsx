import { useAtom } from 'jotai'
import { showSubCategoryAtom } from '@/store/showSubCategory'
import SubCategoryList from './SubCategoryList'

interface Category {
  name: string[]
  slug: string[]
  count: number
  subCategories: any[] // 可根据实际情况细化类型
}

interface Props {
  categories: Category[]
}

export function CategoryList({ categories }: Props) {
  const [openMap, setOpenMap] = useAtom(showSubCategoryAtom)

  const toggleCategory = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();      // 阻止任何默认行为（比如某些浏览器下按钮触发的行为）
    e.stopPropagation();     // 阻止事件冒泡到父链接
    setOpenMap(prev => ({ ...prev, [slug]: !prev[slug] }));
  };

  if (categories.length === 0) {
    return <div className="text-center text-sm">作者懒得分类🤪</div>
  }

  return (
    <div className="space-y-2.5">
      {categories.map((category) => {
        const slug = category.slug[0]
        const isOpen = openMap[slug] || false

        return (
          <div key={slug} className="space-y-2.5">
            {/* 整行作为链接，背景统一 */}
            <a
              href={`/categories/${slug}`}
              className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-accent/10 transition hover:bg-accent/20 no-underline"
            >
              {/* 左侧分类信息 */}
              <span className="flex items-center gap-1 text-sm">
                <span className="text-left">{category.name[0]}</span>
                <span className="shrink-0">({category.count})</span>
              </span>

              {/* 右侧箭头按钮 */}
              <button
                onClick={(e) => toggleCategory(slug, e)}
                className="shrink-0 px-1 rounded hover:bg-accent/30 focus:outline-none"
                aria-label={isOpen ? '收起二级分类' : '展开二级分类'}
              >
                <i className={`iconfont ${isOpen ? 'icon-left' : 'icon-down'}`} />
              </button>
            </a>

            {/* 二级分类列表 */}
            {isOpen && (
              <div className="ml-4 rounded-lg border border-primary">
                <SubCategoryList subCategories={category.subCategories} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}