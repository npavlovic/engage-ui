
import { IDocument } from '../../Types';
import AccessibilityExample from '../../examples/AccessibilityExample/AccessibilityExample';
// import ButtonGroupExampleSecond from '../../examples/ButtonGroupExample/ButtonGroupExampleSecond';
// const ButtonGroupExampleFirstCode = require('!raw-loader!../../examples/ButtonGroupExample/ButtonGroupExampleFirst') as string;
// const ButtonGroupExampleSecondCode = require('!raw-loader!../../examples/ButtonGroupExample/ButtonGroupExampleSecond') as string;

const exampleCode = `Code Examples:
1. What should I keep in mind when building accessible components using React?
If you’re building some kind of React application, you might want to pass down a string via props, so you can give developers freedom to specify their aria attributes.
<Button accessibilityLabel={'I am a button!'}>Hello</Button>
<button
 type={type}
 onClick={onClick}
 onFocus={onFocus}
 onBlur={onBlur}
 onMouseUp={handleMouseUp}
 className={className}
 disabled={disabled}
 aria-label={accessibilityLabel}
 style={style}
>

2. What is the most straightforward way to get a screen reader to read something that isn’t displayed?
You might find yourself in a situation where you want a screen reader to say something, but you haven’t found an elegant way of specifying it using aria attributes. For instance, you might have a chip that can be deleted but you don’t want to write “Press delete to delete this chip” on the chip. Here’s my favorite solution:
<button key="2">
 I am a button
 <span style="
   overflow: hidden;
   width: .01px;
   position: absolute;">
   I CAN ONLY BE READ BY A SCREEN READER!
 </span>
</button>
Just wrap the text to be read in a span and add a class with those attributes. The screen reader will read it, but the text won’t interfere with the visual aspect. Genius!

Here’s a demo that you can test out using a screen reader: https://codepen.io/jonaman11/pen/ZXjVVz

3. How do I get the screen reader to read the order of an item?
Any time you have a list of items, add a role=”listbox” attribute for the container and a role=”option” for every individual item. The screen reader will recognize how many items there are, and the order of the one you selected.

If you’d like, you can also add an aria-selected attribute that toggles between true and false based on if it’s selected or not.

Here’s a demo:

<ul role="listbox">
 <li id="ss_opt3" role="option" class="">
   Cats
 </li>
 <li id="ss_opt4" role="option">
   Dogs
 </li>
 <li id="ss_opt5" role="option">
   Alligators
 </li>
 <li id="ss_opt6" role="option">
   Hamsters
 </li>
</ul>

Codepen example: https://codepen.io/jonaman11/pen/KXBEXv

4. using aria-live. When to use and examples of differences

5. using aria-hidden
6. using aria-expanded
`;

const Accessibility: IDocument = {

  exampleCode,
  id: 'accessibility',
  heading: 'Accessibility Example',
  subheading: 'This is where we talk about accessibility',
  // property: [
  // ],
  exampleComponent: AccessibilityExample,
};

export default Accessibility;
