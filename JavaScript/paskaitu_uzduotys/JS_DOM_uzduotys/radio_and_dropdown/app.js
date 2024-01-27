function clearSelections() {
  document.getElementById("sel1Label").classList.remove("active");
  document.getElementById("sel2Label").classList.remove("active");
  document.getElementById("sel3Label").classList.remove("active");
}
function hideCards() {
  document.getElementById("card1").classList.add("hide");
  document.getElementById("card2").classList.add("hide");
  document.getElementById("card3").classList.add("hide");
}

document.getElementById("sel1").addEventListener("click", () => {
  clearSelections();
  hideCards();
  document.getElementById("sel1Label").classList.add("active");
  document.getElementById("card1").classList.remove("hide");
});

document.getElementById("sel2").addEventListener("click", () => {
  clearSelections();
  hideCards();
  document.getElementById("sel2Label").classList.add("active");
  document.getElementById("card2").classList.remove("hide");
});

document.getElementById("sel3").addEventListener("click", () => {
  clearSelections();
  hideCards();
  document.getElementById("sel3Label").classList.add("active");
  document.getElementById("card3").classList.remove("hide");
});
//==============================================================================
document.getElementById("dropTrigger").addEventListener("mouseenter", () => {
  document.getElementById("drop").classList.remove("hide");
});
document.getElementById("secondTrigger").addEventListener("mouseenter", () => {
  document.getElementById("drop2").classList.remove("hide");
});

document.addEventListener("mouseover", (e) => {
  if (e.target.id == "") {
    document.getElementById("drop").classList.add("hide");
    document.getElementById("drop2").classList.add("hide");
  } else if (
    e.target.id == "1" ||
    e.target.id == "2" ||
    e.target.id == "4" ||
    e.target.id == "5"
  ) {
    document.getElementById("drop2").classList.add("hide");
  }
});
