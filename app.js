




// 1-masala

// const a = [1,2,3,4,2,3]
//
// function count_duplicate(a){
//     let counts = {}
//
//     for(let i =0; i < a.length; i++){
//         if (counts[a[i]]){
//             counts[a[i]] += 1
//         } else {
//             counts[a[i]] = 1
//         }
//     }
//     for (let prop in counts){
//         if (counts[prop] >= 2){
//             console.log(`${prop} takrorlanayapti`)
//         }
//     }
//     console.log(a)
// }
//
// count_duplicate(a)





// 2-masala
// let arr = [1, 2, 3, 4, 5].map(n => n * n);
// console.log(arr);

// 2-masalani 2-usuli
// let arr = [1, 2, 3, 4, 5];
// let n = arr.map((item) => {
//     return item * item;
// });
// console.log(n);







// 3-masala
// let array = [1, -4, 12, 0, -3, 29, -150];
//  solo = array.filter(function (a) {return a >= 0;}),
//  sum = solo.reduce(function (a,b) {return a+b; });
// console.log(sum)

// 3-masala 2-usuli
// let arr = [1, -4, 12, 0, -3, 29, -150];
// sum = arr.reduce(function (r,a){
//     return a > 0 ? r + a : r;
// })
//
// console.log(sum)



// 4-masala
// let name = 'George Raymond Richard Martin';
// let  str = name.split(' ').reduce((acc, subname) =>
//     acc + subname[0] + '', '')
// console.log( str)





// 5-masala
// let str = "Xushnud"
// function soz(n){
// return [...n].every(harf => isNaN(harf));
// }
//
// console.log(soz(str))

// sharx: joy tashlasa false qaytaradi va son yoki boshqa datatype kiritsa false qaytaradi joy tashlamay faqat so'z yozsa true chiqaradi



// 6-masala

// let str = "Hello world"
// function findLongestWord(str) {
//     var split = str.split(" ");
//     var maxLength = 0;
//     var longestWord = "";
//     var len = split.length;
//     for (j = 0; j < len; j++)
//     {
//         if (split[j].length > maxLength)
//         {
//             longestWord = split[j];
//             maxLength = split[j].length;
//         }
//     }
//
//     return longestWord;
// }
//
// console.log(findLongestWord(str))





// 7-masala
// let str = "Abdulloh darsga kech qolma";
// let array = str.toLowerCase().split(" ");
// let arr = false;
//
// array.forEach((item) => {
//     if (item === "") {
//         console.log("bo'sh joy bor");
//         arr = true;
//     }
// });
//
// if (!arr) {
//     console.log("bo'sh joy yuq");
// }

// 7-masala 2-usuli
// let str = "Abdulloh darsga kech qolma";
// let arrray = str.toLowerCase().split(" ");
// let count = 0;
// let arrray2 = arrray.filter((item) => item === "" ? console.log("bo'sh joy bor") : console.log("bo'sh joy yuq"));







// 8-masala
// let example = {a: 2, b: 5, c: 7}
// function object(obj) {
//     let result = [];
//
//     for (let key in obj) {
//         if (obj[key] !== undefined) {
//             result.push(`${key}${obj[key]}`);
//         }
//     }
//
//     return result;
// }
// let stringArray = object(example);
//
// console.log(stringArray);
