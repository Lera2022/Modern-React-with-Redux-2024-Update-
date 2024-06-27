const opts = [
  { label: "Not spicy", value: "mild" },
  { label: "A little spicy", value: "spicy" },
  { label: "Really spicy!", value: "extra_spicy" },
];

// const myFunction = (options /* ??? */) => {};
const myFunction = (options, selected) => {
  if (!selected) {
    return "No item selected";
  } else {
    return selected.label;
  }
};

myFunction(opts /* ??? */); // 'No item selected'
myFunction(opts, null); // 'No item selected'

myFunction(opts /* ??? */); // 'A little spicy'
myFunction(opts, opts[1]); // 'A little spicy'
