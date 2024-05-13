// for (let i = 0; i < 10; i++)

// Question
// 1.
//     for (let i = 0; i < 10; i++) {
//         console.log(i)
//     }
// 2.
//     let n = 5;
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//     }
//     console.log('Factorial of', n, 'is', fact);
// 3.
//     let x = 0;
//     let sum = 0;
//     let last = 100;
//     while (x <= last) {
//         sum = sum + x;
//         x++;
//     }
//     console.log('Total sum from 1 to 100 is:', sum);
// 4.
//     let number = 5;
//     let table = [];
//     for(let i = 1; i <= 10; i++) {
//         table.push(number * i);
//     }
// 5.
//     function prime(pnum) {
//         for(let i = 2; i * i < n; i++) {
//             if( n * i == 0) {
//                 return 'Not prime';
//             }
//         }
//         return 'Prime'
//     }
//     pnum(5)
// 6.
//     let a = 0;
//     let b = 1;
//     let sum = 0;
//     let endLimit = 5;
//     while (true) {
//         for (let i = 2; i <= endLimit; i++) {
//             sum = sum + i;
//             console.log(sum);
//         }
//     }
// 7.
//     function largeElement(arr) {
//         if (arr.lenght == 0) {
//             return 'Array is empty'
//         }
//         let largeest = arr[0];
//         for (let i = 1; i < arr.lenght; i++) {
//             if (arr[i] > largest) {
//                 largeest = arr[i];
//             }
//         }
//         return largest;
//     }
//     console.log('largest value is:', largeElement([3,5,7,2,8]));
// 8.
//     let str1 = 'harshith';
//     let count = 0;
//     for (let i = 0; i < str1.lenght; i++) {
//         switch(str1[i]) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u': {
//                 count++;
//                 break;
//             }
//         }
//     }
//     return count;
// 9.
//     let nDigits = (num) => {
//         let nStr = num + '';// convert number to string
//         let sum = 0;
//         for(let i = 0; i < nStr.length; i++) {
//             sum = sum + Number(nStr[i]);
//         }
//         return sum;
//     }
// 10.
//     let palindrome = (str) => {
//         //reverse the string and check the given str and the reversed string are equal
//         let revStr = '';
//         for(let i = str.length - 1; i >= 0; i--) {
//             revStr += str[i];
//         }
//         if(str == revStr) {
//             return true
//         } else return false;
//     }