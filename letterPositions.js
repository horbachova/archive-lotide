const isArraysEqual = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  } return false;
};


const assertArraysEqual = function(actual, expected) {
  if (isArraysEqual(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} and ${expected} are equal.`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
  }
};

const letterPositions = function(string) {
  const results = {};
  
  for (const [index, letter] of string.split('').entries()) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  }
  
  return results;
};
  

assertArraysEqual(letterPositions("hello").e, [1]);

