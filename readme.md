## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById --> It's select only ID and return a single element. It's very fastest method to get element. if element not found then return null.

- getElementsByClassName --> It's select class name and return HTML collection. if the DOM element change then automatic live update this element.

- querySelector --> This is a css selector and return first match element. this is highly flexible but slower then getElementById method.

- querySelectorAll --> This is a css selector and return NodeList. it's support .forEach() directly.

## How do you create and insert a new element into the DOM?

- Add a new element to the DOM , follow 3 step -

- create element --> document.createElement()
- set text or attribute --> document.createElement().innerText or classList.add().
- parent inside the child --> appendChild()

## What is Event Bubbling? And how does it work?

- Event Bubbling is behavior a JavaScript. where event (click) triggered an child element propagates of parent, grandparent etc.
  Event move from the bottom to the top of the DOM propagate.
