---
title: CSS customization
order: 3
---
# CSS Customisation of GOL IBE Front-end

<!-- tags: CSS, style, design, customisation, front-end, colours, fonts, layout -->

GOL IBE allows you to customise the visual appearance of your booking engine using custom CSS. This lets you match the look and feel of your agency's brand without changing the underlying functionality.

## How to add custom CSS

1. Log into the GOL IBE admin console.
2. Go to **Supporting texts → CSS**.
3. Enter your custom CSS rules in the editor.
4. Click **Save**.

Changes take effect after flushing the HTML cache — go to **Code Lists → Flush HTML Caches**.

## What you can customise with CSS

- **Colours** — background, buttons, links, headers
- **Fonts** — font family, size, weight
- **Layout** — spacing, padding, element positioning

## Tips

- Use browser developer tools (F12) to inspect element class names before writing CSS
- Always test on a dealer front-end before applying to production
- Keep custom CSS minimal — override only what you need

> ⚠️ Avoid overriding core layout CSS — this can break the booking flow.
