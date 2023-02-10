
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const key of allItems) {
    if (!itemsToCount[key]) {
      continue;
    }

    if (results[key]) {
      results[key] = 0;
    }
    //Happy Path
    results[key]++;
  }
  return results;
};

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
