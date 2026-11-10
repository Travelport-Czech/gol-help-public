---
title: Set up service fee
order: 4
---
# How to set up service fee?

1. Log into the GOL IBE admin console.
2. Go to **Prices → Service fees - agency** or **Service fees - dealers** (depending on your role).
3. The default fee is shown there.

From this screen you can add a new service fee or modify an existing one.

## How to add a new service fee

1. Click **Add service fee**.
2. Specify the criteria for your rule (see sections below).
3. Save changes.

### General

- **Carrier** — leave blank for all carriers, or select a specific one from the list.
- **Connector** — Air Ticket Galileo = GDS content.

### Validity

- **Customer validity:**
  - a) Generally valid — valid for all customers.
  - b) Valid for chosen one — click **Choose** and select a client from your Customer database.

- **Origin:**
  - a) Without restrictions — no restrictions on origin.
  - b) IATA code — enter the IATA code of the origin.
  - c) Destination type — choose from the options the system offers.
  - d) Country — specify the country of origin.

- **Destination** — choose from the options the system offers.
- **Type** — choose whether the rule applies to **OW** (one-way), **RT** (return), or **OW+RT** (both).

### Cabin class

- **Contains** — choose from the different options the system offers.

### Fee

- **Assigned fee value:**
  - a) Fixed fee — specify the fee as a fixed amount in your currency.
  - b) Fixed fee regards to ticket price — specify a fixed amount and the ticket price level or range for which the fee applies.
  - c) Fixed fee + % fee — combination of a fixed amount and a percentage.
  - d) Fixed + % fee, regards to ticket price — combination of fixed amount and percentage with specified price limits.

- **Fixed fee** — enter the value of your fee.
- **Fee in % height** — enter the value as a percentage.
- **Customer discount in %** — specify a discount in percent.

### Service fee for infant

- **Service fee for infant in % from common service fee** — specify the fee for infants.
- **Rounded** — fee rounding.

## What is the default service fee for?

- It is set up automatically in each GOL IBE account.
- No restrictions are applied by default — you configure those yourself.
- The default fee applies to all clients without exception.

## How to modify the default service fee?

1. Click **EDIT**.
2. Go to the **FEE** section and set the type and amount.
3. Save changes.
