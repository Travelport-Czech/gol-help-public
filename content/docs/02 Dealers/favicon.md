---
title: Insert favicon
order: 10
---
# Where can you insert a favicon?

<!-- tags: favicon, icon, browser icon, tab icon, branding, front-end -->

A **favicon** is the small icon shown in the browser tab next to your page title. Adding your own favicon reinforces your branding.

## How to set a favicon

1. Log into the GOL IBE admin console.
2. Go to **Dealers → Dealers** → your dealer → **Front-end settings**.
3. Find the field **Favicon URL** (or **Favicon**).
4. Enter the URL of your favicon image (hosted on your server).
5. Click **Save**.
6. Go to **Code Lists → Flush HTML Caches**.

## Favicon requirements

| Property | Recommended value |
|----------|------------------|
| Format | `.ico`, `.png`, or `.svg` |
| Size | 32×32 px or 16×16 px (`.ico` can contain both) |
| Background | Transparent or matching your brand colour |
| File location | Publicly accessible URL (https://) |

## How to create a favicon

1. Prepare a square version of your logo (at least 64×64 px).
2. Use a tool such as [favicon.io](https://favicon.io) or [RealFaviconGenerator](https://realfavicongenerator.net/) to generate the `.ico` file.
3. Upload the `.ico` file to your web server or a CDN.
4. Copy the public URL and paste it into the **Favicon URL** field.

## Tips

- If you set the favicon in the HTML package directly (in `index.html`), that takes precedence over the admin console setting
- Clear your browser cache after changing the favicon — browsers cache favicons aggressively
- Test in multiple browsers (Chrome, Firefox, Edge) as favicon rendering differs slightly
