# How to set up working hours?

**What is this section about?**

This section allows you to set up your agency’s working hours. This setup prevents customers from making bookings that your agents wouldn’t be able to e-ticket because they are out of the office (outside working hours).

We highly recommend using one of the integrated payment gateways and enabling automated e-ticketing. Alternatively, you can set up notifications and monitor bookings outside of working hours to maximize ticket sales.

**How to Manage This Section:**

1. Log in to the admin console.
2. Go to **Agency - Working Hours**.
3. Click **Edit**.
4. Configure your agency’s business hours.
5. Save changes.

The example setup means that the agency will handle all bookings from 9:00 am to 8:00 pm, Monday through Friday, with a half-hour lunch break each day. Bookings are not handled on Saturdays and Sundays.

**Setting Up Working Hours: How It Works**\
This setup protects against situations where a customer books a ticket at, for example, 8:05 pm when your office closes at 8:00 pm. If the booking needs to be e-ticketed the same day, no staff would be available after 8:00 pm. The same applies to weekends and other non-working days. Your working hours are always compared to the last ticketing date.

The last ticketing date displayed to customers is determined by fare conditions (which can be limited in settings). Thanks to the working hours setup, this date is restricted to times when your agency is open, ensuring sufficient time for e-ticketing.

For this feature to function properly, it's also necessary to define how much time each payment method requires within working hours to process a transaction. The default setting is 1 hour. By adjusting this setting, you can control which payment methods are offered as the last ticketing date approaches. For instance, if you want tickets to be issued immediately on the booking date, you can set a higher time requirement for other payment methods so they aren’t offered at all.

**Possible Scenarios:**

1. **Booking Within Working Hours:**\
   The customer books a ticket, and there is enough time within your working hours to process and issue the ticket. The booking proceeds smoothly.
2. **Some Payment Methods Available:**\
   The customer books a ticket, but different payment methods require varying amounts of time to process bookings. Only the methods that can be used within your working hours are offered to the customer.
3. **No Available Payment Methods:**\
   None of the payment methods allows the ticket to be issued within your working hours. In this case, GOL IBE does not allow the booking to be completed, and the customer is notified. This notification can be customized in the GOL IBE back office under **Supporting Texts**.

**Customizing Standard Working Hours - Public Holidays and Exceptions**\
To define exceptions to your standard working hours, such as public holidays or other days when your agency is closed:

1. Go to **Agency - Working Hours Modifications**.
2. Manually define public holidays and other non-working days, as there is currently no automated code list for public holidays.

If you set only a date, it means that your agency will be closed for the entire day. 

If you set a time (From, To), you limit your working hours on that specific day to the defined time period only.

To get to know more just feel free to see our video help :

[A bit about section Working hours](https://youtu.be/8WDPaH_ZJOk)

> If you set only a date, it means that your agency is closed whole day. If you set time Since - Till, you limit your working hours on that day only to the defined period of time.
