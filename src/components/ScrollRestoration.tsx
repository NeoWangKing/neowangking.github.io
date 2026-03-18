import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { pageScrollLocationAtom } from '@/store/scrollInfo';

interface Props {
  slug: string; // 文章的唯一标识，用于区分不同文章
}

export function ScrollRestoration({ slug }: Props) {
  const [scrollY, setScrollY] = useAtom(pageScrollLocationAtom);

  // 恢复滚动位置（页面加载时执行一次）
  useEffect(() => {
    const key = `scroll-${slug}`;
    const saved = sessionStorage.getItem(key);
    if (saved) {
      const y = parseInt(saved, 10);
      window.scrollTo(0, y);
      setScrollY(y); // 更新 atom，触发目录高亮重新计算
    }
  }, [slug, setScrollY]);

  // 保存滚动位置（监听滚动事件）
  useEffect(() => {
    const key = `scroll-${slug}`;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      sessionStorage.setItem(key, String(y));
    };

    // 可添加 requestAnimationFrame 节流优化，此处省略
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, setScrollY]);

  return null; // 该组件不渲染任何内容
}