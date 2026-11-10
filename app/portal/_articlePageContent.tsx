import Link from "next/link";
import { MarkdownBody } from "@/components/MarkdownBody";
import { ShareButton } from "@/components/ShareButton";
import { PortalSearch } from "@/components/PortalSearch";
import { ArticleVideoPanel } from "@/components/ArticleVideoPanel";
import { getArticleVideos } from "@/lib/articleVideos";
import { CATEGORIES } from "./data";
import s from "./portal-layout.module.css";

type Article = {
  title: string;
  body: string;
  bodyWithoutH1: string;
  videos?: { label: string; youtubeId: string }[];
};

export default function ArticlePageContent({
  article,
  href,
}: {
  article: Article;
  href: string;
}) {
  const parentCat = CATEGORIES.find(
    (cat) => cat.href === href || cat.articles.some((a) => a.href === href)
  );
  const isCategoryPage = parentCat?.href === href;
  const videos = article.videos?.length ? article.videos : getArticleVideos(href);

  return (
    <div className={s.articleWrap}>
      <div className={s.articlePageHeader}>
        <div className={s.articleNav}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/portal">Home</Link>
            <span aria-hidden="true"> / </span>
            {parentCat && !isCategoryPage ? (
              <>
                <Link href={parentCat.href}>{parentCat.name}</Link>
                <span aria-hidden="true"> / </span>
                <span>{article.title}</span>
              </>
            ) : (
              <span>{article.title}</span>
            )}
          </nav>
          <div className={s.articleNavActions}>
            <PortalSearch />
            <ShareButton />
          </div>
        </div>
        <div className={s.articleTitleRow}>
          <h1 className={s.articleMainTitle}>{article.title}</h1>
        </div>
      </div>

      <div className={s.articleContentRow}>
        <div className={s.articleBody}>
          <MarkdownBody>{article.bodyWithoutH1}</MarkdownBody>
        </div>
        {videos.length > 0 && <ArticleVideoPanel videos={videos} />}
      </div>

      {/* Topic page: list its articles. Article pages don't repeat them — they are in the sidebar. */}
      {parentCat && isCategoryPage && (
        <div className={s.relatedSection}>
          <div className={s.articleGrid}>
            {parentCat.articles.map((a) => (
              <Link key={a.href} href={a.href} className={s.articleCard}>
                <span>{a.title}</span>
                <span className={s.articleArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
