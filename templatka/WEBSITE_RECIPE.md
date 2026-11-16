# Build a website from scratch

A copy-paste recipe for a two-page practice site. Follow the numbered steps in order. Each code block tells you which file it belongs in. Build the sample once, then change its content, controls, and calculations to suit the next assignment.

## 1. Create the files and start both HTML pages

Use a fresh practice folder. This matches the layout of the template project, with `index.html` as the home page name.

```text
practice/
  stronka/
    index.html
    style.css
    script.js
    header.png
  formik/
    form.html
    style.css
    script.js
```

Copy the template's `header.png` into `stronka/`. Use this shell for **both HTML files**. In `form.html`, change the title to **Order a product**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Web Programming Course</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <!-- Add this page's main content here. -->
    </main>
</body>
</html>
```

- `<!DOCTYPE html>` enables standards mode. `lang` identifies the page language.
- The `<head>` contains settings, the browser-tab title, and linked files. Visible content goes in `<body>`.
- The viewport setting lets the page use the device width on phones. UTF-8 supports characters such as `Ł` and `©`.
- Each `href="style.css"` uses the stylesheet beside its own HTML file. One folder up is `../`. If you keep the current template name `tab.html`, use that name in any links that point back to it.

## 2. Build the home page navigation, header, sections, and footer

In **`stronka/index.html`**, insert the header below immediately before `<main>`. Replace the comment inside `<main>` with the two sections. Insert the footer after `</main>`.

```html
<!-- FIND: HEADER / NAVIGATION / DROPDOWN -->
<header id="top" class="page-header">
    <h1>Web Programming Course</h1>
    <p>HTML, CSS, and JavaScript exercises.</p>

    <nav aria-label="Main navigation" class="nav-links">
        <div class="menu">
            <a href="#resources">Resources ▾</a>
            <div class="menu-submenu">
                <a href="#books">Books</a>
                <a href="#examples">Examples</a>
            </div>
        </div>
        <a href="../formik/form.html">Order form</a>
    </nav>
</header>
```

```html
<!-- FIND: MAIN CONTENT / HEADING HIERARCHY -->
<section id="resources">
    <h2>Resources</h2>
    <p>Start with the <strong>HTML structure</strong>, then add styles.</p>

    <section id="books">
        <h3>Books</h3>
        <!-- Add the lists from Step 3 here. -->
    </section>
</section>

<section id="examples">
    <h2>Examples</h2>
    <!-- Add the image and table from Step 3 here. -->

    <button type="button" id="tip-button" aria-controls="tip" aria-expanded="false">
        Show study tip
    </button>
    <p id="tip" hidden>Check the browser console when JavaScript stops working.</p>
</section>
```

```html
<!-- FIND: FOOTER / BACK TO TOP -->
<footer class="container">
    <p>© Web Programming Course</p>
    <a class="go-top" href="#top">Back to top ↑</a>
</footer>
```

`<header>` introduces the page, `<nav>` groups navigation links, `<main>` holds the primary content, and `<section>` groups a topic under a heading. Use `h1` for the page title, `h2` for its sections, and `h3` for subsections. A fragment link like `#books` jumps to the matching `id` on this page. An absolute URL points to another website. Use a `<button>` for an action on this page and an `<a href="...">` to navigate.

## 3. Add lists, an image, and a table

Paste the lists into **Books**. Use `ul` for unordered items and `ol` when the sequence matters. Each item is an `li`. `cite` marks the title of a work, `strong` marks importance, `em` marks emphasis, and `br` gives a line break within content.

```html
<!-- FIND: LIST / UL / OL / EXTERNAL LINK -->
<ul>
    <li><cite>HTML and CSS</cite></li>
    <li><a href="https://developer.mozilla.org/">MDN Web Docs</a></li>
</ul>
<ol>
    <li>Build the HTML.</li>
    <li>Add CSS and test at two widths.</li>
</ol>
```

Paste these into **Examples**, before the tip button.

```html
<!-- FIND: IMAGE / FLOAT / CLEAR -->
<p>
    <img class="float-demo" src="header.png" alt="">
    An image can sit alongside the text of a paragraph. Add enough text
    here to see it wrap down the right side and continue underneath the
    image when it reaches the bottom.
</p>
<p class="clear-demo">This paragraph starts below the image.</p>

<!-- FIND: TABLE / CAPTION / ROWSPAN / COLSPAN -->
<table>
    <caption>Practice schedule</caption>
    <thead>
        <tr>
            <th scope="col">Stage</th>
            <th scope="col">Topic</th>
            <th scope="col">Exercise</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">Markup</td>
            <td>HTML</td>
            <td>Page structure</td>
        </tr>
        <tr>
            <td>Forms</td>
            <td>Labels and inputs</td>
        </tr>
    </tbody>
    <tfoot>
        <tr><td colspan="3">Two exercises</td></tr>
    </tfoot>
</table>
```

