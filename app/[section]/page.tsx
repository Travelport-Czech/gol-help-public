import { ClientRedirect } from "@/app/_components/ClientRedirect";
import { listCategorySlugs } from "@/lib/content";

export async function generateStaticParams() {
  const sections = await listCategorySlugs();
  return sections.map((section) => ({ section }));
}

export default async function SectionRedirectPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  return <ClientRedirect to={`/portal/${section}`} />;
}
