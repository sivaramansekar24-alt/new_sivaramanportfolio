```javascript
// ================= MOBILE MENU =================

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// ================= PROJECT BUTTON =================

function projectMessage(projectName) {

    alert("You selected: " + projectName);

}


// ================= RESUME BUTTON =================

function downloadMessage() {

    alert("Resume download will be available soon!");

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields!");

        return;
    }

    alert(
        "Thank you, " + name +
        "!\n\nYour message has been received."
    );

    contactForm.reset();

});
```
