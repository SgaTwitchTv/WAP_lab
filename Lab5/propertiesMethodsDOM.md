# Basic DOM Methods and Properties 

## Selection & Navigation

| Method | Description | Example |
|--------|--------------|----------|
| `document.getElementById(id)` | Returns **one element** by its `id`. | `const form = document.getElementById("signinForm");` |
| `document.getElementsByClassName(class)` | Returns a **live HTMLCollection** of all elements with that class. | `const inputs = document.getElementsByClassName("formField");` |
| `document.getElementsByTagName(tag)` | Returns all elements with that tag (e.g. `div`). | `const divs = document.getElementsByTagName("div");` |
| `document.querySelector(selector)` | Returns the **first element** matching a CSS selector. | `const email = document.querySelector("#email");` |
| `document.querySelectorAll(selector)` | Returns **all elements** matching the selector (NodeList). | `const inputs = document.querySelectorAll("input[type='text']");` |
| `element.closest(selector)` | Finds the nearest matching ancestor. | `button.closest("form");` |
| `element.parentElement` | Direct parent node of an element. | `input.parentElement;` |
| `element.children` | All child elements. | `div.children;` |
| `element.nextElementSibling` | The next sibling element. | `input.nextElementSibling;` |
| `element.previousElementSibling` | The previous sibling element. | `input.previousElementSibling;` |

---

## DOM Manipulation

| Method | Description | Example |
|--------|--------------|----------|
| `element.textContent` | Gets/sets text content (no HTML). | `label.textContent = "New Label:";` |
| `element.innerHTML` | Gets/sets inner HTML markup. | `div.innerHTML = "<b>Hello!</b>";` |
| `element.setAttribute(name, value)` | Adds or updates an attribute. | `input.setAttribute("placeholder", "Enter name");` |
| `element.getAttribute(name)` | Gets an attribute’s value. | `input.getAttribute("type");` |
| `element.removeAttribute(name)` | Removes an attribute. | `input.removeAttribute("disabled");` |
| `element.classList.add(name)` | Adds a class. | `input.classList.add("error");` |
| `element.classList.remove(name)` | Removes a class. | `input.classList.remove("error");` |
| `element.classList.toggle(name)` | Adds if missing, removes if present. | `div.classList.toggle("active");` |
| `element.style.property` | Sets inline styles. | `button.style.backgroundColor = "red";` |
| `document.createElement(tag)` | Creates a new element (not in DOM yet). | `const p = document.createElement("p");` |
| `parent.appendChild(child)` | Adds child at the end of parent. | `form.appendChild(p);` |
| `element.remove()` | Removes the element from the DOM. | `input.remove();` |

---

## Event Handling

| Method | Description | Example |
|--------|--------------|----------|
| `element.addEventListener(event, handler)` | Attaches an event handler. | `button.addEventListener("click", handleClick);` |
| `element.removeEventListener(event, handler)` | Removes a listener. | `button.removeEventListener("click", handleClick);` |
| `event.preventDefault()` | Stops default browser action (e.g. form submit). | `event.preventDefault();` |
| `event.stopPropagation()` | Stops event from bubbling to parents. | `event.stopPropagation();` |
| `event.target` | The element that triggered the event. | `console.log(event.target.id);` |
| `event.currentTarget` | The element the listener is attached to. | `console.log(event.currentTarget.id);` |
| `event.type` | Type of the event (e.g. "click")| `console.log(event.type);` |
---

## Form-Specific Methods

| Method | Description | Example |
|--------|--------------|----------|
| `form.reset()` | Clears all form fields. | `form.reset();` |
| `form.submit()` | Submits form programmatically. | `form.submit();` |
| `input.focus()` | Sets cursor focus on input. | `email.focus();` |
| `input.blur()` | Removes focus from input. | `input.blur();` |
| `input.value` | Gets/sets current input value. | `nameInput.value = "John";` |

# Working with select, radio, checkbox

## Select & Options 

> `select` refers to an HTML `<select>` element  
> e.g. `const select = document.querySelector("select");`

