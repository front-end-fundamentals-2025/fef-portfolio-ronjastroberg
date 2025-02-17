const inputElement = document.querySelector("input");
const messageboxElement = document.getElementById("message-box");
const buttonElement = document.querySelector("button");
const submittextElement = document.getElementById("submit-text");
submittextElement.innerText =
  "Thank you for reaching out! I will get back to you as soon as possible.";

buttonElement.addEventListener("click", function (event) {
  submittextElement.style.display = "block";
});
