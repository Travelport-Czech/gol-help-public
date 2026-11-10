---
title: Customize notifications
order: 5
---
# How to customize notifications in your GOL IBE?

**How to change the text?**

1. Log into GOL IBE.
2. Go to the section **Notification templates**.
3. Choose the notification you would like to amend.
4. Click **EDIT** to change the text.
5. Click **EDIT** on the language version you would like to change.
6. Make changes.
7. Save changes.

**How to change the delivery?**

Delivery means who the notification is sent to.

Next to each notification you will see the list of all recipients.

- **YES** = notification is sent to that recipient.
- **NO** = notification is not sent to that recipient.

An overview of all sent notifications is stored in the section **Notifications → Sent notifications**.

If you would like to see any notification that was sent, click **[SEND TO ME]** next to the notification. The notification will be resent to your mailbox.

**How to avoid notification non-delivery to your clients?**

Due to today's trend of maximum protection against spam, emails sent by GOL IBE on your behalf may not always be delivered to your customers.

Therefore, you need to set your emails / domain as follows:

If you use SPF, please allow our mail server in your domain settings:

**v=spf1 mx mx:golibe.com ~all**

If your domain already has an SPF record, add the following to the existing record:

**include:golibe.com**

Always add this CNAME record to your domain:

**golibe._domainkey.agentura.cz CNAME golibe._domainkey.golibe.com**
