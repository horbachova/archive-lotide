const isArraysEqual = function (arr1, arr2) {
    if (arr1.length = arr2.length) {
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        } return true
    } return false
}


const eqArrays = function (actual, expected) {
    if (isArraysEqual(actual, expected) === true ) {
        console.log(`✅✅✅ Assertion Passed: ${actual} and ${expected} are equal.`);

    } else {
        console.log(`❌❌❌ Assertion Failed: ${actual} and ${expected} are NOT equal.`);
    }
};
