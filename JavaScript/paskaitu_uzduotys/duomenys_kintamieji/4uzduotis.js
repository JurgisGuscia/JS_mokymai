let animal = {
  name: "Suo",
  age: "5 m.",
  color: "juoda",
  weight: "35kg",
  exportInfo: function () {
    let string = `Gyvunas: ${this.name} (${this.age}) turi ${this.color} kailio spalva ir sveria ${this.weight} `;
    console.log(string);
  },
};
animal.exportInfo();

let number = 25;
console.log(
  `Skaicius - ${number}, isvedimas - ${number}${number}${number}${number}${number}`
);

console.log(
  `Skaicius - ${number}, isvedimas - ${number} ${number} ${number} ${number} ${number}`
);
