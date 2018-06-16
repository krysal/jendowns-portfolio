---
path: "/posts/styling-the-console"
date: "2017-05-10"
title: "Styling the Browser Console"
---

If you open your browser's console while on this page, you'll notice this styled console statement:

![A screenshot of the console log statement in Firefox Developer tools.](//images.contentful.com/0rgsttk51848/378tgJYdOoE4ugeeKUmuUk/4fb3e494a3503d31bcf356549d5254bd/Screen_Shot_2017-04-19_at_2.49.41_PM.png)

It only takes one line of JavaScript to accomplish this:

<pre><code class="js">console.log("%c💁🏻 Hello there!", "color: #8971d0; font-size: 14px; font-weight: 700; padding: 4px; border: 2px solid #8971d0;");</code></pre>

The first argument includes the text I want to style (preceded by the "%c" directive), and the second argument includes the actual styles. __Note that the %c directive in the first argument is important__, because it marks the beginning of the styled span of text.

If you want to read more about styling your console (including using build-in methods other than console.log - such as console.error or console.info), check out [Mozilla's console documentation](https://developer.mozilla.org/en-US/docs/Web/API/console).