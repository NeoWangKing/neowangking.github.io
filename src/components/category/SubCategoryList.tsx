// components/category/SubCategoryList.tsx
import React from 'react'

// 定义二级分类的数据结构（需与 getSubCategories 返回值一致）
interface SubCategory {
  name: string[]      // 假设 [一级分类名, 二级分类名]
  slug: string[]      // 分类路径片段数组
  count: number       // 文章数量
}

interface Props {
  subCategories: SubCategory[]
}

const SubCategoryList: React.FC<Props> = ({ subCategories }) => {
  return (
    <>
      {subCategories.map((sub, index) => (
        <a
          key={sub.slug.join('/')}
          className="relative block"
          href={`/categories/${sub.slug.join('/')}`}
        >
          {index !== 0 && <hr className="mx-auto w-[90%] border-accent/20" />}
          <div className="px-2.5 py-2 text-sm flex gap-1 select-none rounded-lg transition hover:bg-accent/10">
            <i className="shrink-0 iconfont icon-menu" />
            <span className="grow">{sub.name[1]}</span>
            <span className="shrink-0">{sub.count}</span>
          </div>
        </a>
      ))}
    </>
  )
}

export default SubCategoryList