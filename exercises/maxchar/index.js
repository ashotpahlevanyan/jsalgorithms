// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

let string = "Hello There!";
const chars = {};

for(let char of string) {
    chars[char] = chars[char] + 1 || 1;
}

function maxChar(str) {

}

module.exports = maxChar;
