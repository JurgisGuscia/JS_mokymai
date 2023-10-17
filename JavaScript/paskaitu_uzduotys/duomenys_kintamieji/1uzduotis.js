let student = {
  name: "Jurgis",
  surname: "Guscia",
  age: 31,
  height: 185,
  weight: 95,
  school: "Vilnius coding school",
  group: "1grupe",
  course: "javascript",
  program: "Ilgieji javascript mokymai",
  credit: 100,
  exportInfo: function () {
    console.log(this.name);
    console.log(this.surname);
    console.log(this.age);
    console.log(this.height);
    console.log(this.weight);
    console.log(this.school);
    console.log(this.group);
    console.log(this.program);
    console.log(this.credit);
  },
};
student.exportInfo();
