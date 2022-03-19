---
title: "Google Wave Screen Reader Accessibility"
date: "2009-10-24"
tags: ["Screen readers", "HTML"]
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

Google Wave is the latest innovation in online communication. It's caused a great deal of interest across the industry, and may well herald a new era in online social interaction. It's new, it's cutting edge and it's exciting. It's also a catastrophic accessibility failure for screen reader users.

As [Jared Smith](https://webaim.org/blog/google-wave-preview-accessibility-review/) rightly points out, Google Wave is still in early preview release. It's still in development, with many sections still shown as "under construction". That said, the complete lack of accessibility features does not bode well for the future.

For a screen reader user, the application is impossible to use. The principle navigation links cannot be accessed. They appear as plain text on the page, and no amount of simulating mouse clicks with the screen reader does the trick.

There is no apparent structure to the page. No headings, lists or other useful markup to help make sense of the information. Actually, there is one heading. It's part of the noscript alternative for people without JavaScript enabled, but I'm not sure that counts in the scheme of things.

Visually, I'm told there are a number of panes on the screen. Semantically speaking, that information isn't available to a screen reader user. Other information is also unavailable. For example it doesn't seem possible to see people in the contacts pane, identify messages or read the content of an individual message.

In short, it isn't possible to engage with Google Wave in a meaningful way if you're a screen reader user. The puzzling thing is why it's like this at all.

On their website, Google present 10 principles that contribute to a good user experience. Principle 6 includes the following commitment to accessibility:

> Google is also committed to improving the accessibility of its products. Our desire for simple and inclusive products, and Google's mission to make the world's information universally accessible, demand products that support assistive technologies and provide a useful and enjoyable experience for everyone, including those with physical and cognitive limitations.

So there it is in black and white. A clear statement about Google's approach to accessibility. Surely we can rest easy knowing that when it comes to full release, Google Wave will have assistive technology support and offer everyone a useful and enjoyable user experience?

The trouble is that the evidence isn't there to back this up. Google Chrome, Google Docs and many other Google applications fail abysmally to honour this commitment. With web standards, and emerging technologies such as ARIA, it really doesn't have to be this way though.

Perhaps the preview of Google Wave has brought Google's commitment to accessibility into question again. Certainly a [petition](https://act.ly/nh) urging Google to become leaders in accessible website development is gaining support, and hopefully somewhere, Google are listening.
