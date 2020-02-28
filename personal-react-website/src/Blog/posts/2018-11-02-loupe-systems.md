---
date: "2018-11-02"
title: "Loupe Conference (Part V): Mina Markham on her learnings from building Design Systems"
description: "Mina Markham built Pantsuit for the Hilary Clinton campaign, and Spacesuit for #Slack. (I spot a theme here...) She took us through her learnings from building these pivotal design systems."
author: "Sebastian Bailey"
fileName: "2018-11-02-loupe-systems.md"
keywords:
    - framer
    - thoughts
    - design systems
---

[Back to overview](2018-09-26-loupe-intro)

Design Systems is a buzzword right now, there's no denying that. Everyone wants to get in on the action, and tools like Framer X are making building these systems easier. So it's no suprise that one of the speakers at Loupe was a Design Systems advocate, and has worked on some notable projects.

Mina Markham teaches for #blackgirlscode and has worked in Design Systems for some time. She worked on the Hilary Clinton presidential campaign, and helped to systemise the beast that is Slack.

### Her learnings

Her talk was focused on 4 key learnings from her time building these systems, sharing mistakes and success stories, and explaining some of the decisions made along the way.

## 1. There is no "right way" to create a Design System

Every system is different. There are systems that are designed and built to allow for huge customisation, and there are systems that are strict and specific to the brand they have been built for.

When building a Design System, you need to ask yourself, who is going to be using this system? How much customisation do I want to give the designers and developers? Is it for a specific brand or is it more of a generic system?

With the many different ways a system can be built, there's no surprise there are many different ways of building out a system. It is still very early days in experimenting with the real power and capability of a decent Design System, so there is inherently no "right way" of doing things.

We need to build our systems with the product or brand in mind. We need to tailor the needs of the system to the applications of it.

There are obviously some hard and fast suggestions and rules to a decent design system, but there are so many different applications of them, that in essence, it's up to the creators and contributors to how it works.

## 2. Keep it simple

This was more of a learning and a suggestion on Mina's part. 

There can be a time and a place for a more comprehensive and in-depth system, but generally speaking, you want to try and keep the system as simple as possible.

Through her time working on Spacesuit, Mina found that there were some similar components on the home page that had been created separately. It was only upon looking at the whole that she realised they could have been merged into a single component.

My key learning from this was that a system shouldn't be created at a micro level. You need to take the whole picture into account.

Before you dive into building your system, take a look at your existing components and structure. Group everything that is similar and could potentially be merged into a single component.

That doesn't necessarily mean however that everything has to be exactly the same. A component should be simple. but robust enough to allow for any necessary customisations.

## 3. Share your toys

The earlier you share your Design System with your team, and get them using it, the better.

No Design System should be built in silo. It is to be used by the team eventually, so the teams input is the most important feedback you can get when building it out.

Get the team using it early, so you can spot problems, bugs, and missing components earlier too. This reminds me of Nathan Curtis' <a href="https://medium.com/eightshapes-llc/designing-a-systems-team-d22f27a2d81d" target="_blank">article of building out a systems team,</a> and how a team shouldn't work on their own, but it should consist of the core team, but with engineers and designers rotating in and out from other product teams within the larger company. This way, you get different opinions and feedback from the people that are actually using it, meaning you can spot and fix issues quickly.

## 4. Empower the industry

One of the great things about the Design System community is the constant need to open source and share our systems. Like I mentioned above, Design Systems are still growing and there is a lot of experimentation still to be done, and sharing our systems and thinking with the world is the quickest way to help each other learn and make our systems better.

Mina mentioned that open sourcing is of course a great thing, but there can also be detrimental fallbacks to open sourcing your system. She used an advert that was supposedly built by the Hilary Clinton campaign during the US presidential election. At first glance it looked like it could be a genuine Clinton ad, (even though the content was questionable), but comparing it to a real one, you could spot subtle differences.

It was an obvious deception technique, built to trick people. Some people fell for it, but it was a poor enough copy that a lot of people saw right through it. But if the system was open sourced, and the designers who built the copy had access to the core components, the copy would have been a lot better, and could have had severe implications.

This isn't to say that you shouldn't open source anything though. It is always great to share brand guidelines, basic components and code that anyone could find by inspecting an element - there's no use in hiding that.

The thinking behind building a Design System is always changing too, and simply posting an article on how the system was built is in no way going to be detrimental to the brand or product.

Basically, share as much as you can, as early as you can, and it will always be beneficial to the system and the product.