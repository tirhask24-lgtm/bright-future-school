
const contactForm = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    formMessage.classList.remove("success");
    formMessage.textContent = "";

    if (nameValue.length < 2) {
        formMessage.textContent =
            "Please enter a name with at least 2 characters.";
        fullName.focus();
        return;
    }

    if (!email.checkValidity()) {
        formMessage.textContent =
            "Please enter a valid email address.";
        email.focus();
        return;
    }

    if (messageValue.length < 10) {
        formMessage.textContent =
            "Please write a message with at least 10 characters.";
        message.focus();
        return;
    }

    formMessage.textContent =
        "Demo successful! Your information passed validation, but no message was sent.";

    formMessage.classList.add("success");
    contactForm.reset();
});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


const themeToggle = document.getElementById("themeToggle");

// Load the saved theme when the page opens
const savedTheme = localStorage.getItem("schoolTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeButton() {
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
}

if (themeToggle) {
    updateThemeButton();

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("schoolTheme", "dark");
        } else {
            localStorage.setItem("schoolTheme", "light");
        }

        updateThemeButton();
    });
}
