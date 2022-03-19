---
title: "Jaws, IE & the Forms region bug"
date: "2013-07-31"
tags: ["Screen readers", "ARIA", "HTML", "Screen readers"]
categories: "Code things"
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

There is an unusual problem with Jaws and Internet Explorer that causes the word "region" to be announced before every field in a form. Fortunately there is a workaround until the problem itself is resolved.

The situation arises when you have a form inside a container with `role="main"` applied to it. For example:

```html
<div role="main">
  <form method="post">

    <div>
      <label for="username">Username: </label><br> 
      <input type="text" id="username">
    </div>

    <div>
      <label for="password">Password: </label><br>
      <input type="password" id="password">
    </div>

    <div>
      <input type="submit" value="Log in">
    </div>

  </form>
</div>
```

The problem occurs in Internet Explorer 8, 9 and 10 (and possibly older versions too). It first appeared with Jaws 13 and persists in Jaws 14.

In an added twist the problem only happens when Jaws verbosity is set to beginner (the default) or intermediate. If verbosity is set to advanced the erroneous announcements don't happen.

There is a workaround that stops Jaws from doing this. Ordinarily it's good to be cautious about hacking around user agent bugs, but in this case it isn't too much of a dirty hack. Just add `role="form"` to the form element.

```html
<div role="main">
  <form role="form" method="post">
    ...

  </form>
</div>
```

It shouldn't be necessary to do this. The role maps to the element natively in HTML anyway. In this case though, adding `role="form"` directly in the HTML doesn't break the natural semantics of the page, and it won't cause any backwards/forwards compatibility issues either.
