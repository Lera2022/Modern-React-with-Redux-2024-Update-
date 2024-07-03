// const data = [5, 1, 4, 3]
const data = [5, 10, 4, 3];

const data1 = ["t", "A", "a", "B", "b"];

data.sort(); // [1, 3, 4, 5]
// [10, 3, 4, 5]

data.sort((a, b) => {
  return a - b; // [3, 4, 5, 10]
});
