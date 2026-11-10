---
title: Multi-PCC queries
order: 4
---
# MultiPCC request

This feature allows you to set up, search, and receive offers from multiple markets simultaneously.

The offers are displayed together in a single list and a single currency. Prices reflect fares and availability from multiple countries (e.g., Germany, Austria, Ukraine). The MultiPCC feature fully supports currency conversions and a wide range of settings — including when and where to search in which countries, and statistics of successful searches.

In this section you create profiles for sending requests to PCCs other than the default one set up in the Agency profile.

## How to edit a MultiPCC request profile

Click the **Edit** button next to the profile.

The basic settings for GDS communication are the same as in the Agency profile.

## Currency and conversion settings

- **Market** — the market your HAP is connected to.
- **PCC currency in Galileo** — your Galileo GDS PCC currency.
- **Exchange rate provided by Galileo** — choose whether the price should be converted using the Galileo exchange rate or a fixed exchange rate.
- **With multiplier / Fixed exchange rate** — related to the *Exchange rate provided by Galileo* checkbox:
  - **With multiplier** — the ticket price is multiplied by the entered amount.
  - **Fixed exchange rate** — a fixed rate is used for multiplication.
- **Display relevant offers only if they're cheaper by** — enter an amount; only offers cheaper by at least this amount will be shown at your front-end.
