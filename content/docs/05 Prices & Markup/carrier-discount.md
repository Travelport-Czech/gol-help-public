---
title: Discount for carrier / flight
order: 7
---
# How to create a discount for a certain carrier and flight?

<!-- tags: discount, carrier, flight, route, prices, markup, commission -->

You can create targeted discounts that apply only to specific airlines or specific routes — useful for promotional agreements or preferred carrier deals.

## Steps

1. Log into the GOL IBE admin console.
2. Go to **Prices → Commissions and discounts**.
3. Click **Add discount**.
4. Set the **scope** of the discount:
   - **Carrier** — select a specific airline (e.g. OK, LH, BA)
   - **Origin** — IATA code of departure airport or leave blank for all
   - **Destination** — IATA code of arrival airport or leave blank for all
   - **Booking class** — limit to specific cabin class (Economy, Business) or all
5. Set the **discount value**:
   - **Fixed amount** — e.g. reduce fare by €10
   - **Percentage** — e.g. reduce fare by 5%
6. Set **validity dates** if the discount is time-limited.
7. Click **Save**.

## Example

To give a 3% discount on all Czech Airlines (OK) flights:
- Carrier: `OK`
- Origin: *(leave blank)*
- Destination: *(leave blank)*
- Discount: `3%`

## Notes

- Discounts stack with service fees — verify the final price shown to customers
- Multiple discount rules can exist; the most specific rule takes precedence
- Use the **Preview** function to check how prices appear before activating
