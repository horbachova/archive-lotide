const without = function(sourse, itemToRemove) {
  const results = [];

  for (const item of sourse) {
    if (!itemToRemove.includes(item)) {
      results.push(item);
    }
  }

  return results;
};

let results = without([1, 2, 3, 4], [2, 4]);
console.log(results); //[1, 3]