// let array1 = [1, 2, 3, 4];
// let array2 = [5, 6, 7, 8];
// console.log([...array1, ...array2]);//spread operator

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let [array1, ...array2] = array;
console.log(array1);
console.log(array2);