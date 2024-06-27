const opts = [
  { label: "Not spicy", value: "mild" },
  { label: "A little spicy", value: "spicy" },
  { label: "Really spicy!", value: "extra_spicy" },
];

// const myFunction = (options, /* ??? */) => {
const myFunction = (options, isOpen) => {
  if (isOpen) {
    return "Menu open";
  }

  return "Menu closed";
};

myFunction(opts /* ??? */); // 'Menu closed'
myFunction(opts, false); // 'Menu closed'

myFunction(opts /* ??? */); // 'Menu open'
myFunction(opts, true); // 'Menu open'
