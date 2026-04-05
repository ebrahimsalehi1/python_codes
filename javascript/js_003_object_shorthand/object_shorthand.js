// Title:
// Stop using the function keyword inside Objects! 🛑

// ❌ Bad Code
const inputText1 = {
  value: 100,
  addValue: function (value) {
    return value + inputText1.value;
  },
};

// ✅ Good Code
const inputText2 = {
  value: 100,
  addValue(value) {
    return value + inputText2.value;
  },
};