| Property / Method | Description | Example |
|------------------|-------------|----------|
| `select.options` | Collection of **all `<option>` elements** inside the `<select>` (selected and unselected). | `select.options` |
| `option.selected` | Boolean property of a **single `<option>`**. `true` if the option is **currently selected**. | `option.selected` |
| `select.selectedOptions` | Collection of **only selected `<option>` elements**. Automatically filtered. | `select.selectedOptions` |
| `select.selectedIndex` | Index of the **first selected option** in `select.options`. For single-choice select it always returns one value. | `select.selectedIndex` |
| `select.value` | `value` of the **first selected option**. Correct for **single select only**. | `select.value` |
| `option.value` | `value` of a **single `<option>`**. | `option.value` |
| `option.hasAttribute("selected")` | Checks if the option had `selected` in the **HTML markup** (default state). | `option.hasAttribute("selected")` |

---

### Iterating over option collections

- `select.options` ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/options))  
  and `select.selectedOptions` ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions))  
  are **iterable collections**
- Their size can be checked using the `length` property
- They are **not arrays**
- They can be used in `for...of` loops
- Iteration reflects the **current state** of the select

```js
for (const option of select.options) {
  console.log(option.value, option.selected);
}
```

## Radio Buttons

> Radio buttons are `<input type="radio">` elements.  
> All radio buttons that share the **same `name` attribute** belong to one group,  
> and within that group **only one radio button can be selected at a time**.
>
> `radioInput` refers to a single `<input type="radio">` element  
> e.g.  
> `const radioInput = document.querySelector("input[type='radio'][name='size']");`

| Property / Method | Description | Example |
|------------------|-------------|----------|
| `radioInput.checked` | Boolean indicating whether **this radio input element** is currently selected. | `radioInput.checked` |
| `radioInput.value` | Value associated with **this radio input element**. | `radioInput.value` |
| `:checked` selector | CSS selector used to **query the selected radio input** within a group. | `document.querySelector("input[type='radio'][name='size']:checked")` |

---

### Reading the selected radio button

```js
// read button value or return null if none is selected
const value = radioInput ? radioInput.value : null;
```


---
## Checkboxes

> `checkboxInput` refers to an HTML `<input type="checkbox">` element  
> e.g. `const checkboxInput = document.querySelector("input[type='checkbox']");`
>
> Each checkbox has its **own independent checked state**.  
> When multiple checkboxes share the **same `name` attribute**, they form a logical group
> and **more than one checkbox can be selected at the same time**.

| Property / Method | Description | Example |
|------------------|-------------|----------|
| `checkboxInput.checked` | Boolean indicating whether **this checkbox input** is currently checked. | `checkboxInput.checked` |
| `checkboxInput.value` | Value associated with **this checkbox input** (used only if checked). | `checkboxInput.value` |
| `document.querySelector(...)` | can return **one checkbox element** (first match). | `document.querySelector("input[type='checkbox']")` |
| `document.querySelectorAll(...)` | can return a **NodeList of checkbox inputs**. | `document.querySelectorAll("input[type='checkbox'][name='skills']")` |
| `:checked` selector | Filters the collection to **only checked checkboxes**. | `document.querySelectorAll("input[type='checkbox'][name='skills']:checked")` |

---

### Return (single vs multiple)

- **Single checkbox**
  - `document.querySelector(...)`: one `HTMLInputElement` is returned
  - `.checked`: returns `true / false`
  - `.value`: value which does not indicate selection

- **Multiple checkboxes (same name)**
  - `document.querySelectorAll(...)`:`NodeList` of all checkboxes
  - `document.querySelectorAll(...:checked)`: `NodeList` of checked checkboxes
  - if none are checked: empty `NodeList` is returned

---

### Iterating over checkbox collections

- `document.querySelectorAll(...)` returns a **NodeList** [MDN NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).
- NodeLists are **iterable collections** and expose the `length` property.
- iteration can be done using `for...of`.
- iteration reflects the **current checked state** of each checkbox.

```js
const checkboxCollection =
  document.querySelectorAll("input[type='checkbox'][name='skills']");

for (const checkboxInput of checkboxCollection) {
  console.log(checkboxInput.checked);
}
```