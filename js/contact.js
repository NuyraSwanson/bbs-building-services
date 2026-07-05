// =========================================
// Wait for the page to load
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // Initialize EmailJS
    emailjs.init({
        publicKey: "Mu2-8hbs2wsm3VW7g",
    });

    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");

    function showAlert(title, message, success = true){

    const alertBox = document.getElementById("custom-alert");
    const alertTitle = document.getElementById("alert-title");
    const alertMessage = document.getElementById("alert-message");
    const alertIcon = document.getElementById("alert-icon");

    alertTitle.textContent = title;
    alertMessage.textContent = message;

    if(success){

        alertBox.style.borderLeftColor = "#16a34a";
        alertIcon.textContent = "✔";
        alertIcon.style.color = "#16a34a";

    }else{

        alertBox.style.borderLeftColor = "#dc2626";
        alertIcon.textContent = "✖";
        alertIcon.style.color = "#dc2626";

    }

    alertBox.classList.add("show");

    setTimeout(() =>{

        alertBox.classList.remove("show");

    },5000);

}

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        emailjs.sendForm(
            "service_nxlkoip",
            "template_95ee6pi",
            this
        )
        .then(() => {

            showAlert(
    "Message Sent!",
    "Thank you for contacting BB&S Building Services. We'll get back to you shortly.",
    true
);

document.getElementById("alert-close").addEventListener("click", () =>{

    document.getElementById("custom-alert").classList.remove("show");

});

            contactForm.reset();

        })
        .catch((error) => {

            console.error(error);

           showAlert(
    "Sending Failed",
    "Your message could not be sent. Please try again or contact us via WhatsApp.",
    false
);

        })
        .finally(() => {

            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";

        });

    });

});