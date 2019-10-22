// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const spl = str.split('');
    for (let i = 0; i < spl.length/2 + 1; i++) {
        if(spl[i] !== spl[spl.length - i - 1]) {
            return false;
        }
    }
    return true;
}

module.exports = palindrome;


// function palindrome(str) {
//     return str === str.split('').reduce((rev, char) => char + rev, '');
// }
