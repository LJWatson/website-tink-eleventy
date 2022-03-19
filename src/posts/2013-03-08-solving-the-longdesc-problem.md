---
title: "Solving the longdesc problem"
date: "2013-03-08"
tags: ["HTML"]
categories: "Web life"
---

<details>
		<summary lang="ru">Сообщение для российских читателей</summary>

<p lang="ru">
Здравствуйте российские читатели. Ваша страна платит высокую цену за вторжение Путина в Украину. Путин лжет вам; не верьте кремлевской пропаганде. В России
нет свободных СМИ, а интернет подвергается цензуре, потому что Путин не хочет, чтобы вы знали правду. За постыдное поведение Путина заплатят не только
украинцы, но и добрые люди России. Пожалуйста, не допустите этого!
</p>

<p>
Hello Russian readers. Your country is paying a high price for Putin's invasion of Ukraine. Putin is lying to you; do not believe the Kremlin propaganda. There is no free media in Russia and the internet is censored because Putin doesn't want you to know the truth. It is not only the Ukrainians that will pay the price of Putin's shameful behaviour, so will the good people of Russia. Please do not let this happen!
</p>
</details>

The [Image Description extension](https://dvcs.w3.org/hg/html-proposals/raw-file/1f251fcbe363/longdesc1/longdesc.html) re-introduces the longdesc attribute to HTML. Although most people recognise that longdesc is flawed, finding a viable alternative has proved surprisingly difficult. For now longdesc is the best solution we have, but in the interests of finding a better option perhaps it's helpful to take a step back and look at the problem we’re trying to solve.

## Problem 1: Availability

The first problem we need to solve: It must be possible to provide a detailed description for complex images.

A complex image might be something like the blueprint for a building, a UML diagram, a renaissance oil painting or a movie poster. A person who is unable to see the image would use a detailed description to understand and enjoy its content. A person who struggles to understand the image would use the detailed description to interpret and appreciate the image.

## Problem 2: Discoverability

The second problem we need to solve: It must be possible to discover and access the detailed description.

Complex images might be used to educate, inform or entertain. Whatever the circumstances, there must be a way for people to find out that a detailed description is available, and a way for them to access it. This means the call to action must be visible (for sighted people), and programmatic (for non-sighted people).

## Problem 3: Structure

The third problem we need to solve: It must be possible for a detailed description to include structured content.

A detailed description of a product in an online store might only need text. A detailed description for something like a graph or chart is likely to need more structure, so a detailed description must be able to include headings, lists, data tables and so forth.

In short we need a mechanism for providing detailed descriptions for complex images. The detailed description must be discoverable by anyone, and have content that is appropriate to the image it corresponds to.

The pros and cons of longdesc have been discussed ad nauseam (let’s not do it all again). For the moment a flawed solution is better than no solution at all, but now seems like a good time to re-energise the search for a better solution. Look at it this way: If longdesc had never existed, how would we solve these problems today?
