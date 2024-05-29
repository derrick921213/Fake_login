document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  var emailInput = document.getElementById("email");
  var nextButton = document.getElementById("next-button");
  if (emailInput.type === "email") {
    var emailValue = emailInput.value;
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
  } else {
    document.getElementById("login-form").submit();
  }
};
