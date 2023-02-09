const isAgrumentsEqual = function (a, b) {
    if (a == b) {
        return true
    }
}

const assertEqual = function (actual, expected) {
    if (isAgrumentsEqual(actual, expected) === true ) {
        console.log(`✅✅✅ Assertion Passed: ${actual} and ${expected} are equal.`);

    } else {
        console.log(`❌❌❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
    }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const countOnly = function(allItems, itemsToCount) {
    const results = {};

    for (const item of allItems) {
      if (itemsToCount[item]) {
        if (results[item]) {
          results[item] += 1;
        } else {
          results[item] = 1
        }
      }
    }
    return results;
}

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);