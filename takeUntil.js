const takeUntil = function(array, callback) {
const results = [];

for (const item of array) {

//exit when callback returns a truthy value
if (callback(item)) {
    return results;
}
    results.push(item);

}

return results;
}