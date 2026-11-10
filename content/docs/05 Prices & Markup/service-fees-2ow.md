---
title: Service fees for 2OWs
order: 3
---
# How to handle service fees for 2OWs

A **2OW** (two one-way) booking consists of two separate one-way tickets sold together instead of a single return ticket. Service fee rules behave differently for 2OWs — this guide explains how to configure them correctly.

## The issue with 2OWs

By default, a service fee set to **per ticket** will be charged twice for a 2OW booking (once for each one-way ticket), which may result in double-charging compared to a standard return ticket.

## Ticket type options

When setting up a service fee rule, the **Type** field controls which bookings the rule applies to:

- **OW** — applies to one-way tickets
- **RT** — applies to return tickets
- **OW+RT** — applies to both

## How to set up fees correctly for 2OWs

1. Log into the GOL IBE admin console.
2. Go to **Prices → Service fees**.
3. Edit an existing fee or click **Add service fee**.
4. Set a fee rule for **RT** type for standard return tickets.
5. Create a separate fee rule for **OW** type with half the return fee amount — this prevents double-charging on 2OWs.
6. Save both rules.

## Example

| Ticket type | Fee rule | Amount |
|-------------|----------|--------|
| Return (RT) | Type: RT | €10 |
| Each leg of 2OW | Type: OW | €5 |

This way the total fee for a 2OW (€5 + €5 = €10) matches the fee for a return ticket.

> Always test your fee configuration with a real search before going live.
