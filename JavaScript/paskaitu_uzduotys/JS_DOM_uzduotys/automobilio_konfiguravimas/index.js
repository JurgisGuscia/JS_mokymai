let packetCost = 18000;
let engineCost = 0;
let colorCost = 0;
let interiorCost = 0;
let accesorieCost = 0;
function clearPackets() {
  document.getElementById("packet1Svg").classList.add("hide");
  document.getElementById("packet2Svg").classList.add("hide");
  document.getElementById("packet3Svg").classList.add("hide");
  document.getElementById("packet1Label").classList.remove("active");
  document.getElementById("packet2Label").classList.remove("active");
  document.getElementById("packet3Label").classList.remove("active");
}
document.getElementById("packet1").addEventListener("click", () => {
  clearPackets();
  document.getElementById("packet1Svg").classList.remove("hide");
  document.getElementById("packet1Label").classList.add("active");
  packetCost = 18000;
});
document.getElementById("packet2").addEventListener("click", () => {
  clearPackets();
  document.getElementById("packet2Svg").classList.remove("hide");
  document.getElementById("packet2Label").classList.add("active");
  packetCost = 20000;
});
document.getElementById("packet3").addEventListener("click", () => {
  clearPackets();
  document.getElementById("packet3Svg").classList.remove("hide");
  document.getElementById("packet3Label").classList.add("active");
  packetCost = 25000;
});
//---------------------------------------------------------------------
function clearColors() {
  document.getElementById("blackColorSvg").classList.add("hide");
  document.getElementById("redColorSvg").classList.add("hide");
  document.getElementById("greyColorSvg").classList.add("hide");
  document.getElementById("greenColorSvg").classList.add("hide");
  document.getElementById("whiteColorSvg").classList.add("hide");
  document.getElementById("blueColorSvg").classList.add("hide");
  document.getElementById("blackColorLabel").classList.remove("active");
  document.getElementById("redColorLabel").classList.remove("active");
  document.getElementById("greyColorLabel").classList.remove("active");
  document.getElementById("greenColorLabel").classList.remove("active");
  document.getElementById("whiteColorLabel").classList.remove("active");
  document.getElementById("blueColorLabel").classList.remove("active");
}
document.getElementById("blackColor").addEventListener("click", () => {
  clearColors();
  document.getElementById("blackColorSvg").classList.remove("hide");
  document.getElementById("blackColorLabel").classList.add("active");
  colorCost = 0;
});
document.getElementById("redColor").addEventListener("click", () => {
  clearColors();
  document.getElementById("redColorSvg").classList.remove("hide");
  document.getElementById("redColorLabel").classList.add("active");
  colorCost = 100;
});
document.getElementById("greyColor").addEventListener("click", () => {
  clearColors();
  document.getElementById("greyColorSvg").classList.remove("hide");
  document.getElementById("greyColorLabel").classList.add("active");
  colorCost = 0;
});
document.getElementById("greenColor").addEventListener("click", () => {
  clearColors();
  document.getElementById("greenColorSvg").classList.remove("hide");
  document.getElementById("greenColorLabel").classList.add("active");
  colorCost = 300;
});
document.getElementById("whiteColor").addEventListener("click", () => {
  clearColors();
  document.getElementById("whiteColorSvg").classList.remove("hide");
  document.getElementById("whiteColorLabel").classList.add("active");
  colorCost = 0;
});
document.getElementById("blueColor").addEventListener("click", () => {
  clearColors();
  document.getElementById("blueColorSvg").classList.remove("hide");
  document.getElementById("blueColorLabel").classList.add("active");
  colorCost = 200;
});
//---------------------------------------------------------------------
function clearEngines() {
  document.getElementById("engine1Svg").classList.add("hide");
  document.getElementById("engine2Svg").classList.add("hide");
  document.getElementById("engine3Svg").classList.add("hide");
  document.getElementById("engine1Label").classList.remove("active");
  document.getElementById("engine2Label").classList.remove("active");
  document.getElementById("engine3Label").classList.remove("active");
}
document.getElementById("engine1").addEventListener("click", () => {
  clearEngines();
  document.getElementById("engine1Svg").classList.remove("hide");
  document.getElementById("engine1Label").classList.add("active");
  engineCost = 0;
});
document.getElementById("engine2").addEventListener("click", () => {
  clearEngines();
  document.getElementById("engine2Svg").classList.remove("hide");
  document.getElementById("engine2Label").classList.add("active");
  engineCost = 2000;
});
document.getElementById("engine3").addEventListener("click", () => {
  clearEngines();
  document.getElementById("engine3Svg").classList.remove("hide");
  document.getElementById("engine3Label").classList.add("active");
  engineCost = 5000;
});
//---------------------------------------------------------------------
function clearInterior() {
  document.getElementById("interior1Svg").classList.add("hide");
  document.getElementById("interior2Svg").classList.add("hide");
  document.getElementById("interior1Label").classList.remove("active");
  document.getElementById("interior2Label").classList.remove("active");
}
document.getElementById("interior1").addEventListener("click", () => {
  clearInterior();
  document.getElementById("interior1Svg").classList.remove("hide");
  document.getElementById("interior1Label").classList.add("active");
  interiorCost = 0;
});
document.getElementById("interior2").addEventListener("click", () => {
  clearInterior();
  document.getElementById("interior2Svg").classList.remove("hide");
  document.getElementById("interior2Label").classList.add("active");
  interiorCost = 200;
});

document.addEventListener("click", () => {
  let currentSum =
    packetCost + engineCost + colorCost + interiorCost + accesorieCost;
  let window = document.getElementById("accesorie1").checked;
  let patron = document.getElementById("accesorie2").checked;
  let camera = document.getElementById("accesorie3").checked;
  window && (currentSum += 200);
  patron && (currentSum += 300);
  camera && (currentSum += 250);
  document.getElementById("ammountOutput").innerText = currentSum;
});
document.getElementById("buy").addEventListener("click", () => {
  document.getElementById("content").style.display = "none";
  document.getElementById("content2").style.display = "block";
  const player = document.querySelector("lottie-player");
  player.load(
    "https://lottie.host/6ea2c4e3-153f-4b73-bc6e-3d1099c5dd2b/z2Qlhg4dsv.json"
  );
  player.play();
});
