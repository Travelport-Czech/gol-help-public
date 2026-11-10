---
title: Hide a carrier on search form
order: 2
---
# How to hide a carrier on your search form?

<!-- tags: carrier, airline, hide, search form, disable, block, front-end -->

You can hide specific airlines from your booking engine search form so customers cannot filter by or see results for those carriers.

## Steps

1. Log into the GOL IBE admin console.
2. Go to **Code Lists → Carriers**.
3. Find the airline you want to hide.
4. Click **Edit** next to that carrier.
5. Uncheck **Active** (or toggle **Visible on front-end** to off).
6. Click **Save**.

## Result

The airline will no longer appear in:
- The carrier filter on the search form
- Search results on the booking engine front-end

The carrier is still available in the admin console for manual bookings if needed.

## Hiding vs. disabling

| Action | Effect |
|--------|--------|
| **Hide from front-end** | Customers cannot see or book the carrier; admin console still shows it |
| **Disable entirely** | Carrier is excluded from all searches including admin console |

## Tips

- After hiding a carrier, flush the search cache (**Code Lists → Flush Caches**) so the change takes effect immediately
- You can re-enable a carrier at any time by following the same steps and checking **Active** again
