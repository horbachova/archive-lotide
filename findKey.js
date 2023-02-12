// assert funcions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function
const findKey = function(obj, callback) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const item = obj[key];

    const result = callback(item);
    if (result) {
      return key;
    }
  }
};

//test code
const amountOfStars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(amountOfStars, amount => amount.stars === 2), 'noma');