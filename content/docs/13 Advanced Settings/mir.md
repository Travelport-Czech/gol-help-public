---
title: MIR connector
order: 3
---
# How to handle MIR?

MIR (Machine Interface Record) is one of the simpliest tools provided by Travelport for generating data on bookings. These are text files with a fixed format, generated directly by the Galileo system regardless of whether the bookings were created via GOL IBE.

You can find the documentation [>here<](https://support.travelport.com/webhelp/MIR/Default.htm).

Besides the standard content, GOL IBE adds the following items to the bookings, and you can see them in MIR files:

1. **Customer´s telephone contact:**

**A12PRGM \*00420123123123**\
**A12** *- section in which you can find the information*\
\&#xNAN;***PRGM*** ***\**** *- static parameter*\
**00420123123123** *- customer's phone number*

2. **Customer´s e-mail address:**

**A12PRGE \*MARTIN//TRAVELPORTGDS.CZ**\
**A12** *- section in which you can find the information*\
**PRGE \*** - *static parameter*\
\&#xNAN;***MARTIN//TRAVELPORTGDS.CZ** - \_email address, // is used instead of @ (the reservation system uses @ for other special features and therefore this character is not used).*

3. **Billing address:**

**A13W-JAROSLAV NOVAK\*TRAVELPORT S.R.O\*123456789/CZ123456789/PRAHA\*SOKOLOVSKA 1234/5\*CZ 11800\*** *individual blocks of information are separated by \**\
**A13W-** *section in which you can find the information*\
**JANOSLAV NOVAK** *- name of the person*\
**TRAVELPORT S.R.O** *- name of the company*\
**123456789/CZ123456789/PRAHA** *- BID/VAT ID/City*\
**SOKOLOVSKA 1234/5** *- Street*\
**CZ 11800** \_- *Country\_code ZIP*\
If the customer doesn't enter any of the above details, it is replaced with "NONE".

4. **Variable symbol\***

**A1500VARIABLE SYMBOL:785972**\
**A1500** - *section in which you can find the information*\
**VARIABLE SYMBOL:** *- static parameter*\
**785972** *- numeric variable symbol*

* the symbol under which you can find the booking in GOL IBE admin console.
