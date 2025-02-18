Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

function greet(name){
    return `Hello ${name}`
}
console.log(greet('Afridi'))
greet.describe();

// Function declaration
function add(a, b) {
    return a+b
}

//  Function expression
const substract = function(a, b){
    return a-b
}

// First class function - Can pass function as argument and also can return function as return value
function applyOperation(a, b, op){
    return op(a, b)
}
const result = applyOperation(5, 4, (x, y) => x ** y)

console.log(result);



function createCounter(){
    let count = 10;
    return function () {
        count++;
        return count
    }
}

const counter = createCounter()
console.log(counter());

function onef(){
    let myName = 'afridi'
}


