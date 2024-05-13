// throw

// throw 42;

// throw {
//     head: 'Tail'
// }

// Try....Catch...Finally
let divide = (a, b) => {
    try {
        if (b == 0) {
            throw "Division by zero"
        } else {
            return a / b;
        }
    }
    catch(e) {
        console.log(e);
        console.log('Why are you dividing by 0?')
    }
}

let sum = (a, b, c) => {
    let div = divide(a, b);
    return div + c
}

console.log(sum(1, 0, 2));

// compute area only when lenght and width are positive numbers
let area = (lenght, width) => {
    try {
        if (lenght < 0 || width < 0) {
            throw 'Negative values'
        } else {
            return lenght * width;
        }
    }
    catch(e) {
        alert(e);
    }
}
console.log(area(4, 9));

// Create a function that takes an array of numbers as input and returns the sum of all the numbers.
let sumarray = (i) => {
    try {
        if (i.length == 0) {
            throw 'Empty Array'
        } else {
            let su = 0;
            for (let j = 0; j < i.length; j++) {
                su = su + i[j];
            }
            return su;
        }
    }
    catch(e) {
        console.log(e);
    }
}
console.log(sumarray([]));

