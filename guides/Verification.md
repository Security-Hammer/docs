---
order: 100
author:
    name: Ashutosh
description: Setting up the Verification  in your server.
icon: shield-check
tags: [verification]
---

# Verification

!!!danger Work In Progress
This section is being written.
!!!
### Introduction
Alright, lets get started setting up without wasting time. Before you setup, it's important to know how I work.

- [X] User joins the server is given `Unverified Role`
- [X] They clicks verify button in `Verification Channel`.
- [X] I will then try to DM them captcha and if fail to DM, I will reply the error in channel.
- [X] They will type the given captcha in my DM.
- [X] On correct captcha within given `Time`, they will be verified and 
    - `Unverified Role` will be removed from them.
    - `Verified Role` will be added to them.
- [X] If they fail to do so, they will undergo `Action` set by you.
- [X] If they don't click the verify button,
    - I will wait for `Idle Time` hoping they will click the button.
    - If they don't do so in given time, `Idle Action` will be taken on them, again set by you.

Okay that's lots of  confusing :sparkles: terms :sparkles:. Don't worry, I am here to explain one by one :)

!!!danger Before we start...
I really hope you know how to manage roles, channels and most importantly dealing with their permission. If you don't, refer this video by [!badge icon="device-camera-video" iconAlign="right" text="Y0ken's Domain"](https://www.youtube.com/channel/UC4negHehVJxHKwnxX5dck5g). 

[!button variant="info" target="blank" icon="link-external" text="Youtube"](https://www.youtube.com/watch?v=X1MGtTJWytg)
!!!

### Unverified Role
When a user joins your server, they will be given `Unverified Role` which will restrict them to see channels and their content. I will shortly discuss how to set them up. But you might be wondering now, what if I have *Membership Gating* which will be bypassed if user is given role?  That's correct, that's why I will auto-adapt if there is any sort of gating. So, if there is one I will wait for them to complete the membership, and then give them unverified role otherwise I will add the role directly.

##### Setting up Unverified Role


In short, it is role given to new users joining which will prevent them from seeing the channels.