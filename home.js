// send money part start here

document.getElementById("Send-btn").addEventListener("click", function (event) {
  event.preventDefault();
  let balance = document.getElementById("balance").innerText;
  const sendAmountInput = document.getElementById("send-money-amount");
  const sendAmount = sendAmountInput.value;

  const sendMoneyPinInput = document.getElementById("pin-number");
  const sendMoneyPin = sendMoneyPinInput.value;
  if (sendMoneyPin === "1234") {
    const totallBalce = parseFloat(balance);
    const addBalance = parseFloat(sendAmount);
    let currentBalance = addBalance + totallBalce;
    sendAmountInput.value = "";
    sendMoneyPinInput.value = "";
    if (currentBalance < 0) {
      document.getElementById("balance").innerText = 0;
      let success = document.getElementById("success");
      success.classList.remove("hidden");
    } else {
      document.getElementById("balance").innerText = currentBalance;

      let success = document.getElementById("success");
      success.classList.remove("hidden");

      setTimeout(function () {
        success.classList.add("hidden");
      }, 3000);
    }
  } else {
    let error = document.getElementById("error");
    error.classList.remove("hidden");
    setTimeout(function () {
      error.classList.add("hidden");
    }, 3000);
  }
});

// Cash out system start here
document.getElementById("cash-btn").addEventListener("click", function (event) {
  event.preventDefault();
  let balance = document.getElementById("balance").innerText;
  const sendAmountInput = document.getElementById("cash-money-amount");
  const sendAmount = sendAmountInput.value;

  const sendMoneyPinInput = document.getElementById("pin-number-cash-out");
  const sendMoneyPin = sendMoneyPinInput.value;

  if (sendMoneyPin === "1234") {
    const totallBalce = parseFloat(balance);
    const cashOut = parseFloat(sendAmount);
    let currentBalance = totallBalce - cashOut;
    sendAmountInput.value = "";
    sendMoneyPinInput.value = "";
    if (currentBalance < 0) {
      let error = document.getElementById("error");
      error.innerHTML = "NOT have enough balance";
      error.classList.remove("hidden");
      setTimeout(function () {
        error.classList.add("hidden");
      }, 3000);
      return false;
    } else {
      document.getElementById("balance").innerText = currentBalance;
      let success = document.getElementById("success");
      success.classList.remove("hidden");

      setTimeout(function () {
        success.classList.add("hidden");
      }, 3000);
    }
  } else {
    let error = document.getElementById("error");
    error.classList.remove("hidden");
    setTimeout(function () {
      error.classList.add("hidden");
    }, 3000);
  }
});

// Toggle using addEventListener
let cashOutBtn = document.getElementById("cash-out");
cashOutBtn.addEventListener("click", function () {
  cashOutBtn.classList.add("bg-black");
  cashOutBtn.classList.add("text-white");
  let cashOut = document.getElementById("cashOut");
  let sendMoney = document.getElementById("sendMoney");
  cashOut.classList.remove("hidden");
  sendMoney.classList.add("hidden");
  sendMoneyBtn.classList.remove("bg-black");
  sendMoneyBtn.classList.remove("text-white");
});

let sendMoneyBtn = document.getElementById("send-money");
sendMoneyBtn.addEventListener("click", function () {
  sendMoneyBtn.classList.add("bg-black");
  sendMoneyBtn.classList.add("text-white");
  let cashOut = document.getElementById("cashOut");
  let sendMoney = document.getElementById("sendMoney");
  cashOut.classList.add("hidden");
  sendMoney.classList.remove("hidden");
  cashOutBtn.classList.remove("bg-black");
  cashOutBtn.classList.remove("text-white");
});
