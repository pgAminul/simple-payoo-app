document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let phoneNbr = document.getElementById("phone-number").value;
    let pinNbr = document.getElementById("pin-number").value;
    if (phoneNbr === "5" && pinNbr === "1234") {
      let success = document.getElementById("success");
      success.classList.remove("hidden");

      setTimeout(function () {
        success.classList.add("hidden");
      }, 3000);
      window.location.href = "/home.html";
    } else {
      let error = document.getElementById("error");
      error.classList.remove("hidden");
      setTimeout(function () {
        error.classList.add("hidden");
      }, 3000);
    }
  });
