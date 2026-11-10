import { getCategoryArticle, listCategorySlugs } from "@/lib/content";
import ArticlePageContent from "../_articlePageContent";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const categories = await listCategorySlugs();
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const article = await getCategoryArticle(category);
  if (!article) return {};
  return { title: article.title };
}

export default async function CategoryIndexPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const article = await getCategoryArticle(category);
  if (!article) notFound();
  return <ArticlePageContent article={article} href={`/portal/${category}`} />;
}
