const signUpForm = document.querySelector("#sign-up-form");
// const passwordInput = document.querySelector("#password");
// const confirmPasswordInput = document.querySelector("confirm-password");

function onSubmit(e) {
  const formFields = e.target.elements;

  const passwordInput = formFields.namedItem("password");
  const confirmPasswordInput = formFields.namedItem("confirm-password");

  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    passwordInput.classList.add("error");
    confirmPasswordInput.classList.add("error");
  }

  e.preventDefault();
}

signUpForm.addEventListener("submit", onSubmit);
