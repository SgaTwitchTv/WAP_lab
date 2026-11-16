// FIND: DOM / READ THE BUDGET SLIDER
const budgetInput = document.getElementById("budget");
const budgetOutput = document.getElementById("budget-output");

// FIND: FUNCTION / UPDATE THE READOUT
function updateBudget() {
    budgetOutput.value = budgetInput.value + " PLN";
}

// FIND: INPUT EVENT / RUN WHILE THE SLIDER MOVES
budgetInput.addEventListener("input", updateBudget);

///////////////////////////////////////////////////////

// FIND: DOM / GET THE PRODUCT, QUANTITY, AND TOTAL
const productSelect = document.getElementById("product-type");
const quantityInput = document.getElementById("quantity");
const orderTotal = document.getElementById("order-total");

// FIND: OBJECT / PRICE BY PRODUCT OPTION VALUE
const prices = {
    keyboard: 120,
    monitor: 450,
    "mouse-pad": 25,
    "laptop-stand": 80
};

// FIND: CALCULATION / PRICE TIMES QUANTITY
function updateTotal() {
    const price = prices[productSelect.value];
    const quantity = quantityInput.valueAsNumber;

    if (price === undefined || !quantityInput.validity.valid) {
        orderTotal.value = "—";
        return;
    }

    orderTotal.value = (price * quantity) + " PLN";
}

// FIND: EVENTS / RECALCULATE WHEN EITHER FIELD CHANGES
productSelect.addEventListener("change", updateTotal);
quantityInput.addEventListener("input", updateTotal);

///////////////////////////////////////////////////////

// FIND: DOM / GET THE DATE, SHIPPING METHOD, AND RESULT
const orderDateInput = document.getElementById("order-date");
const shippingSelect = document.getElementById("shipping-method");
const deliveryOutput = document.getElementById("delivery-date");

// FIND: DATE CALCULATION / ADD SHIPPING DAYS
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

// FIND: EVENTS / RECALCULATE WHEN EITHER FIELD CHANGES
orderDateInput.addEventListener("change", updateDeliveryDate);
shippingSelect.addEventListener("change", updateDeliveryDate);

//////////////////////////////////////////////////////////////////

// FIND: VALIDATION / FULL NAME INPUT
const fullNameInput = document.getElementById("full-name");
const fullNameLabel = document.querySelector('label[for="full-name"]');

function validateFullName() {
    const name = fullNameInput.value.trim();
    const isValid = name.length >= 3 && name.length <= 30;

    // An empty message clears the custom error.
    fullNameInput.setCustomValidity(
        isValid ? "" : "Enter a name between 3 and 30 characters."
    );

    for (const element of [fullNameInput, fullNameLabel]) {
        element.classList.toggle("is-valid", isValid);
        element.classList.toggle("is-invalid", !isValid);
    }
}

fullNameInput.addEventListener("input", validateFullName);

///////////////////////////////////////////////////////////////////

// FIND: VALIDATION / EMAIL AND PASSWORD
const emailInput = document.getElementById("user-email");
const passwordInput = document.getElementById("user-password");

function showFieldValidity(event) {
    const input = event.currentTarget;
    const label = input.labels[0];
    const isValid = input.validity.valid;

    for (const element of [input, label]) {
        element.classList.toggle("is-valid", isValid);
        element.classList.toggle("is-invalid", !isValid);
    }
}

emailInput.addEventListener("change", showFieldValidity);
passwordInput.addEventListener("change", showFieldValidity);

///////////////////////////////////////////////////////////////////

// FIND: CHECKBOX AND RADIO / READ CURRENT CHOICES
const accountCheckbox = document.getElementById("create-account");
const choiceSummary = document.getElementById("choice-summary");

function updateChoiceSummary() {
    const selectedWarranty = document.querySelector(
        'input[name="warranty_period"]:checked'
    );

    const warranty = selectedWarranty
        ? selectedWarranty.value + " months"
        : "No warranty selected";

    const account = accountCheckbox.checked ? "Create account" : "No account";

    choiceSummary.value = warranty + " · " + account;
}

// FIND: FORM CHANGE / UPDATE THE SUMMARY
accountCheckbox.form.addEventListener("change", updateChoiceSummary);
updateChoiceSummary();

///////////////////////////////////////////////////////////////////

// FIND: MULTI-SELECT / GET THE TAGS FIELD
const tagsSelect = document.getElementById("tags");

// FIND: SELECTED OPTIONS / READ EVERY CHOSEN TAG
const selectedTags = [];

for (const option of tagsSelect.selectedOptions) {
    selectedTags.push(option.textContent);
}

const tags = selectedTags.length > 0
    ? selectedTags.join(", ")
    : "No tags";

choiceSummary.value = warranty + " · " + account + " · " + tags;

