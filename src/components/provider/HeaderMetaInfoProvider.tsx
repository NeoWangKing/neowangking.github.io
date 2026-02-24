import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { pathNameAtom, metaTitleAtom, metaDescriptionAtom, metaSlugAtom } from '@/store/metaInfo'

export function HeaderMetaInfoProvider({
  pathName,
  title = '',
  description = '',
  slug = '',
}: {
  pathName: string
  title?: string
  description?: string
  slug?: string
}) {
  const setPathName = useSetAtom(pathNameAtom)
  const setTitle = useSetAtom(metaTitleAtom)
  const setDescription = useSetAtom(metaDescriptionAtom)
  const setSlug = useSetAtom(metaSlugAtom)

  useEffect(() => {
    // 判断是不是根目录
    if (pathName !== '/') {
      // 去掉 pathName 结尾的 '/'
      setPathName(pathName.replace(/\/$/, ''))// 两个 / 中间是正则表达式，\/ 表示转义的 / 符号，$表示末尾
    } else {
      // 如果是根目录的话就不进行修改
      setPathName(pathName)
    }
    setTitle(title)
    setDescription(description)
    setSlug(slug)
  }, [pathName, title, description, slug])

  return null
}
