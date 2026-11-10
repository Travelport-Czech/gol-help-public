import { getArticle, listArticleSlugs, listCategorySlugs } from "@/lib/content";
import ArticlePageContent from "../../_articlePageContent";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const category of await listCategorySlugs()) {
    for (const slug of await listArticleSlugs(category)) {
      params.push({ category, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const article = await getArticle(category, slug);
  if (!article) return {};
  return { title: article.title };
}

export default async function CategorySlugPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const article = await getArticle(category, slug);
  if (!article) notFound();
  return <ArticlePageContent article={article} href={`/portal/${category}/${slug}`} />;
}
