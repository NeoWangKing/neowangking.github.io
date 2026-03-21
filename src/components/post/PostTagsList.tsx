import { slugify } from '@/utils/content'

export function PostTagsList({
  tags = []
}: {
  tags?: string[]
}) {

  return (
    <section className="text-xs py-3 px-5 leading-loose text-secondary border border-primary rounded-xl">
      {tags.map((tag) => (
        <a className='inline-block m-1 px-3 py-0.5 rounded-lg bg-accent/10 transition hover:bg-accent/20 hover:text-accent hover:scale-105' href={`/tags/${slugify(tag)}`}>
          <i className="iconfont icon-hashtag" />
          <span>{tag}</span>
        </a>
      ))}
    </section>
  )
}
