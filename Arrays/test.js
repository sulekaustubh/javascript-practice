// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let temp1 = Math.max(...arr)
// console.log(temp1)
// let x = arr.indexOf(temp1)
// arr[x] = 0;
// let temp2 = Math.max(...arr)
// console.log(temp2)

// let sum = temp1 + temp2
// console.log(`total is ${sum} `)

// //   10  , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// // ];

// // console.log(Math.max(...arr))

// // const x = 20;
// // y = 1;
// // console.log(y);

// // let count = [];
// // for (i = 0; i < arr.length; i++){
// //     if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {

// //         count.push(arr[i]);
// //     }
// // }
// // console.log(count);
// // let a;
// // let b;
// // let c;

// // a = 3;
// // b = ++a;
// // c = a++;

// // console.log(a);
// // console.log(b);
// // console.log(c);

// for (let i = 1; i <= 5; i++){
//     setTimeout(function () {
//         console.log('Called' + i);
//     }, 1000 * i);
// }

// let x = [1, 3, [23, 4, 3, [4, 5, 7, [13, 24, 3, 4, [9, 9, 3, 4]]]]];
// console.log(x.flat(Infinity));

function calculateTotalPrice(prices, discount) {
    // Write your code here
    let discountedProduct = Math.max(...prices)
    let index = prices.indexOf(discountedProduct)
    // let discount = 
    prices[index] = prices[index] - ( prices[index]* (discount* (1/100)) );
    let sum = 0;
    let total = prices.reduce((sum, i) => sum + i )  
    // let prices
    // To debug: console.error('Debug messages...');
    
    // return console.log(discountedProduct);
    return console.log(Math.floor(total));
    // return console.log(prices, index, discount);
}

calculateTotalPrice([100, 400, 200], 20);