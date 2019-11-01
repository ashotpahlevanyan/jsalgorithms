// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    
}

module.exports = pyramid;

//
// function pyramid(n) {
//     for(let i = 0; i < n; i++) {
//         let stair = '';
//         const midpoint = Math.floor((2 * n -1)/2);
//         for(let j = 0; j< 2*n - 1; j++) {
//             if(j < midpoint - i || j > midpoint + i) {
//                 stair += ' ';
//             } else {
//                 stair += '#';
//             }
//         }
//         console.log(stair);
//     }
// }
