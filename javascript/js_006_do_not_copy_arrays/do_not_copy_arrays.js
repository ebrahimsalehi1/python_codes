// TITLE: Stop copying arrays 

// bad
const items = [1, 2, 3, 4];
const len = items.length;
const itemsCopy1 = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy1[i] = items[i];
}

// good
const itemsCopy2 = [...items];

console.log({ itemsCopy1, itemsCopy2 });
