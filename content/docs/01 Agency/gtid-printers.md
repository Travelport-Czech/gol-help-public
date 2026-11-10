---
title: GTID printers for auto e-ticketing
order: 11
---
# Where to insert GTID printers for automated e-ticketing?

<!-- tags: GTID, printer, e-ticketing, auto-ticketing, Galileo, Travelport -->

**GTID (Galileo Terminal ID)** printer codes are required when using automated e-ticketing on the Galileo/Travelport GDS. They tell the system which printer profile to use when issuing tickets.

## What is a GTID printer?

A GTID printer is a code assigned by Travelport that links your GDS office to a specific ticket printer or e-ticket output profile. Without the correct GTID, automated ticket issuance will fail.

## How to add GTID printer codes

1. Log into the GOL IBE admin console.
2. Go to **Agency → Agency detail**.
3. Find the field **GTID printer** (or **Printer code**).
4. Enter your GTID printer code as provided by Travelport (e.g. `PRGLB2195`).
5. Click **Save**.

## Multiple printers

If your office has multiple printer codes (e.g. for different ticket types), enter them separated by a comma or on separate lines — check with CEE Systems support for the exact format supported by your GOL IBE version.

## Where to get your GTID

- Contact your **Travelport helpdesk** or account manager
- It is also visible in your Galileo terminal by typing `T:` (printer status command)

## Tips

- If e-ticketing fails with an error related to the printer, double-check the GTID code
- After adding or changing the GTID, test with a real booking before enabling full auto-ticketing
- Automated e-ticketing must also be enabled in **Agency → Agency detail** (enable the **Auto-ticketing** option)
