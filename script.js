const openBtn = document.querySelector("#openBtn");
const card = document.querySelector(".card");
const closeBtn = document.querySelector(".closeBtn");
const loginLink = document.querySelector(".loginLink");
const registerLink = document.querySelector(".registerLink");
const containerForm = document.querySelector(".container-form");

openBtn.addEventListener("click", () => {
  card.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  card.classList.remove("show");
});

registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  containerForm.classList.add("active");
});
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  containerForm.classList.remove("active");
});
