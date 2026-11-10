import { ARTICLE_VIDEOS } from "@/lib/generated/site-data";

export type ArticleVideo = {
  label: string;
  youtubeId: string;
};

export function getArticleVideos(href: string): ArticleVideo[] {
  const normalized = href.replace(/\/$/, "") || href;
  return (ARTICLE_VIDEOS as Record<string, ArticleVideo[]>)[normalized] ?? [];
}

export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
}
