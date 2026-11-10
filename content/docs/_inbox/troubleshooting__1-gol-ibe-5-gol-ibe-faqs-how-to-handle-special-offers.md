# How to handle special offers?

How to handle special offers? How to publish them on your front-end?

Special offers can be created : 

1. **Manually** — by adding a special offer and defining all required parameters of the connection.
2. **Automatically** — by letting the robot to generate the list of the cheapest flights to the agency´s admin console - section **Prices - Special offers extended**.

This selections is done by robot on base of behaviour of agency´s clientele on their GOL IBE front-end.

Departures and arrivals for automatically suggested special offers are preset from the first day of the month in which the flight was booked until the last day of the third month since the day for which the flight was booked. Validity of the special offer is preset from the current date until the last possible date of departure.

**How to handle automatically suggested special offers in admin console?** 

**How can you publish special offer on your GOL IBE front-end?** 


To publish just do the following:

1. Log into admin console
2. Go to the section **Prices - Special offers - dealers / Special offers - agency**.
3. Choose the offer you would like to publish.
2. Click **EDIT**.
3. In detail find section called **Validate by robot** /**Display: / Deactivate if quoted price is incorrect** -  tick all 3 boxes.

In section **Restrictions** you may specify **minimum and maximum stay** 

**Section Forward** is for the flight there.

**Section Backward** is for the return flight.

We recommend you to go through all bookmarks and check out if setting is OK.

Especially in the section **Bingings** we recommend to tick box for **Search together with followin**g.

If checked, availability is validated together with continuing segment via O\&D.

4. Save changes.
5. Go again to the line where this offer is and press **\[RUN CACHES]**.
6. Take a moment. Robot will work on it and it usually takes few minutes.
7. As soon as there are 4 hooks beside your offer it means that it is published.

**How to edit/add special offer manually?** 

To add/edit special offer manually: 

1. Log into the admin console.
2. Go to the section **Prices - Special offer extended**. 

Besides the regular buttons - **DELETE/EDIT/DETAIL** (detail shows all information as well as edit, but you cannot edit it) - there are also the following functions:

* To copy special offer – button **COPY**. COPY opens a new special offer for editing, including all items as the original one.
* **RUN CACHE** button launches a robot which retrieves information about flights from the reservation system. To display the special offer at your front-end, check the *Display* box in the detail of the offer.

1. to edit speciall offer click button **EDIT** (mandatory fields are in bold): 

* **Valid since - till** - time period during which the special offer is shown to customers on your website.
* **Departure since - till** - time period during which departure is possible.
* **Returns since - till** - period during which return is possible.
* Included in the set  -defines which set the special offer belongs to. For example: Europe, Asia, Special offers for up to 5000 etc. You can display special offers on your website based on these sets.

2. Prices and fees settings

* **Use a manually set up fee** - if you don't check this, the service fee is calculated based on the default settings for air ticket service fees.
* **Ticket price** -price of tickets and taxes. The total price of air ticket + taxes is compared with the quote in the GDS, and if the price in the GDS is higher by more than 10 %, such connection will be marked as not available.
* **Service fee** - this is the amount of the service fee, if you checked the option ***Use a manually set up fee***. The special offer can use its own fee that can be the same or different from the fee used for regular search.
* **Service fee for infant in % from common service fee** -  fee for infants. It is defined as a percentual discount from the price for adult passengers.
* **Rounded** - range of rounding.
* **Displayed final price** - the total price, ie. the combination of ***Ticket price*** and ***Service fee***. This price is shown to end customers on your website.

3. Special offer statistics 

* **Laste measurement of cache** - the last time when information about flights has been retrieved.
* **Number of avilability requests** - the number of availability requests sent during the last update of the special offer.
* **Current price from Galileo GDS** - the result of the verification quote. The quote is done regardless of availability. GOL IBE does a maximum of 5 attempts to get a quote, combining days at the beginning of validity of the special offer, then a week later, during weekends etc. to increase the chance of getting a successful quote.
* **Technical note:** The availability information is refreshed based on how the special offer is used by customers. If a customer finds an unavailable combination, it is no longer offered to the next customer. GOL IBE also refreshes the availability information regularly, at least once every 24 hours during the nighttime.

4. Status 

* **Validate by robot** - if checked, the data is automatically refreshed regularly.
* **Display** - the special offer is shown to customers at your front-end.
* **Deactivate if quoted price is incorrect** - GOL IBE gets a verification quote for the special offer (you can see the status in the section *S**pecial offer statistics***. If the price difference is within +/- 10 %, the price is corrected. If the price is outside of this range, for example due to incorrectly set up special offer, and if you activate this option, the offer is not displayed on your website.
* **Automatic special offer** - info if special offer has been created automatically, or not.
* **Cached** -  information whether special offer has been retrieved from the reservation system.
* **Found flights** - whether available flights have been found in the reservation system for the special offer.
* **FQCS Price OK** - whether a quote has been found for the requested range.

5. Restrictions 

Min/Max stay -  here you can restrict certain flights, in this order: 

* **1st field** – a figure defining a number of days, or the text *SU* in case you need to apply the Sunday Rule.
* **2nd field (selection)** – specification for the 1st field, whether you mean days or months.
* **3rd field (selection)** – specification for the whole rule, whether you mean minimum or maximum number of days/months.

You need to define each leg of the journey. Simple connections without transfer, such as VIE-CDG, need to be defined in the section *Forward*  as shown in the picture below. In case of connections with transfer, such as VIE-FRA-CDG, you first need to define the leg VIE-FRA, then click on the button ***Add another flight segment*** ***for the same direction*** and add the second leg FRA-CDG to the new field.

In case of return connections, you need to do the same in the section ***Backward***. You can create the return journey by clicking either on the button ***Add backward route*** where you go through the same process as in case of the forward journey, or the button ***Create backward route automatically*** which will automatically create a mirror version of the forward journey.  

6. Forward - settings 

* **Origin** - IATA code of the departure point.
* **Destination** - IATA code of the arrival point.
* **Marketing carrier** - Carrier shown in availability.
* **Booking classes** - Booking class (RBD).
* **Fare Basis Code** - Fare Basis used for pricing this leg of the flight.
* **Fare Basis Carrier** - code of the carrier to which the Fare Basis belongs (shown in Fare Display). In some cases, another marketing carrier can operate the flight using a Fare Basis of its interline partner.

7. Forward - Bindings 

* **Search together with following** - if checked, availability is verified together with the following segment based on O\&D, ie. for the whole journey. Otherwise, availability is verified for individual segments separately for each part of the journey.
* **Inhibit status link** -  if checked, availability is not verified at the carrier via seamless availability, even if it's possible. If not checked, a higher use intensity can negatively impact the ratio between the number of requests sent to the carrier and the number of bookings, which may lead to sanctions by the carrier.
* **Add +1 day** - if checked,GOL IBE adds one day to the availability verification request. This is useful in special cases of long-haul flights.

How do special offers work? 

1. When you click ***RUN CACHE*** or during the regular night refresh of availability of special offers, GOL IBE creates a calendar based on the settings for the onward and return journey. The calendar shows dates for which the availability information needs to be retrieved. GOL IBE retrieves availability for all days shown in the calendar.
2. **Special offers** are displayed on your website and when the customer clicks on one of them, GOL IBE shows them calendars with highlighted days on which the selected class is available and the date is not restricted by another condition (for example AP).
3. When the customer selects a date in the calendar for the onward journey, GOL IBE checks your settings to see which dates are available for the return journey. Only those are then highlighted. 
4. When the customer selects also a date for the return journey, GOL IBE checks availability for this precise combination of days, gets the fare quote and the final price is compared with the one set up in the back office. If the price is higher by more than 10 % or if there's no availability, GOL IBE returns an error notification. Otherwise the customer continues to the next page where they select specific flights.

**What should you check if speciall offer does not work properly?** 

1. **Does the whole connection exist in neutral availability?**

For example, you may want to create a special offer A20MAYPRGPTY.MAD/IB. If such a connection doesn't exist in neutral availability, the reason may be that such a long transfer flight is not possible in neutral availability. In the back office, this is then usually shown by red crosses at the end of the row with the special offer.

2. **Doesn´t a multi-segment journey include a 1-day shift?**

If the journey consists of multiple segments, the departure date on the second or third segment may be shifted by one day. If that's the case, you have to acknowledge that by checking *Add +1 day* on the *Bindings* tab.

3. **Are selected booking classes available for the special offer?**

For some of the lowest prices, the requested booking classes may no longer be available. Please check in neutral availability which classes are open.

4. **Does a fare exist for the selected carrier?**

If you have a look at the Fare Display by using the FD entry in the reservation system, can you see the selected Fare Basis with the correct carrier code? If the Fare Basis belongs to a carrier other than the marketing carrier, you need to acknowledge that in the field *Fare Basis Carrier*.

5. **Can you simulate the booking using the fare quote via your terminal window?**

If both availability and the fare exist - are you able to create the booking via your terminal window and get a fare quote for it?

**How does special offer look like on front-end?** 

