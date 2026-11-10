---
title: Multi-currency setup
order: 3
---
# How to set up multi-currency for a dealer?

<!-- tags: multi-currency, currency, dealer, exchange rate, CZK, EUR, USD -->

Multi-currency allows a dealer's front-end to display prices in a currency different from your agency's base currency.

## Steps

1. Log into the GOL IBE admin console.
2. Go to **Dealers** and find the dealer you want to configure.
3. Click **Edit**.
4. Navigate to the **Currency** section.
5. Enable **Multi-currency**.
6. Select the **display currency** for the dealer's front-end (e.g. CZK, EUR, USD).
7. Set the **exchange rate source**:
   - **Exchange rate provided by Galileo** — rates come from the Galileo GDS; you can apply a multiplier
   - **Fixed exchange rate** — you enter and maintain the exchange rate yourself
8. If using manual rates, enter the current exchange rate.
9. Click **Save**.

## Result

Customers visiting the dealer's booking engine will see all prices in the configured currency. The underlying transactions are still processed in your agency's base currency.

## Notes

- Exchange rate changes take effect on the next page load
- Manual rates should be reviewed regularly to stay accurate
- Multi-currency affects display only — settlement is in your base currency
