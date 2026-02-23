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

## What is Event Delegation in JavaScript? Why is it useful?

- Not attaching separate event listener to every child element, we attach a single listener to the common parent. that is possible to event bubbling, to allow event propagate move from the child up to the parent.
  It's increase to the performance and dynamic of element.

## What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault --> It's stop the browser's default behavior of an element. does not stop the event from bubbling.

- stopPropagation --> It's stop the event from bubbling up or capturing to down.
