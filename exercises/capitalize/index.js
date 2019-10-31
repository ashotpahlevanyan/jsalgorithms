// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function capitalize(str) {
    const words = str.split(' ');

    const capWords = words.map(word => {
        return word ? capitalizeWord(word) : '';
    });

    return capWords.join(' ');
}

module.exports = capitalize;