`src` is relative to the HTML file. Use meaningful `alt` text for an informative image and `alt=""` for a decorative one. Wrap an image in an anchor to make it clickable. In the table, `tr` is a row, `th` is a header cell, and `td` is a data cell. The first data cell spans two rows, so the next row already has its first column occupied. `colspan="3"` spans the full width of this table. Use `<colgroup><col span="3"></colgroup>` after the caption if you need to group columns for styling.

## 4. Build the complete form

Replace the comment inside `<main>` in **`formik/form.html`** with this block. Keep the IDs if you intend to paste the JavaScript as written.

```html
<h1>Order a product</h1>
<p><a href="../stronka/index.html">Back to the website</a></p>

<!-- FIND: FORM / POST / FILE ENCODING -->
<form id="order-form" method="post" enctype="multipart/form-data" autocomplete="off">
    <!-- FIND: FIELDSET / PERSONAL INFORMATION -->
    <fieldset class="personal-info">
        <legend>Personal information</legend>
        <div class="form-row">
            <label for="full-name">Full name</label>
            <input type="text" id="full-name" name="full_name"
                   placeholder="e.g. Jane Kowalska" autocomplete="name" required>
        </div>
        <div class="form-row">
            <label for="user-email">Email</label>
            <input type="email" id="user-email" name="user_email"
                   autocomplete="email" required>
        </div>
        <div class="form-row">
            <label for="dial-code">Dialing code</label>
            <input type="tel" id="dial-code" name="dial_code" value="+48" readonly>
        </div>
        <div class="form-row">
            <label for="phone-number">Phone number</label>
            <input type="tel" id="phone-number" name="phone_number" placeholder="123 456 789">
        </div>
        <div class="form-row">
            <label for="user-password">Password</label>
            <input type="password" id="user-password" name="user_password"
                   autocomplete="new-password" required
                   pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}"
                   title="Use 8 or more characters with an uppercase letter, a lowercase letter, and a digit.">
        </div>
        <!-- FIND: CHECKBOX / INDEPENDENT CHOICE -->
        <div class="form-row form-row--choice">
            <input type="checkbox" id="create-account" name="create_account" value="yes">
            <label for="create-account">Create account</label>
        </div>
    </fieldset>

    <!-- FIND: RADIO / SAME NAME / DEFAULT CHECKED -->
    <fieldset>
        <legend>Warranty period</legend>
        <div class="form-row form-row--choice">
            <input type="radio" id="warranty-12" name="warranty_period" value="12" checked>
            <label for="warranty-12">12 months</label>
        </div>
        <div class="form-row form-row--choice">
            <input type="radio" id="warranty-24" name="warranty_period" value="24">
            <label for="warranty-24">24 months</label>
        </div>
    </fieldset>

    <fieldset>
        <legend>Product details</legend>
        <!-- FIND: SELECT / OPTGROUP / PLACEHOLDER OPTION -->
        <div class="form-row">
            <label for="product-type">Product type</label>
            <select id="product-type" name="product_type" required>
                <option value="" disabled selected hidden>Choose a product</option>
                <optgroup label="Electronics">
                    <option value="keyboard">Keyboard</option>
                    <option value="monitor">Monitor</option>
                </optgroup>
                <optgroup label="Accessories">
                    <option value="mouse-pad">Mouse pad</option>
                    <option value="laptop-stand">Laptop stand</option>
                </optgroup>
            </select>
        </div>
        <!-- FIND: INPUT FIELD NUMBER / OUTPUT -->
        <div class="form-row">
            <label for="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity"
                   min="1" max="10" step="1" value="1" required>
            <output id="order-total" for="product-type quantity">—</output>
        </div>
        <!-- FIND: SELECT MULTIPLE / TAGS -->
        <div class="form-row">
            <label for="tags">Tags</label>
            <select id="tags" name="tags" multiple size="3">
                <option value="gift">Gift</option>
                <option value="office">Office</option>
                <option value="gaming">Gaming</option>
            </select>
        </div>
        <!-- FIND: INPUT FIELD RANGE / BUDGET -->
        <div class="form-row">
            <label for="budget">Budget in PLN</label>
            <input type="range" id="budget" name="budget"
                   min="0" max="500" step="10" value="100">
            <output id="budget-output" for="budget">100 PLN</output>
        </div>
        <!-- FIND: DATALIST / TEXT SUGGESTIONS -->
        <div class="form-row">
            <label for="maker">Maker</label>
            <input type="text" id="maker" name="maker" list="maker-options">
            <datalist id="maker-options">
                <option value="Dell"></option>
                <option value="Logitech"></option>
            </datalist>
        </div>
        <!-- FIND: TEXTAREA / FILE UPLOAD -->
        <div class="form-row">
            <label for="description">Description</label>
            <textarea id="description" name="description"
                      rows="4" cols="30" maxlength="300"></textarea>
        </div>
        <div class="form-row">
            <label for="product-photo">Photo</label>
            <input type="file" id="product-photo" name="product_photo" accept="image/*">
        </div>
    </fieldset>

    <fieldset>
        <legend>Delivery</legend>
        <!-- FIND: INPUT FIELD DATE / SHIPPING -->
        <div class="form-row">
            <label for="order-date">Order date</label>
            <input type="date" id="order-date" name="order_date"
                   min="2026-01-01" max="2027-12-31" required>
        </div>
        <div class="form-row">
            <label for="shipping-method">Shipping method</label>
            <select id="shipping-method" name="shipping_method">
                <option value="5">Standard (5 days)</option>
                <option value="2">Express (2 days)</option>
            </select>
            <output id="delivery-date" for="order-date shipping-method">—</output>
        </div>
    </fieldset>

    <p>Your choices:
        <output id="choice-summary">12 months · No account · No tags</output>
    </p>
    <p id="form-status" role="status"></p>

    <!-- FIND: BUTTON / SUBMIT / RESET / SAVE DRAFT -->
    <div class="form-actions">
        <button class="submit-button" type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button id="save-draft" type="submit" formnovalidate>Save draft</button>
    </div>
</form>
```

