let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let temp1 = Math.max(...arr)
console.log(temp1)
let x = arr.indexOf(temp1)
arr[x] = 0;
let temp2 = Math.max(...arr)
console.log(temp2)

let sum = temp1 + temp2
console.log(`total is ${sum} `)


//   10  , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// console.log(Math.max(...arr))

// const x = 20;
// y = 1;
// console.log(y);

// let count = [];
// for (i = 0; i < arr.length; i++){
//     if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {

//         count.push(arr[i]);
//     }
// }
// console.log(count);
// let a;
// let b;
// let c;

// a = 3;
// b = ++a;
// c = a++;

// console.log(a);
// console.log(b);
// console.log(c);
