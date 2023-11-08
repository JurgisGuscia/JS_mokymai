const recipes = [
  {
    Vistiena: 100,
    Brokoliai: 200,
    Pomidorai: 100,
    Salotos: 150,
    Druska: 20,
    Aliejus: 15,
    Citrina: 1,
  },
  {
    Miltai: 250,
    Kiausiniai: 1,
    Melynes: 100,
    Cukrus: 50,
  },
  {
    Mesa: 300,
    Makaronai: 700,
    Suris: 200,
    Druska: 20,
    Grietine: 100,
  },
];
let activeRecipe = null;
let ammount = 1;
function hideAll() {
  document.getElementById("svg1").classList.add("hide");
  document.getElementById("svg2").classList.add("hide");
  document.getElementById("svg3").classList.add("hide");
}
document.getElementById("1").addEventListener("click", () => {
  hideAll();
  document.getElementById("svg1").classList.remove("hide");
  activeRecipe = 0;
  displayRecipe(activeRecipe);
});
document.getElementById("2").addEventListener("click", () => {
  hideAll();
  document.getElementById("svg2").classList.remove("hide");
  activeRecipe = 1;
  displayRecipe(activeRecipe);
});
document.getElementById("3").addEventListener("click", () => {
  hideAll();
  document.getElementById("svg3").classList.remove("hide");
  activeRecipe = 2;
  displayRecipe(activeRecipe);
});

document.getElementById("myRange").oninput = function () {
  const marker = 43 + (this.value - 1) * 32;
  document.getElementById("sliderValue").style.left = marker + "px";
  document.getElementById("sliderValue").innerText = this.value;
  ammount = this.value;
  displayRecipe(activeRecipe);
};

function displayRecipe(recipe) {
  let displayString = "";
  for (item in recipes[recipe]) {
    displayString += `${item}: <b> ${
      parseInt(recipes[recipe][item]) * ammount
    } ${recipes[recipe][item] > 10 ? "g" : "vnt"}`;
    displayString += "</b><br>";
  }

  document.getElementById("displayScreen").innerHTML = displayString;
}