| Topic | What to remember |
|---|---|
| Label and input | Match `label for` to the input's unique `id`. `name` is the key used for submission. `placeholder` is a hint. |
| Checkbox and radio | A checkbox has its own state. Radio inputs share a `name` within the form and need distinct `id` and `value` attributes. Only the initial radio has `checked`. |
| Select | `optgroup` groups options. `selected disabled hidden` makes the prompt the initial choice, unavailable for re-selection and hidden in the expanded list. On a multi-select, `size` controls the visible rows. |
| Datalist and output | `list` links an input to datalist suggestions and still permits typing. `output for` describes which controls supply the result. JavaScript updates it. |
| Limits and defaults | `min`, `max`, and `step` constrain numeric or date fields as applicable. `value` provides the initial value. `minlength` and `maxlength` apply to text fields. `pattern` checks the whole value against a regex, and `title` describes the rule. Use `autofocus` on at most one control. |
| Submission | GET puts values in the URL query. POST puts them in the request body. Use POST and `multipart/form-data` for files. `action` supplies the destination and defaults to the current page if omitted. |
| Included values | Named, enabled controls can contribute values. Unchecked radios and checkboxes are omitted. A multi-select can send repeated keys. `readonly` still submits its value. `disabled` prevents editing and omits the control. |
| Validation and buttons | `required` checks that an eligible field is filled. A disabled field skips validation even if it has `required`. `formnovalidate` skips validation for one submit button, while `novalidate` on the form skips it for ordinary submits too. `type="button"` is for actions such as showing content. |

Boolean attributes are true by their presence. To turn off `checked` in HTML, remove it. The HTML validates the input locally. The JavaScript in Step 10 handles Submit and Save draft as a local demo. Until then, test with dummy data.

## 5. Add the shared CSS and learn the selectors

Put this block in **both** `style.css` files. Then append the page-specific rules in Steps 6 and 7 to the appropriate file.

```css
/* FIND: RESET / BOX MODEL / INHERITANCE */
*, *::before, *::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
    color: #18202b;
    background-color: #f4f6f9;
}

button, input, select, textarea {
    font: inherit;
}

/* FIND: CONTAINER / WIDTH / CENTERING */
.container {
    width: 90%;
    max-width: 60rem;
    margin: 1.5rem auto;
    padding: 1rem 1.5rem;
    border: 1px solid #c1c9d4;
    border-radius: 0.75rem;
    background-color: white;
}

a { color: #214d8b; }
a:hover { text-decoration-thickness: 0.15em; }

a:focus-visible, button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}
```

A rule is `selector { property: value; }`. The dot matches a class, the hash matches an ID, and a space looks inside another element. The browser applies matching rules subject to the cascade. Among ordinary rules with equal priority, the more specific selector wins. When specificity ties, the later declaration wins. Text properties such as `color` and `font-family` normally inherit. Borders and padding normally do not.

| Selector | What it matches |
|---|---|
| `a`, `.form-row`, `#top`, `*` | A tag, a class, an ID, or any element |
| `header.page-header`, `.form-row.form-row--choice` | One element matching both parts, with no space |
| `.personal-info input` | Inputs inside the personal information group |
| `.form-row > input` | Inputs that are direct children of a form row |
| `h1, h2` | Both heading types, via a comma-separated selector list |
| `input[type="email"]` | An input with this exact attribute value |
| `.personal-info input:not([type="checkbox"])` | The group's inputs except checkboxes |
| `a:hover`, `a:focus-visible`, `section:target` | A pointer state, a visible focus state, or the current fragment target |
| `a::before`, `li::marker` | A generated piece before a link's contents or a list marker |

