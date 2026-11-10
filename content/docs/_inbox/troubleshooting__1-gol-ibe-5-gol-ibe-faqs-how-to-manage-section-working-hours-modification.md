# How to manage working hours modification?

<!-- tags: working hours, opening hours, schedule, booking engine, availability -->

Working hours control when your GOL IBE booking engine accepts new reservations. Outside of working hours, customers can still browse but cannot complete a booking.

## How to modify working hours

1. Log into the GOL IBE admin console.
2. Go to **Agency → Working hours** (or **Basic Settings → Working hours**).
3. Set your hours for each day of the week:
   - Toggle each day **on** or **off**
   - Set the **opening time** and **closing time**
4. Click **Save**.

## Special hours

- **Public holidays** — you can add specific dates with different hours or mark as closed
- **24/7 operation** — set all days to 00:00–23:59 to accept bookings at any time
- **Closed days** — toggle the day off to block bookings on that day

## What customers see outside working hours

When a customer tries to book outside your working hours, they see a message indicating the booking engine is currently closed and showing your next opening time.

## Tips

- If you operate across time zones, set hours in your **local server time** (displayed in the admin console header)
- Changes to working hours take effect immediately — no cache flush needed
- For temporary closures (e.g. bank holidays), use the **Exceptions** section rather than changing the regular schedule
