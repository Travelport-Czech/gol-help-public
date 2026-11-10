"use client";

import { useEffect } from "react";

const ZENDESK_KEY = "14190e0b-9771-4dd3-972a-d33c545f5a7c";

export function ZendeskWidget() {
  useEffect(() => {
    if (document.getElementById("ze-snippet")) return;

    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${ZENDESK_KEY}`;
    script.onload = () => {
      const locale = navigator.language.toLowerCase().startsWith("cs") ? "cs" : "en";

      window.zE?.("webWidget", "setLocale", locale);
      window.zE?.("webWidget:on", "close", () => {
        window.zE?.("webWidget", "hide");
      });

      // Default launcher is hidden — the portal's own Support / Contact Help
      // buttons open the widget instead (see openZendeskWidget in portal/layout.tsx).
      window.zE?.("webWidget", "hide");
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
