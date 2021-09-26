// singup form
window.onload = () => {
  this.sessionStorage.setItem("email", "");
  this.sessionStorage.setItem("password", "");
};

var input = document.getElementsByTagName("input");
var register = document.getElementById("register");
var form = document.querySelector("form");
form.onsubmit = () => {
  return false;
};

register.onclick = () => {
  if (input[0].value == "" && input[1].value != "") {
    if (
      input[0].value == sessionStorage.getItem("email") &&
      input[1].value == sessionStorage.getItem("password")
    ) {
      form.onsubmit = () => {
        return 1;
      };
      document.cookie = "email" + input[0].value;
      document.cookie = "password" + input[1].value;
    } else {
      if (input[0].value != sessionStorage.getItem("email")) {
        input[0].nextElementSibling.textContent = "Email NOT match";
        setTimeout(() => {
          input[0].nextElementSibling.textContent = "";
        }, 2000);
      }
      if (input[1].value != sessionStorage.getItem("password")) {
        input[1].nextElementSibling.textContent = "Password NOT match";
        setTimeout(() => {
          input[1].nextElementSibling.textContent = "";
        }, 2000);
      }
    }
  } else {
    if (input[0].value == "") {
      input[0].nextElementSibling.textContent = "Email is empty";
      setTimeout(() => {
        input[0].nextElementSibling.textContent = "";
      }, 2000);
    }
    if (input[1].value == "") {
      input[1].nextElementSibling.textContent = "Password is empty";
      setTimeout(() => {
        input[1].nextElementSibling.textContent = "";
      }, 2000);
    }
  }
};
