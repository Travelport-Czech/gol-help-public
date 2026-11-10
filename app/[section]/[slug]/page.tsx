import { ClientRedirect } from "@/app/_components/ClientRedirect";
import { listArticleSlugs, listCategorySlugs } from "@/lib/content";

export async function generateStaticParams() {
  const params: { section: string; slug: string }[] = [];
  for (const section of await listCategorySlugs()) {
    for (const slug of await listArticleSlugs(section)) {
      params.push({ section, slug });
    }
  }
  return params;
}

export default async function ArticleRedirectPage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section, slug } = await params;
  return <ClientRedirect to={`/portal/${section}/${slug}`} />;
}
