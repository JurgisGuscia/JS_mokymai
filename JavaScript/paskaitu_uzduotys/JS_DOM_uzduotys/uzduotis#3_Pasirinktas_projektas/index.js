document.getElementById("calculate").addEventListener("click", () => {
  const val1 = document.getElementById("length").value;
  const val2 = document.getElementById("width").value;
  const val3 = document.getElementById("thickness").value;
  const val4 = document.getElementById("ammount").value;
  if (val1 && val2 && val3 && val4) {
    const plank = {
      lenght: val1 / 1000, // /1000 verciam is mm i m.
      width: val2 / 1000,
      thickness: val3 / 1000,
      ammount: val4,
    };
    const price = 100; //medienos kubo kaina
    const result = (
      plank.lenght *
      plank.width *
      plank.thickness *
      plank.ammount
    ).toFixed(2);
    document.getElementById(
      "output"
    ).innerText = `Užsakyta ${result} kūbinių metrų medienos, kaina: ${
      price * result
    }`;
  } else {
    document.getElementById("output").innerText = "Įveskite visus duomenis.";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("length").value = "";
  document.getElementById("width").value = "";
  document.getElementById("thickness").value = "";
  document.getElementById("ammount").value = "";
  document.getElementById("output").innerText = "Rezultatų kol kas nėra.";
});