| To change… | Use… |
|---|---|
| Text color in just one class | `.notice { color: #8b1f1f; }` |
| Only links inside a class | `.notice a { color: #214d8b; }` |
| Text aligned left with a little space from the inner edge | `.notice { text-align: left; padding-inline-start: 1rem; }` |
| Move the box away from the left edge | `margin-left: 1rem;` or `margin-inline-start: 1rem;` for the start edge |
| Move a whole item within a Grid cell | `justify-self: start;` for the left edge or `justify-self: end;` for the right edge in this left-to-right layout |
| Gap inside or outside a border | `padding: 1rem;` inside, `margin: 1rem;` outside |
| Horizontal and vertical padding separately | `padding-inline: 2rem;` and `padding-block: 1rem;` |
| Text size, weight, and line spacing | `font-size: 1.25rem;`, `font-weight: 700;`, `line-height: 1.5;` |
| Border thickness and corners | `border: 1px solid #333;` and `border-radius: 0.5rem;` |
| An element's solid fill | `background-color: #edf3ff;` |
| Space between Grid or Flexbox items | `gap: 0.75rem;` on their shared parent |

`border-box` makes a declared width include padding and border. `1rem` is the root font size. A percentage width is relative to the containing block. `1vw` and `1vh` are 1% of the viewport width and height. `fr` shares the remaining space in a Grid. `width: min(100%, 48rem)` picks the smaller value. `clamp(1rem, 3vw, 2rem)` uses a flexible value with minimum and maximum bounds.

## 6. Style the home page, dropdown, and scroll effects

Append this to **`stronka/style.css`**.

```css
/* FIND: BACKGROUND / GRADIENT OVER IMAGE */
.page-header {
    padding: 4vh 4vw;
    color: white;
    background-color: #17365d;
    background-image:
        linear-gradient(to right, rgba(23, 54, 93, 0.95), rgba(23, 54, 93, 0.65)),
        url("header.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

/* FIND: FLEXBOX NAV / ROW / GAP / WRAP */
.nav-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.nav-links a { color: white; }

/* FIND: DROPDOWN / RELATIVE PARENT / ABSOLUTE CHILD */
.menu {
    position: relative;
}

.menu-submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 3;
    min-width: 10rem;
    padding: 0.5rem;
    border: 1px solid #c1c9d4;
    border-radius: 0.5rem;
    background-color: white;
}

.menu:hover .menu-submenu,
.menu:focus-within .menu-submenu {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.menu-submenu a { color: #17365d; }

/* FIND: STICKY / TARGET HIGHLIGHT */
#resources > h2, #examples > h2 {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: white;
}

main section:target,
main section:target > h2 {
    background-color: #fff4c7;
}

/* FIND: FIXED / BACK TO TOP */
.go-top {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 2;
    padding: 0.4rem 0.75rem;
    border: 1px solid #c1c9d4;
    border-radius: 0.5rem;
    background-color: white;
}

/* FIND: FLOAT / CLEAR / IMAGE SIZE */
.float-demo {
    float: left;
    width: 8rem;
    max-width: 50%;
    height: auto;
    margin: 0 0.75rem 0.5rem 0;
}

.clear-demo { clear: left; }

/* FIND: TABLE / CELL BORDERS */
table {
    width: 100%;
    border-collapse: collapse;
    margin-block: 1rem;
}

th, td {
    padding: 0.5rem;
    border: 1px solid #c1c9d4;
    text-align: left;
}

/* FIND: PSEUDO-ELEMENT / GENERATED LINK ICON */
a[href^="https://"]::after {
    content: " ↗";
}
```

- **Backgrounds.** The first image layer is on top. Put another gradient before the existing one to try three layers. `cover` fills the area and may crop the image. `contain` keeps the entire image visible. Use comma-separated sizes or positions if the layers need different values. CSS `url()` starts from the stylesheet's folder.
- **Flexbox.** `display: flex` arranges direct children along one axis. The default is a row. `flex-direction: column` stacks them. For a row, `justify-content` controls horizontal placement and `align-items` controls vertical alignment. Add `flex: 1` to a child to let it grow into available space. `inline-flex` makes the outer flex container participate in inline layout and usually fit its contents.
- **Positioning.** `relative` keeps the menu's space and anchors its absolute submenu. `absolute` takes the submenu out of flow so opening it leaves the page below in place. `top: 100%` puts it below the menu. Try `right: 0` in place of `left: 0` to line up the opposite edge, or `bottom: 100%` in place of `top: 100%` to open upward. A gap between boxes can break hover as you cross it.
- **Sticky and fixed.** Sticky starts in flow, then sticks at its offset while its container allows. Fixed attaches to the viewport in this layout. Move the arrow to the lower left with `left: 1rem` instead of `right: 1rem`. `z-index` controls stacking within the relevant stacking context.
- **Float.** Text wraps beside the image. `clear: left` moves the next paragraph below the float. Temporarily remove it to compare.

