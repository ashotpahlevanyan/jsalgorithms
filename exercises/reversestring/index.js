// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}

module.exports = reverse;

// function reverse(str) {
//     let reversed = '';
//
//     for(let character of str) {
//         reversed = character + reversed;
//     }
//
//     return reversed;
// }


// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//
//     return arr.join('');
//
// }

// function reverse(str) {
//     let res = '';
//     for(let i = str.length - 1; i > -1; i--) {
//         res = res + str[i];
//     }
//
//     return res;
//
// }
