function resetActive() {
  document.getElementById("floor1Label").classList.remove("active");
  document.getElementById("floor2Label").classList.remove("active");
  document.getElementById("managementLabel").classList.remove("active");
}
function hideContent() {
  document.getElementById("content1").classList.add("hide");
  document.getElementById("content2").classList.add("hide");
  document.getElementById("content3").classList.add("hide");
}
document.getElementById("floor1").addEventListener("click", () => {
  resetActive();
  hideContent();
  document.getElementById("floor1Label").classList.add("active");
  document.getElementById("content1").classList.remove("hide");
});
document.getElementById("floor2").addEventListener("click", () => {
  resetActive();
  hideContent();
  document.getElementById("floor2Label").classList.add("active");
  document.getElementById("content2").classList.remove("hide");
});
document.getElementById("management").addEventListener("click", () => {
  resetActive();
  hideContent();
  document.getElementById("managementLabel").classList.add("active");
  document.getElementById("content3").classList.remove("hide");
});
