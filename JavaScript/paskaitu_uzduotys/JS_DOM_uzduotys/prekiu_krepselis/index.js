let price1 = 2;
let price2 = 1200;
let price3 = 35;
let item1Ammount = 1;
let item2Ammount = 1;
let item3Ammount = 1;
let totalAmmount = 1237;
function updateTottal() {
  totalAmmount =
    price1 * item1Ammount + price2 * item2Ammount + price3 * item3Ammount;
}
function updateDisplay() {
  document.getElementById("item1NumberDisplay").innerText = item1Ammount;
  document.getElementById("item2NumberDisplay").innerText = item2Ammount;
  document.getElementById("item3NumberDisplay").innerText = item3Ammount;
  updateTottal();
  document.getElementById("TotalSum").innerText = `${totalAmmount} €`;
}
document.getElementById("item1Subtract").addEventListener("click", () => {
  item1Ammount > 0 && item1Ammount--;
  updateDisplay();
});
document.getElementById("item1Add").addEventListener("click", () => {
  item1Ammount++;
  updateDisplay();
});
document.getElementById("item2Subtract").addEventListener("click", () => {
  item2Ammount > 0 && item2Ammount--;
  updateDisplay();
});
document.getElementById("item2Add").addEventListener("click", () => {
  item2Ammount++;
  updateDisplay();
});
document.getElementById("item3Subtract").addEventListener("click", () => {
  item3Ammount > 0 && item3Ammount--;
  updateDisplay();
});
document.getElementById("item3Add").addEventListener("click", () => {
  item3Ammount++;
  updateDisplay();
});
document.getElementById("reset").addEventListener("click", () => {
  item1Ammount = 1;
  item2Ammount = 1;
  item3Ammount = 1;
  totalAmmount = 1237;
  document.getElementById("item1Card").style.display = "flex";
  document.getElementById("item2Card").style.display = "flex";
  document.getElementById("item3Card").style.display = "flex";
  updateDisplay();
});

document.getElementById("delete1").addEventListener("click", () => {
  document.getElementById("item1Card").style.display = "none";
  item1Ammount = 0;
  updateDisplay();
});

document.getElementById("delete2").addEventListener("click", () => {
  document.getElementById("item2Card").style.display = "none";
  item2Ammount = 0;
  updateDisplay();
});

document.getElementById("delete3").addEventListener("click", () => {
  document.getElementById("item3Card").style.display = "none";
  item3Ammount = 0;
  updateDisplay();
});
