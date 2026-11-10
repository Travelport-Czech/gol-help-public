---
title: Service fee from airline commission
order: 6
---
# Service fee from airline commission

This is a special alternative to adding a standard service fee. Instead of increasing the ticket price, you use the airline commission as your profit — useful when you want to display the raw GDS price to customers while knowing the airline pays you a commission (e.g., 9%).

In this case, set your service fee to 0 following the steps in the **Service fees** article. This way the price is not increased — however, your earnings per ticket will not be visible in the bookings list, and you won't be able to lower the ticket price by sharing part of your commission.

## Sharing commission with dealers and customers

You can share your commission with Dealers and pass part of it on as a discount to end customers.

## Example calculation

> **Base data:**
> - Fare: CZK 1,250
> - Taxes: CZK 3,900
> - **Total price displayed to customers: CZK 5,150**
> - Your commission: 9%

**In the bookings list you will see:**

| Item | Amount |
|------|--------|
| Fare reduced by 9% (−112.50) | CZK 1,137.50 |
| Service fee (9%) | CZK 112.50 |

Configure this under **Prices → Service fees - agency**.

---

**If you share 50% of your commission with your Dealer:**

| Item | Amount |
|------|--------|
| Fare reduced by 9% (−112.50) | CZK 1,137.50 |
| Service fee (9%) | CZK 112.50 |
| Commission paid to Dealer | CZK 56.25 |

Configure this under **Prices → Service fees - dealer**.

---

**If the Dealer further shares 30% of their 50% as a customer discount:**

| Item | Amount |
|------|--------|
| Fare reduced by 16.875 (9% + 30%×50%) | CZK 1,120.625 |
| Service fee (9%) | CZK 112.50 |
| Commission paid to Dealer | CZK 56.25 |

Configure the customer discount under **Dealers**.
