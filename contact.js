const message =
  "Thank you reaching out. Our team will send you a pigeon back very soon :)";

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
