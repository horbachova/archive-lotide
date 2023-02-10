const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} and ${expected} are equal.`);
    return;
  }
  //Happy Path
  console.log(`❌❌❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
