let data;
fetch("/getData")
  .then((response) => response.json())
  .then((json) => (data = json));

const select = document.getElementById("originalCurrency");
const output = document.getElementById("outputCurrency");

setTimeout(() => {
  for (let curency in data.data) {
    let option = document.createElement("option");
    option.value = data.data[curency];
    option.innerText = curency;
    select.appendChild(option);
  }
  for (let curency in data.data) {
    let option = document.createElement("option");
    option.value = data.data[curency];
    option.innerText = curency;
    output.appendChild(option);
  }
}, 500);

document.getElementById("convert").addEventListener("click", () => {
  const ammount = document.getElementById("inputAmmount").value;
  const convertFrom = document.getElementById("originalCurrency").value;
  const convertTo = document.getElementById("outputCurrency").value;
  const valueInBase = ammount / convertFrom; //pradine valiuta eurais.
  const converted = (valueInBase * convertTo).toFixed(2); //galine valiuta
  const inputName =
    document.getElementById("originalCurrency").options[
      document.getElementById("originalCurrency").selectedIndex
    ].text;
  const outputName =
    document.getElementById("outputCurrency").options[
      document.getElementById("outputCurrency").selectedIndex
    ].text;
  document.getElementById(
    "outputField"
  ).innerText = `${inputName} ${ammount} yra ${converted} ${outputName}`;
  document.getElementById(
    "rateOutput"
  ).innerText = `Santykis: 1 ${inputName} = ${(converted / ammount).toFixed(
    2
  )} ${outputName}`;
});
