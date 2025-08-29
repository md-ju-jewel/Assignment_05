1.getElementById → we use this to grab an element by its id, and it always gives only one element.

getElementsByClassName → with this, we can grab many elements that share the same class, and it comes back like an array.

querySelector → this one gives us the first element that matches our selector (id, class, attribute, etc.).

querySelectorAll → this one gives us all the elements that match our selector (id, class, attribute, etc.) in a list.
   
2.create a textarea element :
const textarea = document.createElement("textarea");

put it inside the body:
document.body.appendChild(textarea);


3.Event bubbling means when we do an event, like a click, it first works on that element. Then the same event moves up to its parent, then again to the parent’s parent, and it keeps going until it reaches the top (document). It’s called bubbling because the event goes upward step by step, just like a bubble floating up.

4.Event Delegation means we put an event listener on a parent element to handle events for all the child elements
For that we do not need to add event listener to every child element.

5.Using preventDefault() we can stop the default action of an element.
Using stopPropagation() we stop bubbling to parent element.