## 7. Lay out the form and add responsive styles and effects

Append this to **`formik/style.css`**.

```css
/* FIND: FORM / ROUNDED INNER FRAME */
#order-form {
    padding: 1rem;
    border: 1px solid #c1c9d4;
    border-radius: 0.75rem;
}

fieldset {
    min-inline-size: 0;
    margin: 0 0 1rem;
    padding: 0.75rem;
}

legend { font-weight: 700; }

/* FIND: GRID / LABEL BESIDE INPUT */
.form-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
}

.form-row > output { grid-column: 2; }

.form-row--choice {
    display: flex;
    align-items: center;
}

/* FIND: ALIGN RIGHT / ONLY PERSONAL INFORMATION INPUTS */
.personal-info .form-row > input:not([type="checkbox"]) {
    justify-self: end;
    width: min(100%, 18rem);
}

/* FIND: FLEXBOX / BUTTONS ON THE RIGHT */
.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    flex-wrap: wrap;
}

button {
    padding: 0.35rem 0.75rem;
    border: 1px solid #17365d;
    border-radius: 0.3rem;
}

/* FIND: MEDIA QUERY / MOBILE FORM */
@media (max-width: 649px) {
    .form-row { grid-template-columns: minmax(0, 1fr); }
    .form-row > output { grid-column: 1; }
    .form-actions { justify-content: center; }
    .personal-info .form-row > input:not([type="checkbox"]) {
        justify-self: stretch;
        width: 100%;
    }
}

/* FIND: VALIDATION / GREEN AND RED */
input.is-valid { border-color: green; }
label.is-valid { color: green; }
input.is-invalid { border-color: #b91c1c; }
label.is-invalid { color: #b91c1c; }

/* FIND: TRANSITION / RESET BUTTON HOVER */
button[type="reset"] {
    transition: transform 0.3s ease, border-color 0.3s ease;
}

button[type="reset"]:hover {
    transform: scale(1.1);
    border-color: red;
}

/* FIND: ANIMATION / KEYFRAMES / SUBMIT PULSE */
.submit-button { animation: submit-pulse 1.6s ease-in-out infinite; }

@keyframes submit-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
}

@media (prefers-reduced-motion: reduce) {
    .submit-button { animation: none; }
    button[type="reset"] { transition: none; }
    button[type="reset"]:hover { transform: none; }
}
```

Grid arranges rows and columns. Each `.form-row` places the label in column 1 and the input in column 2. `minmax(0, 2fr)` gives the input more room and lets the column shrink. `grid-column: 1 / -1` spans a whole row when a heading or button group is a direct child of a grid. Here the heading already sits outside the row grids. To center its text, use `h1 { text-align: center; }` in the form stylesheet.

For a page with one panel that you want centered both ways, add `class="form-page"` to the form page's body and try `.form-page { min-height: 100vh; display: grid; place-items: center; }`. The media query changes the layout when the screen narrows. The transition smooths a change of state. An animation plays its keyframes on its own. An alternative pulse uses `from` and `to` keyframes with `infinite alternate`. Keep one definition of each keyframe name.

Preview at **700 px** and **600 px**. Check the field order, wrapped buttons, and whether the page scrolls horizontally. Tab through the navigation and the form before moving to JavaScript.

## 8. Connect JavaScript and make the home page react

Add this below the stylesheet link in **both HTML files**. Each page loads the `script.js` beside it.

```html
<!-- FIND: SCRIPT / DEFER / SAFE DOM ACCESS -->
<script src="script.js" defer></script>
```

The browser builds a tree of objects from your HTML called the **DOM**. JavaScript finds those objects, reacts to events, and changes the page. `defer` makes this external script run after the HTML is parsed. For a script without `defer`, another option is to put its setup inside a `DOMContentLoaded` listener. Use one approach here. In DevTools, the **Console** shows JavaScript messages and errors. Try `console.log("Script loaded");` temporarily if you need to confirm the connection.

Put this in **`stronka/script.js`** to connect the study tip button from Step 2.

```js
// FIND: DOM / CLICK / SHOW AND HIDE
const tipButton = document.getElementById("tip-button");
const tip = document.getElementById("tip");

if (tipButton && tip) {
    tipButton.addEventListener("click", function toggleTip() {
        tip.hidden = !tip.hidden;
        tipButton.textContent = tip.hidden ? "Show study tip" : "Hide study tip";
        tipButton.setAttribute("aria-expanded", String(!tip.hidden));
    });
}
```

The `if` guards against missing elements. `!` flips a boolean. A condition such as `tip.hidden ? "Show" : "Hide"` chooses the first value when true and the second when false. Use `.textContent` to replace an element's text and `.value` to read or change the current value of a form control.

