let firstNumber = "0";
let action = "";
let activeNumber = "0";
let actionString = "";
let result = "";
const numberLength = 6;
const historyArray = [];
function showHistory() {
  let historyString = "<ul>";
  for (let i = historyArray.length; i > historyArray.length - 6; i--) {
    if (historyArray[i]) {
      historyString = historyString + "<li>" + historyArray[i] + "</li>";
    }
  }
  historyString += "</ul>";
  document.getElementById("historyDisplayScreen").innerHTML = historyString;
}
function checkCompletedAction() {
  if (result !== "") {
    firstNumber = "0";
    action = "";
    activeNumber = "0";
    actionString = "";
    result = "";
  }
}
function updateScreens() {
  document.getElementById("activeScreen").innerText = activeNumber;
  document.getElementById("actionQueue").innerText = actionString;
  showHistory();
}
function handleNumber(num) {
  if (activeNumber.length < numberLength) {
    if (activeNumber === "0") {
      activeNumber = num;
    } else {
      activeNumber += num;
    }
  }
}
document.addEventListener("click", updateScreens);
document.addEventListener("click", checkCompletedAction);
document.getElementById("CE").addEventListener("click", () => {
  activeNumber = "0";
});
document.getElementById("C").addEventListener("click", () => {
  firstNumber = "0";
  action = "";
  activeNumber = "0";
  actionString = "";
});
document.getElementById("backspace").addEventListener("click", () => {
  if (activeNumber.length < 2) {
    activeNumber = "0";
  } else {
    activeNumber = activeNumber.slice(0, activeNumber.length - 1);
  }
});
document.getElementById("/").addEventListener("click", () => {
  if (action === "") {
    firstNumber = activeNumber;
    action = "/";
    actionString += firstNumber;
    actionString += " ";
    actionString += action;
    activeNumber = "0";
  } else {
    action = "/";
    actionString = actionString.slice(0, actionString.length - 1);
    actionString += action;
  }
});
document.getElementById("7").addEventListener("click", () => {
  handleNumber("7");
});
document.getElementById("8").addEventListener("click", () => {
  handleNumber("8");
});
document.getElementById("9").addEventListener("click", () => {
  handleNumber("9");
});
document.getElementById("*").addEventListener("click", () => {
  if (action === "") {
    firstNumber = activeNumber;
    action = "*";
    actionString += firstNumber;
    actionString += " ";
    actionString += action;
    activeNumber = "0";
  } else {
    action = "*";
    actionString = actionString.slice(0, actionString.length - 1);
    actionString += action;
  }
});
document.getElementById("4").addEventListener("click", () => {
  handleNumber("4");
});
document.getElementById("5").addEventListener("click", () => {
  handleNumber("5");
});
document.getElementById("6").addEventListener("click", () => {
  handleNumber("6");
});
document.getElementById("-").addEventListener("click", () => {
  if (action === "") {
    firstNumber = activeNumber;
    action = "-";
    actionString += firstNumber;
    actionString += " ";
    actionString += action;
    activeNumber = "0";
  } else {
    action = "-";
    actionString = actionString.slice(0, actionString.length - 1);
    actionString += action;
  }
});
document.getElementById("1").addEventListener("click", () => {
  handleNumber("1");
});
document.getElementById("2").addEventListener("click", () => {
  handleNumber("2");
});
document.getElementById("3").addEventListener("click", () => {
  handleNumber("3");
});
document.getElementById("+").addEventListener("click", () => {
  if (action === "") {
    firstNumber = activeNumber;
    action = "+";
    actionString += firstNumber;
    actionString += " ";
    actionString += action;
    activeNumber = "0";
  } else {
    action = "+";
    actionString = actionString.slice(0, actionString.length - 1);
    actionString += action;
  }
});
document.getElementById("toggleHistoryButton").addEventListener("click", () => {
  document.getElementById("historyDisplayScreen").classList.toggle("hide");
  document.getElementById("historyClearButton").classList.toggle("hide");
});
document.getElementById("0").addEventListener("click", () => {
  handleNumber("0");
});
document.getElementById(",").addEventListener("click", () => {
  if (!activeNumber.includes(".")) {
    activeNumber += ".";
  }
});
document.getElementById("=").addEventListener("click", () => {
  if (action !== "") {
    a = parseFloat(firstNumber);
    b = parseFloat(activeNumber);
    switch (action) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
    }
    actionString = `${a} ${action} ${b} =`;
    activeNumber = result;
    historyArray.push(actionString + " " + result);
  }
});

document.getElementById("historyClearButton").addEventListener("click", () => {
  while (historyArray.length > 0) {
    historyArray.pop();
  }
});
