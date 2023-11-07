document.getElementById("calc").addEventListener("click", () => {
  const emplNumber = document.getElementById("empl").value;
  const breadPerEmpl = document.getElementById("breadPerEmpl").value;
  const order = document.getElementById("order").value;
  const breadPerDay = emplNumber * breadPerEmpl;
  document.getElementById("error").classList.add("hide");
  document.getElementById("displayList").classList.remove("hide");
  document.getElementById("capacityOutput").innerText = breadPerDay;
  document.getElementById("orderOutput").innerText = order;
  document.getElementById("succesOutput").innerText =
    order <= breadPerDay ? "Taip" : "Ne";
});

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("displayList").classList.add("hide");
  document.getElementById("error").classList.remove("hide");
  document.getElementById("empl").value = "";
  document.getElementById("breadPerEmpl").value = "";
  document.getElementById("order").value = "";
});
