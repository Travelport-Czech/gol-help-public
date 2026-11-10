---
title: Parallel queries
order: 5
---
# Parallel requests

The search sometimes returns better results when an additional request is sent in parallel, including a preferred carrier, departure time, or transfer airport. During a search, GOL IBE sends one standard request and one parallel request with a preference, then merges the results.

In this section you can add and manage preferences.

## How to add a new preference

Click **New preference** and fill in the fields:

- **Connector** — preferred connector to be used.
- **Type of origin** — select by destination type or enter an IATA code directly.
- **Origin** — IATA code of the departure point.
- **Type of destination** — select by destination type or enter an IATA code directly.
- **Destination** — IATA code of the destination point.
- **Return flight** — if checked, the preference applies only to the return flight.
- **Carrier codes of preferred carriers** — IATA codes of the preferred carriers, separated by commas.
