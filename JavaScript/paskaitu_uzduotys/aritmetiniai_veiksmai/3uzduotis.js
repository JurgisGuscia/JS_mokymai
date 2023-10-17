let myNumber = 7;
for (let i = 1; i < 11; i++) {
  console.log(`${myNumber} * ${i} = ${i * myNumber}`);
}

console.log("==============================================");

myNumber = 34;

console.log(
  `Skaicius: ${myNumber}, skaitmenu suma: ${
    Math.floor(myNumber / 10) + (myNumber % 10)
  }`
);
