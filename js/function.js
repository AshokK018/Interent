// 1.
//     function area(lenght, width) {
//         return lenght * width;
//     }
//     console.log(area(10, 5));
// 2.
//     function sumArray(a) {
//         let sum = 0;
//         for (let i = 0; i < a.length; i++) {
//             sum = sum + a[i];
//         }
//         return sum;
//     }
//     console.log(sumArray([1, 4, 6, 9]));
// 3. 
//     function reverse(str) {
//         let revstr = "";
//         for (let i = str.length - 1; i>= 0; i--) {
//             revstr = revstr + str[i];
//         }
//         return revstr;
//     }
//     console.log(reverse("Dayananda"));
// 4.
//     let minMax = (a) => {
//         if(a.length == 0) return 'Empty array';
//         let min = a[0];
//         let max = a[0];
//         for(let i = 0; i < a.length; i++) {
//             if(a[i] > max) {
//                 max = a[i]
//             }
//             if(a[i] < min) {
//                 min = a[i]
//             }
//         }
//         return {
//             minimum: min,
//             maximum: max
//         }
//     }
// 5.
//     let reverse = (str) => {
//         let revStr = '';
//         for(let i = str.length - 1; i <= 0; i++) {
//             revStr += str[i];
//         }
//         return revStr;
//     }
// 7.
//     let gcd = (a, b) => {
//         //suppose a < b, then gcd(a, b) = gcd(a, r) where r is the remainder when b is divided by a, i.e. b = qa + r
//         //if either of a or b is equal to 0, then gcd is the non-zero number
//         if(a == 0) return b;
//         if(b == 0) return a;
//         let r;
//         if(a < b) {
//             r = b % a;
//             return gcd(a, r);//this is a function that calls itself. Such functions are called recursive functions. You can ignore this problem for this exam.
//         } else {
//             r = a % b;
//             return gcd(b, r); 
//         }
//     }
// 9.
//     let unique = (a) => {
//         //we create a new empty array and read elements from a and put it in new array if it is not already in the new array
//         let newA = [];
//         for(let i = 0; i < a.length; i++) {
//             //check if a[i] is already in newA or not
//             let isPresent = false;
//             for(let j = 0; j < newA.length; j++) {
//                 if(a[i] == newA[j]) {
//                     isPresent = true;
//                     break;//exit the loop
//                 }
//             }
//             if(!isPresent) {
//                 newA.push(a[i]);
//             }
//         }
//         return newA;
//     }
// 10.
//     let words = (sentence) => {
//         //assume for now that the sentence only contains single space to separate words.
//         let wds = [];
//         //loop to read characters from the sentence
//         let newWord = '';
//         let i = 0;
//         while(i < sentence.length) {
//             if(sentence[i] == ' ' || sentence[i] == '.') {
//                 //put the found word in wds array
//                 wds.push(newWord);
//                 //reset the newWord
//                 newWord = '';
//             } else {
//                 newWord += sentence[i];//read characters to form the word
//             }
//             i++;//move to the next character
//         }
//         return wds;
//     }
//     console.log(words("This is a new sentence."))