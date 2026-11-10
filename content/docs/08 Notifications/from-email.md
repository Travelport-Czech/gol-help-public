---
title: Customize from-email section
order: 6
videos:
  -
    label: How to set up the notification sender
    youtubeId: Z2I0WfBKx4Q
---
# How to customize section From e-mail:?

In case there is appearing some other e-mail address in notification in section **From e-mail:** 

it means that there is some kind of security system set up on your side.

If you would like to have this section customized it is neccessary to do the following:

1. **If you are using SPF**

You have to allow our mailserver in the setting of your domain :

**v=spf1 mx mx:golibe.com\~all**

 

2. **If your domain has got SPF record**

You have to add SPF into that record the following way:

**include:golibe.com**

 

Allways add CNAME record into the domain:

**golibe.\_domainkey.agentura.cz CNAME golibe.\_domainkey.golibe.com**
