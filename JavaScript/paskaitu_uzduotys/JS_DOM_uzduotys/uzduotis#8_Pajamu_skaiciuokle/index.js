const payments = [
  { id: 1, type: "Pajamos", amount: 180, date: "2023-11-01 08:45:12" },
  { id: 2, type: "Pajamos", amount: 1200, date: "2023-09-15 14:20:30" },
  { id: 3, type: "Išlaidos", amount: 90, date: "2023-08-22 12:30:50" },
  { id: 4, type: "Pajamos", amount: 150, date: "2023-07-10 10:40:15" },
  { id: 5, type: "Pajamos", amount: 700, date: "2023-06-01 16:55:22" },
];

showList();
showSummary();
function showList() {
  for (const payment in payments) {
    let span = "";
    let sign = "";
    payments[payment].type === "Pajamos" ? (span = "green") : (span = "red");
    payments[payment].type === "Pajamos" ? (sign = "") : (sign = "-");
    document.getElementById("paymentDisplay").innerHTML += `
        <div class="card">
            <div class="id">ID: ${payments[payment].id}</div>
            <div class="type"><span class=${span}>${payments[payment].type}</span></div>
            <div class="ammount"><span class=${span}>${sign}${payments[payment].amount} &#8364;</span></div>
            <div class="date">${payments[payment].date}</div>
        </div>
        `;
  }
}

function showSummary() {
  let totalBalance = 0;
  let totalIn = 0;
  let totalOut = 0;
  let sign = "";
  let span = "";
  for (const payment in payments) {
    if (payments[payment].type === "Išlaidos") {
      totalOut += payments[payment].amount;
    } else {
      totalIn += payments[payment].amount;
    }
  }
  totalBalance = totalIn - totalOut;
  if (totalBalance > 0) {
    span = "green";
  } else {
    span = "red";
  }
  document.getElementById(
    "totalLeft"
  ).innerHTML = `<span class="${span}">${totalBalance} &#8364; </span>`;
  document.getElementById("totalIn").innerText = totalIn;
  document.getElementById("totalOut").innerText = totalOut;
}

function resetDisplays() {
  document.getElementById("paymentDisplay").innerHTML = "";
  document.getElementById("totalLeft").innerText = "";
  document.getElementById("totalIn").innerText = "";
  document.getElementById("totalOut").innerText = "";
}

function generateRandomEntry() {
  let obj = {};
  obj.id = payments.length + 1;
  let rand = Math.floor(Math.random() * 2);
  obj.type = rand === 1 ? "Pajamos" : "Išlaidos";
  obj.amount = Math.floor(Math.random() * 5000) + 1;
  let currentdate = new Date();
  let datetime =
    currentdate.getFullYear() +
    "-" +
    (currentdate.getMonth() + 1) +
    "-" +
    currentdate.getDate() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  obj.date = datetime;
  payments.push(obj);
}

document.getElementById("addNew").addEventListener("click", () => {
  document.getElementById("backdrop").classList.remove("hide");
  document.getElementById("entryForm").classList.remove("hide");

  document.getElementById("idInput").innerText = payments.length + 1;
  let currentdate = new Date();
  let datetime =
    currentdate.getFullYear() +
    "-" +
    (currentdate.getMonth() + 1) +
    "-" +
    currentdate.getDate() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  document.getElementById("dateInput").innerText = datetime;
});

document.getElementById("addImputButton").addEventListener("click", () => {
  const amountGiven = parseInt(document.getElementById("amountInput").value);
  const type = document.getElementById("in").checked ? "Pajamos" : "Išlaidos";
  let currentdate = new Date();
  let datetime =
    currentdate.getFullYear() +
    "-" +
    (currentdate.getMonth() + 1) +
    "-" +
    currentdate.getDate() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  if (amountGiven) {
    let obj = {
      id: payments.length + 1,
      type: type,
      amount: amountGiven,
      date: datetime,
    };
    payments.push(obj);
    document.getElementById("backdrop").classList.add("hide");
    document.getElementById("entryForm").classList.add("hide");
    document.getElementById("amountInput").value = "";
    document.getElementById("in").checked = true;
    resetDisplays();
    showList();
    showSummary();
  }
});

document.getElementById("cancelInputButton").addEventListener("click", () => {
  document.getElementById("amountInput").value = "";
  document.getElementById("in").checked = true;
  document.getElementById("backdrop").classList.add("hide");
  document.getElementById("entryForm").classList.add("hide");
});

document.getElementById("remove").addEventListener("click", () => {
  payments.pop();
  resetDisplays();
  showList();
  showSummary();
});

document.getElementById("addRandom").addEventListener("click", () => {
  generateRandomEntry();
  resetDisplays();
  showList();
  showSummary();
});