## 9. Add live calculations and read the form choices

Paste the following blocks **in order** into **`formik/script.js`**. Test each one before adding the next. With this recipe's exact markup, all the IDs exist when the script runs. If you reuse a page without one of these features, keep its HTML and corresponding JavaScript together or check for the elements before attaching listeners.

```js
// FIND: RANGE INPUT / LIVE OUTPUT
const form = document.getElementById("order-form");
const budgetInput = document.getElementById("budget");
const budgetOutput = document.getElementById("budget-output");

function updateBudget() {
    budgetOutput.value = budgetInput.value + " PLN";
}

budgetInput.addEventListener("input", updateBudget);
updateBudget();
```

`const` declares a name that keeps pointing to the same object. Its properties can still change. `let` permits reassignment of the name itself. `getElementById("budget")` takes an ID without a hash. `querySelector("#budget")` takes a CSS selector and returns the first match, or `null`. `querySelectorAll()` returns a collection of matches. With `addEventListener("input", updateBudget)`, pass the function itself. The separate `updateBudget()` calls it once now, to initialize the readout. The `input` event runs as you move the slider. Test **130 → 130 PLN**.

```js
// FIND: TWO INPUTS / NUMBER CALCULATION / ORDER TOTAL
const productSelect = document.getElementById("product-type");
const quantityInput = document.getElementById("quantity");
const orderTotal = document.getElementById("order-total");

const prices = {
    keyboard: 120,
    monitor: 450,
    "mouse-pad": 25,
    "laptop-stand": 80
};

function updateTotal() {
    const price = prices[productSelect.value];
    const quantity = quantityInput.valueAsNumber;

    if (price === undefined || !quantityInput.validity.valid) {
        orderTotal.value = "—";
        return;
    }

    orderTotal.value = (price * quantity) + " PLN";
}

productSelect.addEventListener("change", updateTotal);
quantityInput.addEventListener("input", updateTotal);
updateTotal();
```

The object maps option values to prices. The bracket lookup uses the selected option's value, such as `"keyboard"`. A field's `.value` is typically a string. `.valueAsNumber` reads a number from a numeric control and gives `NaN` if the value can't be converted. `===` compares without type conversion. The early `return` stops an invalid calculation. Test **Keyboard × 2 → 240 PLN** and **Quantity 11 → —**.

```js
// FIND: DATE / ADD SHIPPING DAYS / CROSS A MONTH BOUNDARY
const orderDateInput = document.getElementById("order-date");
const shippingSelect = document.getElementById("shipping-method");
const deliveryOutput = document.getElementById("delivery-date");

function updateDeliveryDate() {
    const date = orderDateInput.valueAsDate;

    if (date === null || !orderDateInput.validity.valid) {
        deliveryOutput.value = "—";
        return;
    }

    const shippingDays = Number(shippingSelect.value);
    date.setUTCDate(date.getUTCDate() + shippingDays);
    deliveryOutput.value = date.toISOString().slice(0, 10);
}

orderDateInput.addEventListener("change", updateDeliveryDate);
shippingSelect.addEventListener("change", updateDeliveryDate);
updateDeliveryDate();
```

`Number()` converts the shipping option's string to a number. The date field's `.valueAsDate` gives a `Date` in UTC, so use the UTC methods throughout this calculation. JavaScript handles adding days across month and year boundaries. `toISOString().slice(0, 10)` gives the date portion. Test **30 November 2026 + Express → 2026-12-02**.

For another exercise, `new Date()` gives the current date and time. Use `.getFullYear()`, `.getMonth() + 1`, and `.getDate()` for the local year, month number, and day of the month. `new Date(2026, 10, 30)` creates 30 November in local time because JavaScript's numeric months start at zero. An `input type="month"` gives a string like `"2026-11"`. Split it with `.split("-")` and convert the parts to numbers when calculating.

```js
// FIND: CHECKBOX / RADIO / MULTI-SELECT SUMMARY
const accountCheckbox = document.getElementById("create-account");
const tagsSelect = document.getElementById("tags");
const choiceSummary = document.getElementById("choice-summary");

function updateChoiceSummary() {
    const selectedWarranty = form.querySelector('input[name="warranty_period"]:checked');
    const warranty = selectedWarranty ? selectedWarranty.value + " months" : "No warranty";
    const account = accountCheckbox.checked ? "Create account" : "No account";
    const tagNames = [];

    for (const option of tagsSelect.selectedOptions) {
        tagNames.push(option.textContent);
    }

    const tags = tagNames.length > 0 ? tagNames.join(", ") : "No tags";
    choiceSummary.value = warranty + " · " + account + " · " + tags;
}

form.addEventListener("change", updateChoiceSummary);
updateChoiceSummary();
```

