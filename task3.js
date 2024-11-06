const data = [
  { type: "food", name: "Pizza" },
  { type: "drink", name: "Coffee" },
  { type: "food", name: "Hot Dog" },
];

console.log(group(data, (item) => item.type));

function group(array, func) {
  // return Object.groupBy(array, func)

  const result = {};
  let key;
  for (const el of array) {
    key = func(el);
    if (!key[el]) {
      result[key] = [];
    }
    result[key].push(el);
  }
  return result;
}
