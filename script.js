document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

function submitForm(event) {
  event.preventDefault();
  const message = document.getElementById("form-message");
  message.textContent = "Thanks! Your request is ready to be connected to your email/form service.";
  event.target.reset();
  return false;
}
