import { getCollection } from 'astro:content'
import { tags } from '@/config.json'

// 获取所有文章
async function getAllPosts() {
  const allPosts = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })

  return allPosts
}

// 获取所有文章，发布日期升序
async function getNewestPosts() {
  const allPosts = await getAllPosts()

  return allPosts.sort((a, b) => {
    return a.data.date.valueOf() - b.data.date.valueOf()
  })
}

// 获取所有文章，发布日期降序
export async function getOldestPosts() {
  const allPosts = await getAllPosts()

  return allPosts.sort((a, b) => {
    return b.data.date.valueOf() - a.data.date.valueOf()
  })
}

// 获取所有文章，置顶优先，发布日期降序
export async function getSortedPosts() {
  const allPosts = await getAllPosts()

  return allPosts.sort((a, b) => {
    if (a.data.sticky !== b.data.sticky) {
      return b.data.sticky - a.data.sticky
    } else {
      return b.data.date.valueOf() - a.data.date.valueOf()
    }
  })
}

// 获取所有文章的字数
export async function getAllPostsWordCount() {
  const allPosts = await getAllPosts()

  const promises = allPosts.map((post) => {
    return post.render()
  })

  const res = await Promise.all(promises)

  const wordCount = res.reduce((count, cur) => {
    return count + cur.remarkPluginFrontmatter.words
  }, 0)

  return wordCount
}

// 转换为 URL 安全的 slug，删除点，空格转为短横线，大写转为小写
export function slugify(text: string) {
  return text.replace(/\./g, '').replace(/\s/g, '-').toLowerCase()
}

// 获取所有一级分类
export async function getAllCategories() {
  const newestPosts = await getNewestPosts()

  const allCategories = newestPosts.reduce<
    {
      slug: string
      name: string
      count: number
    }[]
  >((acc, cur) => {
    const slug = slugify(cur.data.category)
    const index = acc.findIndex((category) => category.slug === slug)
    if (index === -1) {
      acc.push({
        slug: slug,
        name: cur.data.category,
        count: 1,
      })
    } else {
      acc[index].count += 1
    }
    return acc
  }, [])

  return allCategories
}

// 获取所有二级分类
export async function getAllSubCategories() {
  const newestPosts = await getNewestPosts()

  const allSubCategories = newestPosts.reduce<
    {
      slug: string
      supslug: string
      name: string
      supname: string
      count: number
    }[]
  >((acc, cur) => {
    const supslug = slugify(cur.data.category)
    const slug = slugify(cur.data.subcategory)
    const index = acc.findIndex(
      (subcategory) => subcategory.slug === slug && subcategory.supslug === supslug,
    )
    if (index === -1) {
      acc.push({
        slug: slug,
        supslug: supslug,
        name: cur.data.subcategory,
        supname: cur.data.category,
        count: 1,
      })
    } else {
      acc[index].count += 1
    }
    return acc
  }, [])

  return allSubCategories
}

// 获取所有标签
export async function getAllTags() {
  const newestPosts = await getNewestPosts()

  const allTags = newestPosts.reduce<
    {
      slug: string
      name: string
      count: number // 有多少篇文章含有此标签
    }[]
  >((acc, cur) => {
    cur.data.tags.forEach((tag) => {
      const slug = slugify(tag)
      // 寻找 acc 中是否已经存在这个 tag，如果不存在则会返回 -1
      const index = acc.findIndex((tag) => tag.slug === slug)
      if (index === -1) {
        acc.push({
          slug,
          name: tag,
          count: 1,
        })
      } else {
        acc[index].count += 1
      }
    })
    return acc
  }, [])

  return allTags
}

// 获取热门标签
export async function getHotTags(len = tags.hot) {
  const allTags = await getAllTags()

  return allTags
    .sort((a, b) => {
      return b.count - a.count
    })
    .slice(0, len)
}
