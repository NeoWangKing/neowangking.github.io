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

// 获取某一个分类下的所有文章，置顶优先，发布日期降序
export async function getFilteredSortedPost(category: string[]) {
  const filteredSortedPosts = await getSortedPosts().then((posts) => {
    return posts.filter((post) => listInclude(post.data.category, category))
  })
  return filteredSortedPosts
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

// 判断两个列表是否完全相同
export function listCompare(list1: string[], list2: string[]) {
  if (list1.length !== list2.length) {
    return false
  } else {
    const len = list1.length
    var i = 0
    while (i < len && list1[i] === list2[i]) {
      i++
    }
    return i === len
  }
}

// 判断列表1是否包含有列表2
export function listInclude(list1: string[], list2: string[]) {
  if (list1.length < list2.length) {
    return false
  } else {
    const len = list1.length
    var i = 0
    while (i < len && list1[i] !== list2[i]) {
      i++
    }
    var j = 0
    while (j < list2.length && i < len && list1[i] === list2[j]) {
      i++
      j++
    }
    return j === list2.length && i <= len
  }
}

// 获取所有分类
export async function getAllCategories() {
  const newestPosts = await getNewestPosts()

  const allCategories = newestPosts.reduce<
    {
      slug: string[]
      name: string[]
      count: number
    }[]
  >((acc, cur) => {
    if (cur.data.category.length === 0) {
      cur.data.category = ['未分类', '未分子类']
    }
    if (cur.data.category.length === 1) {
      cur.data.category[1] = '未分子类'
    }
    const slug = [slugify(cur.data.category[0])]
    const index = acc.findIndex((category) => listCompare(category.slug, slug))
    if (index === -1) {
      acc.push({
        slug: slug,
        name: [cur.data.category[0]],
        count: 1,
      })
      // console.log(`[INFO] found a new category: slug: ${slug}`)
    } else {
      acc[index].count += 1
      // console.log(`[INFO] add a post to category: slug: ${slug}`)
    }
    const subslug = [slugify(cur.data.category[0]), slugify(cur.data.category[1])]
    const subindex = acc.findIndex((category) => listCompare(category.slug, subslug))
    if (subindex === -1) {
      acc.push({
        slug: subslug,
        name: cur.data.category,
        count: 1,
      })
      // console.log(`[INFO] found a new sub-category: slug: ${subslug}`)
    } else {
      acc[subindex].count += 1
      // console.log(`[INFO] add a post to sub-category: slug: ${subslug}`)
    }
    return acc
  }, [])
  // console.log(allCategories)
  return allCategories
}

// 获取所有一级分类
export async function getCategories() {
  const newestPosts = await getNewestPosts()

  const Categories = newestPosts.reduce<
    {
      slug: string[]
      name: string[]
      count: number
    }[]
  >((acc, cur) => {
    if (cur.data.category.length === 0) {
      cur.data.category = ['未分类', '未分子类']
    }
    if (cur.data.category.length === 1) {
      cur.data.category[1] = '未分子类'
    }
    const slug = [slugify(cur.data.category[0])]
    const index = acc.findIndex((category) => listCompare(category.slug, slug))
    if (index === -1) {
      acc.push({
        slug: slug,
        name: [cur.data.category[0]],
        count: 1,
      })
      // console.log(`[INFO] found a new category: slug: ${slug}`)
    } else {
      acc[index].count += 1
      // console.log(`[INFO] add a post to category: slug: ${slug}`)
    }
    return acc
  }, [])
  // console.log(allCategories)
  return Categories
}

// 获取某一个一级分类下的所有二级分类

export async function getSubCategories(supName: string) {
  const newestPosts = await getNewestPosts()

  const subCategories = newestPosts.reduce<
    {
      slug: string[]
      name: string[]
      count: number
    }[]
  >((acc, cur) => {
    if (cur.data.category.length === 0) {
      cur.data.category = ['未分类', '未分子类']
    }
    if (cur.data.category.length === 1) {
      cur.data.category[1] = '未分子类'
    }
    if (cur.data.category[0] === supName) {
      const slug = [slugify(cur.data.category[0]), slugify(cur.data.category[1])]
      const index = acc.findIndex((category) => listCompare(category.slug, slug))
      if (index === -1) {
        acc.push({
          slug: slug,
          name: cur.data.category,
          count: 1,
        })
        // console.log(`[INFO] found a new category: slug: ${slug}`)
      } else {
        acc[index].count += 1
        // console.log(`[INFO] add a post to category: slug: ${slug}`)
      }
    }
    return acc
  }, [])
  // console.log(allCategories)
  return subCategories
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
