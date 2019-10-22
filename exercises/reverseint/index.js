// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const sign = n < 0 ? -1 : 1;
    const posN = n * sign;

    return parseInt(posN.toString().split('').reduce((rev, char) => char + rev, '')) * sign;
}

module.exports = reverseInt;
