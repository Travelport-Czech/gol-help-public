"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema, type Options as SanitizeSchema } from "rehype-sanitize";
import type { Components } from "react-markdown";

/**
 * Articles may contain raw HTML (rehype-raw), so everything is passed through
 * rehype-sanitize: <script>, event handlers (onclick…), javascript: URLs, <style>,
 * <form> etc. are stripped. On top of the GitHub-style default schema we allow
 * only <iframe> / <video> / <source> and <div align>. Iframes are additionally
 * limited to the video hosts below (see the `iframe` component).
 */
const IFRAME_HOSTS = [
  "www.youtube.com",
  "youtube.com",
  "www.youtube-nocookie.com",
  "youtube-nocookie.com",
  "player.vimeo.com",
];

const sanitizeSchema: SanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "iframe", "video", "source"],
  attributes: {
    ...defaultSchema.attributes,
    div: [...(defaultSchema.attributes?.div ?? []), "align"],
    iframe: ["src", "width", "height", "title", "allow", "allowFullScreen", "frameBorder"],
    video: ["src", "controls", "poster", "width", "height", "muted", "loop", "playsInline"],
    source: ["src", "type"],
  },
  protocols: {
    ...defaultSchema.protocols,
    src: ["https"],
  },
};

function isAllowedIframeSrc(src: unknown): src is string {
  if (typeof src !== "string") return false;
  try {
    const url = new URL(src);
    return url.protocol === "https:" && IFRAME_HOSTS.includes(url.hostname);
  } catch {
    return false;
  }
}

const components: Components = {
  img({ src, alt }) {
    return (
      <img
        src={typeof src === "string" ? src : undefined}
        alt={alt ?? ""}
        loading="lazy"
        style={{ maxWidth: "100%", height: "auto", borderRadius: 8, margin: "20px 0", display: "block" }}
      />
    );
  },
  iframe({ src, width, height, title }) {
    if (!isAllowedIframeSrc(src)) return null;
    return (
      <div className="video-wrap">
        <iframe
          src={src}
          width={width}
          height={height}
          title={title ?? "Embedded video"}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  video({ node: _node, src, ...rest }) {
    return (
      <video
        src={typeof src === "string" ? src : undefined}
        controls
        style={{ maxWidth: "100%", borderRadius: 8, margin: "20px 0" }}
        {...(rest as React.VideoHTMLAttributes<HTMLVideoElement>)}
      />
    );
  },
};

export function MarkdownBody({ children }: { children: string }) {
  return (
    <article className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </article>
  );
}
