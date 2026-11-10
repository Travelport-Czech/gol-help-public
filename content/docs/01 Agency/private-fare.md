---
title: Private fare account code
order: 4
---
# What if I have a private fare account code?

<!-- tags: private fare, account code, negotiated fare, corporate, PCC, agency -->

Some airlines offer **private fares** (also called negotiated or corporate fares) that are only accessible when you include a specific account code in the GDS request. GOL IBE supports private fare account codes.

## What is a private fare account code?

An account code is a short alphanumeric string (e.g. `MYAGENCY01`) that the airline assigns to your agency. When this code is sent with the availability request, the GDS returns lower fares that are not available to the general public.

## How to configure a private fare account code in GOL IBE

1. Log into the GOL IBE admin console.
2. Go to **Agency → Agency detail**.
3. Find the field **Account code** (or **Private fare account code**).
4. Enter the code exactly as provided by the airline.
5. Click **Save**.

## Multiple account codes

If you have account codes for different airlines, you can typically add them as a comma-separated list or via a per-carrier configuration — the exact method depends on your GOL IBE version. Use the **Support** button in the bottom-right corner to request this — our team at CEE Systems will configure it for you.

## Checking if private fares are returned

After saving the account code, perform a test search on your front-end for a route where you expect private fares. The results should include the negotiated prices alongside public fares.

## Tips

- Account codes are **case-sensitive** — enter them exactly as the airline provided
- If private fares are not appearing, verify the code with the airline and check the PCC used in your GDS connector settings
- Do not share your account code publicly; it is confidential to your agency agreement
