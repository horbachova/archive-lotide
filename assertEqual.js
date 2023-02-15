const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
    return;
  }
  //Happy Path
  console.log(`✅✅✅ Assertion Passed: ${actual} and ${expected} are equal.`);
};

module.exports = assertEqual;
