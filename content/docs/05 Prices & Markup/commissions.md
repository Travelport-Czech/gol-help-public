---
title: Commissions and discounts
order: 5
---
# Commissions and discounts

Airlines tend to give commissions from sold tickets to travel agencies less and less, but they still do. You can set up these commissions and GOL IBE will add them automatically to bookings.

You can also specify **discounts** in this section. Discounts may work independently of commissions, or you can set a discount equal to your earned commission. These two settings are combined but can also be used independently.

> **Note:** A separate rule must be created for each carrier.

In the admin console, go to **Prices → Commissions and discounts**.

## Available actions

- **ADD A RULE** — create a new rule
- **DETAIL** — view the detail of an already created rule
- **EDIT** — edit an existing rule
- **COPY** — create a copy of a rule
- **DELETE** — remove a rule you no longer need

## How to add a rule

Click **Add a rule** in the top-right corner.

### Priority

Specify the priority of the rule, starting from 1 (higher number = lower priority).

### Four options

Choose from the 4 listed options for your rule.

### Airlines

Specify which carrier the rule applies to by selecting one in the **Plating carrier** field.

**Marketing carrier:**

- **Without restrictions** — no restrictions on marketing carrier.
- **Different marketing carriers** — the rule applies only if the itinerary includes at least one marketing carrier other than the plating carrier.
- **Plating carrier only** — the rule applies only if the itinerary uses the plating carrier exclusively.
- **Only other than plating carrier** — the rule applies only if the plating carrier is not in the itinerary.

**Operating carriers:**

- **Without restrictions** — no restrictions on operating carrier.
- **Operated only by some of the listed** — only the listed operating carriers are allowed (enter IATA codes separated by commas).
- **Not operated by** — none of the listed carriers may appear in the itinerary (enter IATA codes separated by commas).
- **Operated by all listed** — the itinerary must include all selected carriers and no others (enter IATA codes separated by commas).

### Flight restrictions

Choose from the available restriction options if needed.

> **Note:** Flight numbers must be entered in 4-digit format. For example, flight 202 must be entered as 0202.

### Commission / Discount amount

- **Fixed** — a fixed amount in the agency's currency.
- **In percents** — a percentage of the fare amount.

### Routing

- **Without restrictions** — any origin and destination.
- **IATA code** — IATA code of the destination.
- **Type of destination** — a continent or other defined destination set.
- **Country** — specify the country.

### Rule is applicable for

- **One-way flights** — applies only to one-way flights.
- **Return flights** — applies only to return flights.
- **Both options** — applies to both types.

### Cabin class

Specify cabin class restrictions if needed.

### Fares, booking classes, and passenger type

Specify restrictions on fares, booking classes, and passenger types.

### Time periods

- **Sales (ticketing) since – till** — the period during which the commission is active.
- **Departures (Returns) since – till** — the allowed date range for the journey.

### Save

Press **Save** when done.

---

> **Rules Use as commission** and **Use as discount** can be used together, or separately. You may want to set a discount equal to your earned commission — in that case it is convenient to configure this with a single rule.

## How to test your rules

Use [this page](https://cm.golibe.com/) to verify how commissions will be calculated for a specific booking. Contact us via the **Support** button and we will create an authorization token for you.
