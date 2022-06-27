// a+b
function add(a, b) {
    return a+b;
}

// a-b
function subtract(a, b) {
    return a-b;
}

// a*b
function multiply(a, b) {
    return a*b;
}

// a/b
function divide(a, b) {
    return a/b;
}

// n++ javascript is stupid.
// let number = 5;
// number++; //=> 5... hmmmm
// number; //=> 6
function increment(n) {
    return n+=1;
}

// n--
function decrement(n) {
    return n-=1;
}

// parses n as an integer and returns the parsed integer
function makeInt(n) {
    return parseInt(n, 10);
}

// parse n as a float, but function name isnt self decriptive
function preserveDecimal(n) {
    return parseFloat(n);
}