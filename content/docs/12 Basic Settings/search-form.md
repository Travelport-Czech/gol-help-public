---
title: Implement air ticket search form
order: 6
---
# How to implement the air ticket search form into your agency website

You can insert a search form into your web pages so the search becomes part of your site. Once the client enters their destination and confirms, they will see the offers on a new page.

There are two implementation options:

## HTML package

The big advantage of this option is full integration — you can customize the form completely. Implementation can be more demanding as the form contains styles and scripts that may interact with your existing page; any conflicts need to be resolved.

1. Log into the GOL IBE admin console.
2. Go to **Dealer details → Front-End settings → Static HTML** (download link).

> The package includes HTML, CSS, images, and scripts for implementation into your website, including the full functionality of the destination search tooltip.

## iframe

The iframe option offers easy implementation. One limitation: if customers search for open-jaw flights and keep adding segments, the form will keep extending — either leave enough space or allow scrolling.

Insert the following code into your webpage (replace `xxxx` with the subdomain of your front-end):

```html
<iframe src="https://xxxx.golibe.com/iframe" width="100%" height="565px" frameborder="0" allowtransparency="true"></iframe>
```

## Redirect customers directly to search results

If you want to send customers straight to results, use URL parameters:

```
https://xxxx.golibe.com/results?from=VIE&to=PAR&flightClass=ECO&departureDate=2023-01-20&returnDate=2023-01-30&ADT=1
```
