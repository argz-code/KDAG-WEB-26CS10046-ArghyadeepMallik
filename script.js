const form = document.querySelector(".registration-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;

    if (!name || !roll || !email || !department) {
        alert("Please fill in all fields.");
        return;
    }

    if (roll.length !== 9) {
        alert("Roll Number must be exactly 9 characters long.");
        return;
    }

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    form.style.display = "none";

    const successMessage = document.createElement("div");
    successMessage.className = "success-popup";
    successMessage.innerHTML = `
        <div class="success-icon">✓</div>
        <h2>Registration Successful!</h2>
        <p>Welcome to the Bootcamp</p>
    `;

    form.parentElement.appendChild(successMessage);
});