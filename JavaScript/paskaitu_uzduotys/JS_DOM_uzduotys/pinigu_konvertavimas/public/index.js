let data;
fetch("/getData")
  .then((response) => response.json())
  .then((json) => (data = json));

const select = document.getElementById("originalCurrencySelectContainer");
const output = document.getElementById("outputCurrencySelectContainer");
let originalCurrency = "EUR";
let outputCurrency = "EUR";
let originalPrice = 1;
let outputPrice = 1;

setTimeout(() => {
  for (let curency in data.data) {
    let option = document.createElement("div");
    option.value = data.data[curency];
    option.className = "originalCurrencySelectItem";
    option.innerText = curency;
    select.appendChild(option);
  }
  for (let curency in data.data) {
    let option = document.createElement("div");
    option.value = data.data[curency];
    option.className = "outputCurrencySelectItem";
    option.innerText = curency;
    output.appendChild(option);
  }

  document.querySelectorAll(".originalCurrencySelectItem").forEach((item) => {
    item.addEventListener("click", (event) => {
      document.getElementById("originalCurrencyDisplayScreen").innerText =
        event.target.innerText;
      originalCurrency = event.target.innerText;
      originalPrice = event.target.value;
      document.getElementById("anotherCurrencyWrapper").classList.add("hide");
    });
  });

  document.querySelectorAll(".outputCurrencySelectItem").forEach((item) => {
    item.addEventListener("click", (event) => {
      document.getElementById("outputCurrencyDisplayScreen").innerText =
        event.target.innerText;
      outputCurrency = event.target.innerText;
      outputPrice = event.target.value;
      document.getElementById("anotherCurrencyWrapper2").classList.add("hide");
    });
  });
}, 500);

document.getElementById("originalCurrency").addEventListener("click", (e) => {
  if (
    e.target.id === "originalCurrency" ||
    e.target.id === "originalCurrencyDisplayScreen" ||
    e.target.id === "arrowSvg1"
  ) {
    document.getElementById("anotherCurrencyWrapper").classList.remove("hide");
  }
});

document.getElementById("outputCurrency").addEventListener("click", (e) => {
  if (
    e.target.id === "outputCurrency" ||
    e.target.id === "outputCurrencyDisplayScreen" ||
    e.target.id === "arrowSvg2"
  ) {
    document.getElementById("anotherCurrencyWrapper2").classList.remove("hide");
  }
});

document.getElementById("convert").addEventListener("click", () => {
  const ammount = document.getElementById("inputAmmount").value;
  const convertFrom = originalPrice;
  const convertTo = outputPrice;
  const valueInBase = ammount / convertFrom; //pradine valiuta eurais.
  const converted = (valueInBase * convertTo).toFixed(2); //galine valiuta
  const inputName = originalCurrency;
  const outputName = outputCurrency;
  document.getElementById(
    "outputField"
  ).innerText = `${inputName} ${ammount} yra ${converted} ${outputName}`;
  document.getElementById(
    "rateOutput"
  ).innerText = `Santykis: 1 ${inputName} = ${(converted / ammount).toFixed(
    2
  )} ${outputName}`;
});