`.checked` is the checkbox's current true/false state. The radio query finds the chosen input in its group. With multi-selects, `.value` gives the first selected value and `.selectedOptions` gives the whole selected collection. Here the loop collects visible option text into an array. `.join(", ")` turns that array into a readable list. The form sees the `change` event as it travels up from the control. Test selecting multiple tags with **Ctrl+click** on Windows.

## 10. Add validation feedback and test submission and reset

Append this to **`formik/script.js`**. The markup already has `required`, an email input type, and a password pattern. This adds the custom trimmed-name rule and uses the red and green classes from Step 7.

```js
// FIND: VALIDATION / CUSTOM MESSAGE / CLASSLIST
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("user-email");
const passwordInput = document.getElementById("user-password");
const validationFields = [fullNameInput, emailInput, passwordInput];
const formStatus = document.getElementById("form-status");

function showFieldValidity(input) {
    if (input === fullNameInput) {
        const name = input.value.trim();
        const validName = name.length >= 3 && name.length <= 30;
        input.setCustomValidity(validName ? "" : "Enter a name of 3 to 30 characters.");
    }

    for (const element of [input, ...input.labels]) {
        element.classList.toggle("is-valid", input.validity.valid);
        element.classList.toggle("is-invalid", !input.validity.valid);
    }
}

for (const input of validationFields) {
    const eventName = input === fullNameInput ? "input" : "change";
    input.addEventListener(eventName, () => showFieldValidity(input));
    input.addEventListener("invalid", () => showFieldValidity(input));
}

// FIND: SUBMIT / SAVE DRAFT / PREVENT DEFAULT
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Keep the practice form on this page.

    if (event.submitter?.id === "save-draft") {
        formStatus.textContent = "Draft checked locally. Nothing was saved to a server.";
        return;
    }

    validationFields.forEach(showFieldValidity);
    if (!form.reportValidity()) {
        return;
    }

    formStatus.textContent = "All checks passed. This is a local practice form.";
});

// FIND: RESET / CLEAR VALIDATION / RESTORE READOUTS
form.addEventListener("reset", () => {
    setTimeout(() => {
        for (const input of validationFields) {
            input.setCustomValidity("");
            for (const element of [input, ...input.labels]) {
                element.classList.remove("is-valid", "is-invalid");
            }
        }
        formStatus.textContent = "";
        updateBudget();
        updateTotal();
        updateDeliveryDate();
        updateChoiceSummary();
    }, 0);
});
```

- `.trim()` removes surrounding whitespace. `.setCustomValidity("")` clears the custom error. A nonempty custom message makes the field invalid. `...input.labels` adds the linked labels to the same array as the input.
- `classList.toggle("is-valid", condition)` adds or removes the class according to the condition. For a simple on/off effect you can also use `classList.add()` and `classList.remove()`.
- Native validation can block Submit before the `submit` event. The individual `invalid` listeners still color invalid fields. `form.reportValidity()` checks fields again and asks the browser to show invalid-field feedback if needed. In an alert-based exercise, call `input.focus()` to move focus to the invalid field.
- `event.submitter` is the button that submitted the form. The `?.` reads its ID safely if the button is absent. The Save draft button uses `formnovalidate`, so the submit handler can receive that action even with invalid fields.
- `form.reset()` or the Reset button restores the HTML defaults. The reset handler waits until after that browser action before rereading the inputs. The reset handler also clears custom messages and CSS classes.

Test a short name, a malformed email, and a weak password. Compare regular **Submit** with **Save draft**, then use **Reset**. Use dummy values. To inspect what would be serialized without sending anything, run this in the form page's Console:

```js
console.table([...new FormData(document.getElementById("order-form"))]);
```

For a separate HTTP exercise, give the form an `action` pointing to a local test endpoint you control and temporarily disable the demo submit handler. Serve the page over HTTP and inspect **DevTools → Network → Payload**. Try comparing GET and POST with dummy data. Use the POST encoding shown in Step 4 for file uploads.

## 11. Extend the form with dynamic options and input properties

To practise adding and removing elements, put these buttons **after the Tags row** in `formik/form.html`. Then append the JavaScript below to the form script. `type="button"` keeps these clicks local to the page.

```html
<!-- FIND: DYNAMIC OPTIONS / ADD AND REMOVE -->
<div class="form-actions">
    <button type="button" id="add-tag">Add a tag</button>
    <button type="button" id="remove-tag">Remove selected tags</button>
</div>
```

```js
// FIND: CREATE ELEMENT / APPEND OPTION / REMOVE OPTIONS
const addTagButton = document.getElementById("add-tag");
const removeTagButton = document.getElementById("remove-tag");

addTagButton.addEventListener("click", () => {
    const tagName = window.prompt("Name for the new tag")?.trim();
    if (!tagName) return;

    const option = document.createElement("option");
    option.value = tagName;
    option.textContent = tagName;
    tagsSelect.append(option);
    option.selected = true;
    updateChoiceSummary();
});

removeTagButton.addEventListener("click", () => {
    const selected = Array.from(tagsSelect.selectedOptions);
    if (selected.length === 0) {
        window.alert("Select at least one tag first.");
        return;
    }

    for (const option of selected) {
        option.remove();
    }
    updateChoiceSummary();
});
```

