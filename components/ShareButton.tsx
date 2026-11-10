"use client";
import { useState } from "react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="share-btn"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        });
      }}
    >
      {copied ? "✓ Copied!" : "Share link"}
    </button>
  );
}
