document.getElementById("login-form").onsubmit = function (event) {
  var emailInput = document.getElementById("email");
  var nextButton = document.getElementById("next-button");
  if (emailInput.style.display !== "none") {
    event.preventDefault();
    emailInput.style.display = "none";
    var passwordInput = document.getElementById("password");
    if (!passwordInput) {
      passwordInput = document.createElement("input");
      passwordInput.type = "password";
      passwordInput.name = "password";
      passwordInput.id = "password";
      passwordInput.placeholder = "輸入密码";
      var form = document.getElementById("login-form");
      form.insertBefore(passwordInput, nextButton);
      nextButton.value = "登入";
    }
    nextButton.type = "submit";
  }
};