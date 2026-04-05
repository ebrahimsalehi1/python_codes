// TITLE: Stop using the Array constructor.
// bad
const items1 = new Array();

// good
const items2 = [];

console.log(typeof items1, typeof items2);