`createElement()` creates an element in memory. `append()` adds it to the page. `textContent` treats the entered text as text, including angle brackets. `Array.from()` takes a snapshot of the selection so the loop can remove options without skipping any as the live collection changes. Programmatic changes do not trigger the same user input events automatically, so call `updateChoiceSummary()` explicitly. Reset restores selections among the options still present. Reload to restore the original options.

Here are small property changes you can try **one at a time in the form page's Console**.

```js
// FIND: SET DOM PROPERTIES / MIN / READONLY / DISABLED / CHECKED
document.getElementById("budget").min = "50";       // Change the range floor.
document.getElementById("quantity").max = "5";      // Change the largest valid quantity.
document.getElementById("dial-code").readOnly = false;
document.getElementById("user-email").disabled = true;
document.getElementById("create-account").checked = true;
```

The HTML attribute is `readonly` and the JavaScript property is `.readOnly`. Use booleans for `.readOnly`, `.disabled`, and `.checked`. After a property change, call the affected update function to refresh derived text. Reload to restore the original page after testing.

## 12. Optional layout exercise: switch between groups

To practise the Lab 5 section-switching pattern, add IDs to the opening tags of the existing **Personal information**, **Product details**, and **Delivery** fieldsets. Use `personal-panel`, `product-panel`, and `delivery-panel` respectively. Keep any existing classes. Put these controls right inside the form, **above the first fieldset**. The warranty group stays visible as a shared choice.

```html
<!-- FIND: SECTION SWITCHER / BUTTON DATA ATTRIBUTE -->
<div class="form-actions">
    <button type="button" data-panel="personal-panel">Personal</button>
    <button type="button" data-panel="product-panel">Product</button>
    <button type="button" data-panel="delivery-panel">Delivery</button>
    <button type="button" data-panel="all">Show all</button>
</div>
```

Append this to **`formik/script.js`**.

```js
// FIND: QUERY SELECTOR ALL / FOR EACH / SWITCH SECTIONS
const panelButtons = form.querySelectorAll("button[data-panel]");
const panels = form.querySelectorAll("#personal-panel, #product-panel, #delivery-panel");

function showPanel(id) {
    panels.forEach((panel) => {
        panel.hidden = id !== "all" && panel.id !== id;
    });
    panelButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.panel === id));
    });
}

panelButtons.forEach((button) => {
    button.addEventListener("click", () => showPanel(button.dataset.panel));
});

// Reveal fields that need attention before the browser tries to focus them.
form.addEventListener("invalid", () => showPanel("all"), true);
showPanel("all");
```

Add this to **`formik/style.css`** for the highlighted button.

```css
/* FIND: ACTIVE PANEL BUTTON */
button[data-panel][aria-pressed="true"] {
    background-color: #17365d;
    color: white;
}
```

`data-panel` stores the target ID, and `button.dataset.panel` reads it. `forEach()` runs the function once per item. A hidden fieldset still contains enabled fields, so the capture listener reveals every panel when native validation needs to show an error. The third argument `true` enables capture because `invalid` does not bubble. This is a simple section switcher using buttons.

## 13. Test the site and adapt it to a new assignment

1. **HTML.** Click the form link and the return link. Navigate to a section and back to the top. Click a label and check that the correct input receives focus. Inspect the table's merged cells.
2. **CSS.** Check the header image, tab focus, dropdown, float, sticky heading, and fixed back-to-top link. Try desktop and mobile widths. Change one spacing or color rule and check which elements it affects.
3. **JavaScript.** Check the console, open and close the study tip, move the budget slider, calculate a total, and test delivery across a month boundary. Switch radios, select two tags, and click Reset.
4. **Validation.** Try an empty email, an invalid password, and an out-of-range quantity. Compare Submit and Save draft. Verify the visible error and success states.
5. **Transfer exercise.** Turn the product form into an event booking form. Rename Product type to Ticket type, keep Quantity, and switch the shipping-day options to event durations. Update the IDs everywhere you rename them, including `label for`, `output for`, CSS selectors, and JavaScript queries. Replace the keys in `prices` with your new option values. Work out two expected results by hand before checking the browser.

When something breaks, inspect the relevant file in this order. First check the relative file path, then the HTML ID or class, then the CSS selector or JavaScript Console. Open the page you actually edited, save, and refresh. Search the source or this document for `FIND:` plus the topic, such as `FIND: SELECT`, `FIND: GRID`, or `FIND: VALIDATION`.
