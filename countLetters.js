const isAgrumentsEqual = function(a, b) {
  if (a === b) {
    return true;
  }
};

const assertEqual = function(actual, expected) {
  if (isAgrumentsEqual(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} and ${expected} are equal.`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
  }
};


const countLetters = function(string) {
  const count = {};
  for (const i of string) {

    if (count[i]) {
      count[i] += 1;
    } else {
      count[i] = 1;
    }
  } return count;
};

console.log(countLetters('LHL'));