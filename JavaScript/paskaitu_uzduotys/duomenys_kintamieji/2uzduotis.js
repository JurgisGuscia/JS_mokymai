let city = {
  name: "Kaisiadorys",
  country: "Lietuva",
  zone: "Kauno rajonas",
  founded: 1621,
  mayor: "Sarunas Cesna",
  size: "300 kv km.",
  population: 15000,
  exportInfo: function () {
    console.log(this.name);
    console.log(this.country);
    console.log(this.zone);
    console.log(this.founded);
    console.log(this.mayor);
    console.log(this.size);
    console.log(this.population);
  },
};
city.exportInfo();
