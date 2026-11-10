---
title: Destination filters
order: 3
videos:
  -
    label: How to apply destination filters
    youtubeId: oJg9WNhkZK0
---
# Destination Filters

<!-- tags: destination, filter, country, airport, blacklist, whitelist, restrict -->

**Destination Filters** let you control which destinations are available — or unavailable — on your booking engine front-end.

## Use cases

- **Restrict to specific markets** — e.g. show only flights within Europe
- **Block certain countries** — e.g. exclude destinations with travel advisories
- **Focus your offering** — simplify the search form by limiting irrelevant destinations
- **Compliance** — prevent bookings to sanctioned or restricted destinations
- Hide destinations you don't sell (e.g. domestic routes)
- Restrict bookings to specific regions for a dealer

## How it works

You can create filter rules based on:
- **Country** — allow or block all airports in a country
- **IATA airport code** — allow or block a specific airport
- **Region** — allow or block a geographic region

Rules can be set as:
- **Whitelist** — only show listed destinations
- **Blacklist** — hide listed destinations, show everything else

## How to add a filter

1. Log into the GOL IBE admin console.
2. Go to **Code Lists → Destination Filters**.
3. Click **Add filter** to create a new rule.
4. Select filter type: **Airport**, **Country**, or **Region**.
5. Choose **Allow** or **Block**.
6. Enter the IATA code or select from the list.
7. Click **Save**.

> Changes to destination filters take effect after flushing the search cache.
