const form = document.querySelector("form");
const input = document.querySelector("form input");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.toggle("active");
  input.focus();
});
