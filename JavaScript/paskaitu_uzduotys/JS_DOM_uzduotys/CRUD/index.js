let entries = 0;
let editing = false;
let editLine = "";
const nameInput = document.getElementById("firstName");
const lasNameInput = document.getElementById("lastName");
const rollNoInput = document.getElementById("roll");
document.getElementById("submit").addEventListener("click", () => {
  const nameVal = nameInput.value;
  const lastNameVal = lasNameInput.value;
  const rollVal = rollNoInput.value;
  if (nameVal && lastNameVal && rollVal) {
    if (editing) {
      document.querySelector(`#${editLine} :nth-child(1)`).innerText =
        nameInput.value;
      document.querySelector(`#${editLine} :nth-child(2)`).innerText =
        lasNameInput.value;
      document.querySelector(`#${editLine} :nth-child(3)`).innerText =
        rollNoInput.value;
      editing = false;
    } else {
      let newEntry = document.createElement("div");
      newEntry.id = `row${++entries}`;
      newEntry.className = "tableRow";
      let firstName = document.createElement("div");
      firstName.className = "firstNameContainer";
      firstName.innerText = nameVal;
      let lastName = document.createElement("div");
      lastName.className = "lastNameContainer";
      lastName.innerText = lastNameVal;
      let roll = document.createElement("div");
      roll.className = "rollNoContainer";
      roll.innerText = rollVal;
      let actions = document.createElement("div");
      actions.className = "actionsContainer";
      let editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "btn btn-warning";
      editButton.innerText = "Edit";
      editButton.addEventListener("click", (e) => {
        let parent = e.target.parentNode;
        let grandParent = parent.parentNode;
        let editName = document.querySelector(
          `#${grandParent.id} :nth-child(1)`
        ).innerText;
        let editLastName = document.querySelector(
          `#${grandParent.id} :nth-child(2)`
        ).innerText;
        let editRollNo = document.querySelector(
          `#${grandParent.id} :nth-child(3)`
        ).innerText;
        nameInput.value = editName;
        lasNameInput.value = editLastName;
        rollNoInput.value = editRollNo;
        editing = true;
        editLine = grandParent.id;
      });
      let deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "btn btn-danger";
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", (e) => {
        let parent = e.target.parentNode;
        let grandParent = parent.parentNode;
        document.getElementById("tableWrapper").removeChild(grandParent);
      });
      actions.appendChild(editButton);
      actions.appendChild(deleteButton);
      newEntry.appendChild(firstName);
      newEntry.appendChild(lastName);
      newEntry.appendChild(roll);
      newEntry.appendChild(actions);
      document.getElementById("tableWrapper").appendChild(newEntry);
    }
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("roll").value = "";
  }
});
