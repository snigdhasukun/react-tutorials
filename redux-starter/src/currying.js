function add(a, b) {
    return a + b;
}

// convert function with N argument => function with 1 argument
function add(a) {
    return function (b) {
        return a + b;
    } 
}

const add1 = add(1);
add1(5);
// other way of writng the above 2 lines
add(1)(5); // add(1, 5)

const add2 = a => b => a + b; // (a, b) => a + b