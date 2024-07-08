// const data = [5, 1, 4, 3]
const data = [5, 10, 4, 3];

data.sort(); // [1, 3, 4, 5]
// [10, 3, 4, 5]

data.sort((a, b) => {
  return a - b; // [3, 4, 5, 10]
});

const data1 = ["t", "A", "a", "B", "b"];

data1.sort(); // ['A', 'B', 'a', 'b', 't']

data1.sort((a, b) => {
  return a.localeCompare(b); // ['a', 'A', 'b', 'B', 't']
});

const data2 = [
  { name: "Tomato", cost: 10, weight: 5 },
  { name: "Carrot", cost: 15, weight: 2 },
  { name: "Onion", cost: 5, weight: 7 },
];

function getSortValue(vegetable) {
  // return vegetable.cost
  // return vegetable.weight;
  // return vegetable.cost / vegetable.weight

  return vegetable.name;
}

const sortOrder = "asc";

data2.sort((a, b) => {
  //   { name: 'Onion', cost: 5, weight: 7}
  const valueA = getSortValue(a); //   { name: 'Tomato', cost: 10, weight: 5}
  const valueB = getSortValue(b); //   { name: 'Carrot', cost: 15, weight: 2}

  const reverseOrder = sortOrder === "asc" ? 1 : -1;

  if (typeof valueA === "string") {
    // { name: 'Carrot', cost: 15, weight: 2}
    // return valueA.localeCompare(valueB); // { name: 'Onion', cost: 5, weight: 7}
    // return valueA.localeCompare(valueB) * - 1;

    return valueA.localeCompare(valueB) * reverseOrder;
  } else {
    // { name: 'Tomato', cost: 10, weight: 5}

    // return valueA - valueB;
    // return (valueA - valueB) * - 1;

    return (valueA - valueB) * reverseOrder;
  }
});
