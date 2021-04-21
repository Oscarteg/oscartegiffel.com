import MDXComponents from '@/components/MDXComponents';
import DefaultLayout from '@/layouts/default';
import {getFileBySlug} from '@/lib/mdx';
import hydrate from 'next-mdx-remote/hydrate';

export default function Books({mdxSource, frontMatter}) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <DefaultLayout frontMatter={frontMatter}>{content}</DefaultLayout>;
}

export async function getStaticProps() {
  const books = await getFileBySlug('books');

  return {props: books};
}