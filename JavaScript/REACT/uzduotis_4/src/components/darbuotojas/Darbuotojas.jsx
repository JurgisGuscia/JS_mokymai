import React from "react";

const worker = {
  name: "John Doe",
  profession: "Software Engineer",
  salary: 8000,
  time: 0.8, //etatas
  experience: 6,
};
const exportWorker = () => {
  return (
    <p>
      Darbuotojas: {worker.name} <br />
      Profesija: {worker.profession} <br />
      Uzmokestis: {worker.salary} <br />
      Etatas: {worker.time} <br />
      Stazas: {worker.experience} <br />
    </p>
  );
};
const checkSalary = (mark) => {
  return worker.salary >= mark
    ? `Darbuotojas uzdirba ${mark} arba daugiau`
    : `Darbuotojas uzdirba maziau nei ${mark}`;
};
const isNew = () => {
  return worker.experience >= 5 ? "Ilgametis darbuotojas" : "Naujokas";
};
const calcTotalSalary = () => {
  return worker.experience * 12 * worker.salary * worker.time;
};

export default function Darbuotojas() {
  return (
    <div>
      {exportWorker()}
      Darbuotojas viso uzdirbo: {calcTotalSalary()} <br />
      {isNew()} <br />
      {checkSalary(5000)}
      <br />
      =================================
    </div>
  );
}
