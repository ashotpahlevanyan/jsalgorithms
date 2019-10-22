// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let res = '';
    for(let i = str.length - 1; i > -1; i--) {
        res = res + str[i];
    }

    return res;

}

module.exports = reverse;
