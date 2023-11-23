const getRandomColor = () => {
  let arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let col = "#";
  for (let i = 0; i < 6; i++) {
    col += arr[Math.floor(Math.random() * arr.length)];
  }
  return col;
};
document.getElementById("button1").addEventListener("click", () => {
  document.getElementById("target1").style.color = getRandomColor();
});
//======================================================================================
document.getElementById("target2").addEventListener("click", () => {
  let newWidth = Math.floor(Math.random() * 400);
  newWidth < 10 && (newWidth = 10);
  document.getElementById("target2").style.width = newWidth + "px";
});
//======================================================================================
document.getElementById("button2").addEventListener("click", () => {
  document.getElementById("changeText").innerText = "Naujas tekstas";
});
//======================================================================================
document.getElementById("button3").addEventListener("click", () => {
  let newSize = Math.floor(Math.random() * 30) + 5;
  document.getElementById("changeText2").style.fontSize = newSize + "px";
});
//======================================================================================
document.getElementById("button4").addEventListener("click", () => {
  document.getElementById("changeInput").value = "Pakeistas";
});
//======================================================================================
document.getElementById("button5").addEventListener("click", () => {
  let newLi = document.createElement("li");
  document.getElementById("list").appendChild(newLi);
});
//======================================================================================
document.getElementById("button6").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("inputValueDisplay").innerText =
    document.getElementById("inputValue").value;
});
//======================================================================================
document.getElementById("button7").addEventListener("click", () => {
  document.getElementById("showHideText").classList.toggle("hide");
});
//======================================================================================
let counter = 1;
document.getElementById("button8").addEventListener("click", () => {
  document.getElementById("showCounter").innerText = ++counter;
});
//======================================================================================
document.getElementById("button9").addEventListener("click", () => {
  document.getElementById("showTextCount").innerText =
    document.getElementById("textInput").value.length;
});
//======================================================================================
let buttonCounter = 100;
document.getElementById("button10").addEventListener("click", () => {
  let newButton = document.createElement("button");
  newButton.className = "button";
  newButton.textContent = "button" + buttonCounter;
  newButton.id = "button" + buttonCounter++;
  newButton.addEventListener("click", function () {
    alert("Mano ID: " + this.id);
  });
  document.getElementById("buttonContainer").appendChild(newButton);
});
//======================================================================================
const parentList = document.getElementById("listContainer");
function generateLis() {
  let liElement = document.createElement("li");
  liElement.className = "removeListLi";
  let button = document.createElement("button");
  button.className = "removeListButton";
  button.innerText = "X";
  button.addEventListener("click", (e) => {
    let liToDelete = e.target.parentNode;
    parentList.removeChild(liToDelete);
  });
  liElement.appendChild(button);
  parentList.appendChild(liElement);
}
for (let i = 0; i < 5; i++) {
  generateLis();
}
//======================================================================================
const windowContainer = document.getElementById("activeWindowContainer");
function addWindow() {
  let card = document.createElement("div");
  card.className = "windowCard";
  let activeWindow = document.createElement("div");
  activeWindow.className = "cardWindow";
  let button = document.createElement("button");
  button.className = "button";
  button.innerText = "Paspausk";
  button.addEventListener("click", (e) => {
    const activeWindows = document.getElementsByClassName("active");
    activeWindows.length > 0 && activeWindows[0].classList.remove("active");
    let windowToActivate = e.target.parentNode.firstChild;
    windowToActivate.classList.add("active");
  });
  card.appendChild(activeWindow);
  card.appendChild(button);
  windowContainer.appendChild(card);
}
for (let i = 0; i < 5; i++) {
  addWindow();
}
//======================================================================================
const picks = [];
picks.push("https://picsum.photos/id/237/110/200");
picks.push("https://picsum.photos/id/238/110/200");
picks.push("https://picsum.photos/id/239/110/200");
picks.push("https://picsum.photos/id/240/110/200");
picks.push("https://picsum.photos/id/241/110/200");
picks.push("https://picsum.photos/id/242/110/200");
picks.push("https://picsum.photos/id/243/110/200");
picks.push("https://picsum.photos/id/244/110/200");

picks.forEach((item) => {
  let img = document.createElement("img");
  img.src = item;
  document.getElementById("photoGallery").appendChild(img);
});
document.getElementById("photoControlButton").addEventListener("click", () => {
  document.getElementById("imgPlaceHolder").src =
    picks[Math.floor(Math.random() * picks.length)];
});
//======================================================================================
document.getElementById("showTime").addEventListener("click", () => {
  let time = new Date();
  let total = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  document.getElementById("timeOutput").innerText = total;
});
//======================================================================================
document.getElementById("mirrorTheContent").addEventListener("click", () => {
  alert(document.getElementById("mirrorContent").value);
});
//======================================================================================
document.getElementById("calcBMI").addEventListener("click", () => {
  const height = document.getElementById("heightInput").value;
  const weight = document.getElementById("weightInput").value;
  document.getElementById("bmiRightSide").innerText = `BMI: ${(
    weight /
    (height * height)
  ).toFixed(2)}`;
});
//======================================================================================
document.getElementById("calcExp").addEventListener("click", () => {
  const km = document.getElementById("mkInput").value;
  const litr = document.getElementById("litrInput").value;
  const price = document.getElementById("priceInput").value;
  document.getElementById("expRightSide").innerText = `Kaina: ${
    km * litr * price
  } Eur`;
});
//======================================================================================
let totalAmmount = 0;
document.getElementById("addItem").addEventListener("click", (e) => {
  e.preventDefault();
  const item = document.getElementById("itemInput").value;
  const ammount = document.getElementById("ammountInput").value;
  const price = document.getElementById("itemPriceInput").value;
  if (item && ammount && price) {
    const line = document.createElement("li");
    line.className = "itemListItem";
    line.innerText = `${item} - ${ammount}vnt ${price} Eur`;
    document.getElementById("itemList").appendChild(line);
    totalAmmount += ammount * price;
  }
  document.getElementById(
    "totalItemCost"
  ).innerText = `Viso: ${totalAmmount} Eur`;
  document.getElementById("itemInput").value = "";
  document.getElementById("ammountInput").value = "";
  document.getElementById("itemPriceInput").value = "";
});
//======================================================================================
document.getElementById("checkDateInput").valueAsDate = new Date();
const checkList = [];
document.getElementById("addNewCheck").addEventListener("click", () => {
  const number = document.getElementById("checkNumberInput").value;
  const ammount = document.getElementById("checkAmmountInput").value;
  const date = document.getElementById("checkDateInput").value;
  if (number && ammount && date) {
    checkList.push({
      number: number,
      ammount: ammount,
      date: date,
    });
  }
  document.getElementById("checkNumberInput").value = "";
  document.getElementById("checkAmmountInput").value = "";
});
document.getElementById("calculateCheckTotal").addEventListener("click", () => {
  let totalSum = 0;
  checkList.forEach((item) => {
    totalSum += parseInt(item.ammount);
  });
  document.getElementById("totalSumOutput").innerText = `Viso: ${totalSum} Eur`;
});

document.getElementById("showCheckList").addEventListener("click", () => {
  let str = "";
  checkList.forEach((item) => {
    str += `<li class="checkListItem"><span class="checkNameSpan">Nr:${item.number}</span> <span class="checkAmmountSpan">${item.ammount}Eur</span><span class="checkDateSpan">${item.date}</span></li>`;
  });
  document.getElementById("checkListOutput").innerHTML = str;
});
