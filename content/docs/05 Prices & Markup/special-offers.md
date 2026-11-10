---
title: Handle special offers
order: 6
---
# How to handle special offers

Special offers can be created in two ways:

1. **Manually** — by adding a special offer and defining all required parameters.
2. **Automatically** — the robot generates a list of the cheapest flights into **Prices → Special offers extended**, based on your clients' browsing behavior on your GOL IBE front-end.

Departures and arrivals for automatically suggested special offers are pre-set from the first day of the booking month until the last day of the third month. Validity is pre-set from the current date until the last possible departure date.

## How to publish a special offer on your GOL IBE front-end

1. Choose the offer you would like to publish.
2. Click **EDIT**.
3. In the detail, find the section **Validate by robot / Display / Deactivate if quoted price is incorrect** and tick all 3 boxes.
4. In **Restrictions**, you may specify a minimum and maximum stay.
5. **Forward** = settings for the outbound flight.
6. **Backward** = settings for the return flight.
7. Review all tabs, especially **Bindings** — tick **Search together with following** if you want availability validated together with the connecting segment.
8. Save changes.
9. On the offer row, click **[RUN CACHES]**. The robot will work for a few minutes.
10. When 4 checkmarks appear next to your offer, it is published.

## How to add or edit a special offer manually

1. Log into the admin console.
2. Go to **Prices → Special offers extended**.

Besides **DELETE / EDIT / DETAIL**, you also have:

- **COPY** — opens a new special offer for editing, pre-filled with all items from the original.
- **RUN CACHE** — launches the robot to retrieve flight information from the reservation system.

### 1. Basic settings (mandatory fields are bold)

- **Valid since – till** — the period during which the offer is shown to customers.
- **Departure since – till** — the period during which departure is possible.
- **Returns since – till** — the period during which return is possible.
- **Included in the set** — defines which group the offer belongs to (e.g., Europe, Asia, Special offers up to €5,000). You can display offers filtered by these sets on your website.

### 2. Prices and fees

- **Use a manually set up fee** — if unchecked, the service fee is calculated from your default settings.
- **Ticket price** — price of tickets and taxes. If the GDS price is more than 10% higher, the connection is marked as unavailable.
- **Service fee** — the fee amount if you checked *Use a manually set up fee*.
- **Service fee for infant in % from common service fee** — infant fee as a percentage of the adult fee.
- **Rounded** — rounding range.
- **Displayed final price** — total price (ticket + service fee) shown to customers.

### 3. Special offer statistics

- **Last measurement of cache** — the last time flight information was retrieved.
- **Number of availability requests** — requests sent during the last cache update.
- **Current price from Galileo GDS** — the result of the verification quote (up to 5 attempts, across different date combinations).
- **Technical note:** Availability is refreshed based on customer usage and at least once every 24 hours overnight.

### 4. Status

- **Validate by robot** — if checked, data is refreshed automatically.
- **Display** — the offer is shown to customers.
- **Deactivate if quoted price is incorrect** — if the price difference exceeds ±10%, the offer is hidden automatically.
- **Automatic special offer** — indicates whether the offer was created automatically.
- **Cached** — whether the offer has been retrieved from the reservation system.
- **Found flights** — whether available flights were found.
- **FQCS Price OK** — whether a valid quote was found for the requested date range.

### 5. Restrictions

**Min/Max stay** — restrict certain flights. Define each field in this order:

- 1st field — a number of days, or the text *SU* for the Sunday Rule.
- 2nd field — specify whether you mean days or months.
- 3rd field — specify whether you mean a minimum or maximum.

Define each leg of the journey. For a simple connection (e.g., VIE–CDG), define it in **Forward**. For a connection with transfer (e.g., VIE–FRA–CDG), first add VIE–FRA, then click **Add another flight segment for the same direction** and add FRA–CDG.

For return connections, use **Backward**. You can either set it manually or click **Create backward route automatically** to mirror the forward journey.

### 6. Forward — settings

- **Origin** — IATA code of the departure point.
- **Destination** — IATA code of the arrival point.
- **Marketing carrier** — carrier shown in availability.
- **Booking classes** — booking class (RBD).
- **Fare Basis Code** — fare basis used for pricing this leg.
- **Fare Basis Carrier** — carrier code the fare basis belongs to (if different from the marketing carrier).

### 7. Forward — Bindings

- **Search together with following** — availability is verified for the whole O&D journey, not individual segments.
- **Inhibit status link** — availability is not verified via seamless availability even if possible.
- **Add +1 day** — adds one day to the availability request, useful for long-haul flights.

## How do special offers work?

1. When you click **RUN CACHE** or during the nightly refresh, GOL IBE builds an availability calendar based on your settings.
2. The offer appears on your website. When a customer clicks it, a calendar is shown with available dates highlighted.
3. When the customer selects an outbound date, GOL IBE checks which return dates are available and highlights only those.
4. When both dates are selected, GOL IBE checks availability, gets a fare quote, and compares the price. If the price is more than 10% higher or there is no availability, an error is shown.

## Troubleshooting — offer not working?

1. **Does the connection exist in neutral availability?** — If not, the GDS may not support the routing. Red crosses will appear in the admin console.
2. **Multi-segment: is there a 1-day shift?** — If a later segment departs the next day, tick **Add +1 day** in **Bindings**.
3. **Are the booking classes available?** — Some low-fare booking classes may be sold out. Check neutral availability.
4. **Does the fare exist for the selected carrier?** — Run a Fare Display (FD) in your GDS terminal. If the fare belongs to a different carrier, set **Fare Basis Carrier** accordingly.
5. **Can you simulate the booking via your terminal?** — If availability and fare exist, try creating the booking and getting a fare quote through your terminal window.
