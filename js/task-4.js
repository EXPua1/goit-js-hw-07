const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  const passwordRegex = /^(?=.*[A-Z]).{6,}$/;
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else if (!passwordRegex.test(password)) {
    alert(
      "Password must contain at least 6 characters with at least one uppercase letter"
    );
  } else {
    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
    form.reset();
  }
}
