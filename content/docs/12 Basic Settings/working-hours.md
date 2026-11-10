---
title: Set up working hours
order: 3
---
# How to set up working hours in your GOL IBE

## What is this section for?

- This section lets you define your agency's working hours.
- It prevents customers from making bookings that your agents wouldn't be able to e-ticket because they are out of the office.
- We recommend setting up an integrated payment gateway with automated e-ticketing. Alternatively, set up notifications so you can check bookings outside office hours and sell as many tickets as possible.

## How to manage this section

1. Log into the admin console.
2. Go to **Agency → Working hours**.
3. Click **Edit**.
4. Set up your agency's business hours.
5. Save changes.

For example, if your agency handles bookings Monday–Friday from 9:00 AM to 8:00 PM with a 30-minute lunch break, and is closed on weekends, configure accordingly.

## The logic of working hours

- The setting protects against situations where a customer books a ticket at 8:05 PM when your office closes at 8:00 PM and no one is available to e-ticket it.
- The last ticketing date displayed to customers is based on fare conditions, but is limited to a day when your agency is open so that there is enough time to issue the ticket.
- For each payment method, you can also define how much time within working hours is required to process a booking. The default is 1 hour.

Three possible situations:

1. **Enough time** — the customer books a ticket and there is enough time within working hours to process and issue it. Everything is fine.
2. **Some payment methods unavailable** — there is enough time for some payment methods but not others. The customer is offered only the applicable ones.
3. **No payment method available** — none of the payment methods allows the ticket to be issued within working hours. GOL IBE blocks the booking and informs the customer. You can customize this message under **Supporting texts**.

## Working hours exceptions — public holidays

Go to **Agency → Working hours modifications**.

Here you can define exceptions such as public holidays or other days your agency is closed. There is no built-in public holiday code list — define these days manually.

> **Date only** — your agency is closed for the whole day.
>
> **Date + time (Since, Till)** — your working hours on that day are limited to the specified period.
