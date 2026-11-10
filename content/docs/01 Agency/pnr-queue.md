---
title: PNR queue number
order: 10
videos:
  -
    label: How to change Queue number
    youtubeId: XWVYB9n33l8
---
# What about PNR queue number in GOL IBE?

<!-- tags: PNR, queue, GDS, queue number, booking, ticketing -->

A **queue number** tells the GDS where to place newly created PNRs (Passenger Name Records). Correctly setting the queue ensures that bookings land in the right work queue for your agents to action.

## What is a GDS queue?

In the Galileo (Travelport) GDS, a queue is a numbered inbox where PNRs are deposited automatically. Agents open the queue in the GDS terminal (Smartpoint) to work through bookings — add remarks, follow up on payment, and process e-ticketing.

## How to set the queue number in GOL IBE

1. Log into the GOL IBE admin console.
2. Go to **Agency → Agency detail**.
3. Find the field **Queue number**.
4. Enter your Galileo queue number.
5. Click **Save**.

Contact your Travelport helpdesk if you are unsure of your queue number.

## Tips

- If the queue number is left blank, PNRs may not be queued automatically — agents would have to find them by PNR locator in Smartpoint
- Use a **dedicated queue** for GOL IBE bookings so they are easy to separate from bookings created directly in Smartpoint
- After changing the queue number, test with a booking to confirm PNRs are landing in the correct queue
