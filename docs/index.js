// let header1 = document.getElementById('head2');
// header1.style.display = 'none';

document.addEventListener("DOMContentLoaded", function(event) { 
    //Do work
    let nav = document.getElementById('navi');
    let bar = document.getElementById('navigate');
    nav.addEventListener('click', () => {
        // bar.style.display = 'none';
    })
    
    // bar.style.display = 'none';
    console.log(navi);
});

























// function mergeSortedArray(array1, array2) {
//     array1 = array1.concat(array2);
//     return array1.sort((a, b) => a - b);
// }

// function isBalanced(string) {
//     // let leftcurly = string.match(/{/g) && string.match(/{/g).length;
//     // let rightcurly = string.match(/}/g) && string.match(/}/g).length;
//     // let leftsquare = string.match(/\[/g) && string.match(/\[/g).length;
//     // let rightsquare = string.match(/\]/g) && string.match(/\]/g).length;
//     // let leftbracket = string.match(/\(/g) && string.match(/\(/g).length;
//     // let rightbracket = string.match(/\)/g) && string.match(/\)/g).length;
//     // return leftcurly == rightcurly && leftsquare === rightsquare && leftbracket === rightbracket;
//     let brackets = '';
//     for (str of string) {
//         if (str === '(') {
//             brackets += str;
//         }
//         else if (str ===')') {
//             brackets += '(';
//         }
//         else if (str ==='[') {
//             brackets += '[';
//         }
//         else if (str ===']') {
//             brackets += ']';
//         }
//         else if (str === '{' || str === '}') {
//             brackets += '{'
//         }
//         else {
//             continue;
//         }
//     }
//     //console.log(brackets.length % 2);
//     //return brackets;
//     if (brackets.length % 2 === 0) {
//         let mid = brackets.length / 2;
//         console.log(brackets.slice(0, mid) + ', ' + brackets.slice(mid, brackets.length))
//         if (brackets.slice(0, mid) === brackets.slice(mid, brackets.length)) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     else {
//         return false;
//     }

// }


// console.log(isBalanced('function foo(){}'));
// console.log(isBalanced('{}}'));
// console.log(isBalanced("console.log('a'}"));
// console.log(isBalanced(""));

// // console.log(mergeSortedArray([2, 3, 5, 57, 23, 98, 8, 9, 8], [3, 2, 8, 29, 29, 39, 4]))
// // console.log('boy')