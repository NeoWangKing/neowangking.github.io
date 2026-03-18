import { site } from '@/config.json'
import { getFormattedDateTime } from '@/utils/date'
import { AnimatedSignature } from '../AnimatedSignature'
import { useEffect, useState } from 'react'
import { toast } from "react-toastify";

function getPostUrl(slug: string) {
  return new URL(slug, site.url).href
}

export function PostCopyright({
  title,
  slug,
  author,
  summary,
  lastMod,
  exSlug,
}: {
  title: string
  slug: string
  author: string
  summary: string
  lastMod: Date
  exSlug?: string
}) {
  const [lastModStr, setLastModStr] = useState('')
  const url = getPostUrl(slug)

  function handleCopyUrl() {
    navigator.clipboard.writeText(url)
    toast.success('已复制文章链接')
  }

  useEffect(() => {
    setLastModStr(getFormattedDateTime(lastMod))
  }, [lastMod])

  return (
    <section className="text-xs py-3 px-5 mt-6 leading-loose text-secondary border border-primary rounded-xl">
      <p><span className="font-bold">·文章标题：</span>{title}</p>
      <p><span className="font-bold">·文章作者：</span>{author}</p>
      <p><span className="font-bold">·文章概要：</span>{summary}</p>
      {exSlug && <p><span className="font-bold">·原文链接：</span>
          <a 
            className="text-wrap break-words cursor-pointer select-none hover:underline hover:text-accent/80 underline-offset-2 transition duration-300"
            href={exSlug}
            target='_blank'
          >{exSlug}[点击跳转]</a>
        </p>}
      <p><span className="font-bold">·文章链接：</span>
        <span 
          role="button"
          className="text-wrap break-words cursor-pointer select-none hover:underline hover:text-accent/80 underline-offset-2 transition duration-300"
          onClick={handleCopyUrl}
        >{url}[点击复制]</span>
      </p>
      
      <p><span className="font-bold">·上次修改：</span>{lastModStr}</p>
      <hr className="my-3 border-primary" />
      <div>
        <div className="float-right ml-4 my-2">
          <AnimatedSignature />
        </div>
        <p>
          商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，您可以自由地在任何媒体以任何形式复制和分发作品，也可以修改和创作，但是分发衍生作品时必须采用相同的许可协议。
          <br />
          本文采用
          <a
            className="text-accent/80 hover:underline hover:text-accent underline-offset-2  transition duration-300"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-SA 4.0
          </a>
          进行许可。
        </p>
      </div>
    </section>
  )
}
