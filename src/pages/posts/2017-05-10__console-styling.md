---
path: "/posts/styling-the-console"
date: "10 May 2017"
title: "Styling the Browser Console"
---

If you open your browser's developer console while on this page, you'll notice this styled console statement.

It only takes one line of JavaScript to accomplish this:

```js
console.log(
  "%c💁🏻 Hello there!",
  "color: #8971d0; font-size: 14px; font-weight: 700; padding: 4px; border: 2px solid #8971d0;"
);
```

The first argument includes the text I want to style (preceded by the "%c" directive), and the second argument includes the actual styles. **Note that the %c directive in the first argument is important**, because it marks the beginning of the styled span of text.

If you want to read more about styling your console (including using build-in methods other than console.log - such as console.error or console.info), check out [Mozilla's console documentation](https://developer.mozilla.org/en-US/docs/Web/API/console).
