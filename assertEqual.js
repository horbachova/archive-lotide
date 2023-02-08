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
