## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById --> It's select only ID and return a single element. It's very fastest method to get element. if element not found then return null.

- getElementsByClassName --> It's select class name and return HTML collection. if the DOM element change then automatic live update this element.

- querySelector --> This is a css selector and return first match element. this is highly flexible but slower then getElementById method.

- querySelectorAll --> This is a css selector and return NodeList. it's support .forEach() directly.
