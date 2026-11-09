document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    console.log(nameInput.id);
    const passwordInput = document.getElementById("password");
    console.log(passwordInput.id);

    function validateName() 
    {
        console.log("Name changed");
    }

    function validatePassword() 
    {
        console.log("Password changed");
    }

    const form = document.querySelector("form");

    nameInput.addEventListener("change", validateName());
    passwordInput.addEventListener("change", validatePassword());

    form.addEventListener("submit", (event) => {
        const isValidName = validateName();
        const isValidPassword = validatePassword();
        if (!isValidName || !isValidPassword)
        {
            event.preventDefault();
        }
    })
});

function valudateName() 
{
    const input = document.getElementById("name");
    const label = document.querySelector('label[for=$(input.id)]');
    const value = input.value;

    label.classList.remove("valid", "invalid");
    label.classList.remove("valid", "invalid");

    if (value.trim() == "")
    {
        label.classList.remove("valid");
        label.classList.remove("invalid");
        return false;
    }

    if (value.length < 3)
    {
        label.classList.remove("valid");
        label.classList.remove("invalid");
        return false;
    }

    return true;
}