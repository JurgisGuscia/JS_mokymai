let answer = Math.floor(Math.random() * 100) + 1;
let counter = 0;
let player = document.getElementById("lottie");
document.getElementById("numberInput").addEventListener("change", (e) => {
  if (e.target.value) {
    document.getElementById("button").removeAttribute("disabled");
  } else {
    document.getElementById("button").setAttribute("disabled", "1");
  }
});
document.getElementById("button").addEventListener("click", () => {
  const value = document.getElementById("numberInput").value;
  if (value >= 1 && value <= 100) {
    if (value == answer) {
      counter++;
      document.getElementById("mainScreen").classList.add("hide");
      document.getElementById("gameOverScreen").classList.remove("hide");
      document.getElementById(
        "gameOverGuessCount"
      ).innerText = `${counter} karto`;
      player.play();
    } else if (value > answer) {
      counter++;
      document.getElementById("helperContainer").classList.remove("hide");
      document.getElementById("help").innerText = "Mažesnį";
    } else {
      counter++;
      document.getElementById("helperContainer").classList.remove("hide");
      document.getElementById("help").innerText = "Didesnį";
    }
  }
});
document.getElementById("replay").addEventListener("click", () => {
  document.getElementById("mainScreen").classList.remove("hide");
  document.getElementById("gameOverScreen").classList.add("hide");
  document.getElementById("helperContainer").classList.add("hide");
  document.getElementById("numberInput").value = "";
  document.getElementById("button").setAttribute("disabled", "1");
  answer = Math.floor(Math.random() * 100) + 1;
  counter = 0;
});
