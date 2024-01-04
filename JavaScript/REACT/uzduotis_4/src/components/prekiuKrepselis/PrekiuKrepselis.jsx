import React from "react";
const shoppingList = [
  {
    id: 997,
    name: "Apples",
    price: 2.5,
    amount: 3,
    discount: 0.1, // 10% discount
  },
  {
    id: 87,
    name: "Bread",
    price: 1.75,
    amount: 2,
    discount: 0, // no discount
  },
  {
    id: 355,
    name: "Milk",
    price: 3,
    amount: 1,
    discount: 0.15, // 15% discount
  },
];

const printObjects = (list) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Pavadinimas</th>
          <th>Kaina</th>
          <th>Kiekis</th>
          <th>Nuolaida</th>
        </tr>
        {list.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.amount}</td>
            <td>{item.discount * 100}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const getTotalDiscount = (list) => {
  let total = 0;
  list.forEach((item) => {
    total += item.price * item.amount * item.discount;
  });
  return total;
};

const calcTotalPrice = (list) => {
  let total = 0;
  list.forEach((item) => {
    total += item.price * item.amount * (1 - item.discount);
  });
  return total;
};

const getMoreExpensive = (list, price) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Pavadinimas</th>
          <th>Kaina</th>
          <th>Kiekis</th>
          <th>Nuolaida</th>
        </tr>
        {list
          .filter((item) => {
            return item.price > price;
          })
          .map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
              <td>{item.discount * 100}%</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default function PrekiuKrepselis() {
  return (
    <div>
      PrekiuKrepselis:
      {printObjects(shoppingList)}
      <br />
      Viso sutaupyta suma: {getTotalDiscount(shoppingList)} <br />
      Viso prekes kainuos: {calcTotalPrice(shoppingList)} <br />
      <br />
      Brangiu prekiu sarasas: {getMoreExpensive(shoppingList, 2)}
    </div>
  );
}
