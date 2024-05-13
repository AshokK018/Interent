// If else statements
let pill = 'red';
console.log(pill);

if (pill = 'red') {
    console.log('Good Tablet')
} else if (pill = 'blue') {
    console.log('Not a good tablet')
} else {
    console.log('Your are going to die')
}


// switch statements
switch(pill) {
    case 'red': {
        console.log('Hello')
    }
    case 'blue': {
        console.log('World')
    }
    default: {
        console.log('Kill or die')
        break;
    }
}

// Questions
//1.
//     let num = 2;
//     if (num % 2 == 0) {
//         console.log('Even');
//     } else if (num % 2 == 1) {
//         console.log('Odd');
//     } else {
//         console.log('Invalid Input');
//     }
// 2. 
//     let year = 2024;
//     if (year % 4 == 0) {
//         console.log('It is leap year')
//     } else if (year % 4 == 1) {
//         console.log('It is not a leap year.')
//     } else{
//         console.log('Invalid input!')
//     }
// 3. 
//     let marks = 85;
//     let grade;
//     if (marks >= 80) {
//         grade = 'A'
//     } else if (marks > 60 && marks >= 79) {
//         grade = 'B'
//     } else if (marks < 60 && marks >= 40) {
//         grade = 'C'
//     } else if (marks < 40 && marks >= 0) {
//         grade = 'D'
//     } else {
//         console.log('Invalid marks')
//     }
//     console.log('Your Grade is:', grade);
// 4. 
//     let side_a = 8;
//     let side_b = 8;
//     let side_c = 9;
//     // In a scalene triangle, all the sides of a triangle are of different length.
//     // In an isosceles triangle, two sides of a triangle are of the same measure.
//     // In an equilateral triangle, all the sides of a triangle are of equal length.
//     if (side_a == side_b && side_b == side_c) {
//         console.log('It is equilateral triangle')
//     } else if (side_a == side_b || side_b == side_c || side_a == side_c) {
//         console.log('It is isosceles triangle')
//     } else {
//         console.log('It is scalene triangle')
//     }
// 5.
//     function convertToLetterGrade(numericalGrade) {
//         if (numericalGrade >= 90) {
//         return 'A'; // Grade 90 and above is an A
//         } else if (numericalGrade >= 80) {
//         return 'B'; // Grade 80-89 is a B
//         } else if (numericalGrade >= 70) {
//         return 'C'; // Grade 70-79 is a C
//         } else if (numericalGrade >= 60) {
//         return 'D'; // Grade 60-69 is a D
//         } else {
//         return 'F'; // Grade below 60 is an F
//         }
//     }
//     console.log(convertToLetterGrade(95));
// 6.
//     let day = 5;
//     switch(day) {
//         case 1: {
//             console.log('Monday')
//             break;
//         }
//         case 2: {
//             console.log('Tuesday')
//             break;
//         }
//         case 3: {
//             console.log('Wednesday')
//             break;
//         }
//         case 4: {
//             console.log('Thrusday')
//             break;
//         }
//         case 5: {
//             console.log('Friday')
//             break;
//         }
//         case 6: {
//             console.log('Saturday')
//             break;
//         }
//         case 7: {
//             console.log('Sunday')
//             break;
//         }
//     }
// 7.
//     let season = '12-3';
//     switch (season) {
//         case 4-5: {
//             console.log('It is Summer')
//             break;
//         }
//         case 6-9: {
//             console.log('It is Rainy')
//             break;
//         }
//         case 10-11: {
//             console.log('It is Post-monsoon')
//             break;
//         }
//         case 12-3: {
//             console.log('It is Winter')
//             break;
//         }
//     }
// 8. 
//     function priceDiscount(price) {
//         switch (price) {
//             case (price >= 0) && (price <= 100): {
//                 console.log('Zero discount');
//                 break;
//             }
//             case (price >= 101) && (price <= 500): {
//                 console.log('10%');
//                 break;
//             }
//             case (price >= 501) && (price <= 1000): {
//                 console.log('20%');
//                 break;
//             }
//             case (price >= 1001): {
//                 console.log('discount % off thier phone battery')
//             }
//         }
//     }
//     priceDiscount(510)
// 9. 
//     let month = 5;
//         switch(month) {
//             case 1: {
//                 console.log('Jan')
//                 break;
//             }
//             case 2: {
//                 console.log('Feb')
//                 break;
//             }
//             case 3: {
//                 console.log('Mar')
//                 break;
//             }
//             case 4: {
//                 console.log('Arp')
//                 break;
//             }
//             case 5: {
//                 console.log('May')
//                 break;
//             }
//             case 6: {
//                 console.log('Jun')
//                 break;
//             }
//             case 7: {
//                 console.log('Jul')
//                 break;
//             }
//             case 8: {
//                 console.log('Aug')
//                 break;
//             }
//             case 9: {
//                 console.log('Sep')
//                 break;
//             }
//             case 10: {
//                 console.log('Oct')
//                 break;
//             }
//             case 11: {
//                 console.log('Nov')
//                 break;
//             }
//             case 12: {
//                 console.log('Dec')
//                 break;
//             }
//         }
// 10. 
//     function areaOfbasic(shape) {
//         switch (shape) {
//             case 'cricle': {
//                 let cvalue = 5;
//                 return Math.PI * cvalue * cvalue
//                 break;
//             }
//             case 'sqaure': {
//                 let svalue = 7;
//                 return svalue * svalue
//                 break;
//             }
//             case 'triangle': {
//                 let bvalue = 4;
//                 let hvalue = 5;
//                 return 0.5 * bvalue * hvalue
//             }
//         }
//     }