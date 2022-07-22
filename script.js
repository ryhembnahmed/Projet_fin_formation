function validateForm(e) {
  e.preventDefault();
  var name = document.loginForm.name.value;
  var password = document.loginForm.password.value;
  if (name.length == 0) return alert(`Email is required`);
  else {
    if (password.length < 5) return alert(`Password length should more than 8`);
  }
}
