const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const dot = document.getElementById("dot");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const back = document.getElementById("back");

const result = document.getElementById("result");

let str = "";

// taking number input
one.addEventListener("click", () => {
  str += "1";
  result.innerText = str;
});
two.addEventListener("click", () => {
  str += "2";
  result.innerText = str;
});
three.addEventListener("click", () => {
  str += "3";
  result.innerText = str;
});
four.addEventListener("click", () => {
  str += "4";
  result.innerText = str;
});
five.addEventListener("click", () => {
  str += "5";
  result.innerText = str;
});
six.addEventListener("click", () => {
  str += "6";
  result.innerText = str;
});
seven.addEventListener("click", () => {
  str += "7";
  result.innerText = str;
});
eight.addEventListener("click", () => {
  str += "8";
  result.innerText = str;
});
nine.addEventListener("click", () => {
  str += "9";
  result.innerText = str;
});
zero.addEventListener("click", () => {
  str += "0";
  result.innerText = str;
});
dot.addEventListener("click", () => {
  str += ".";
  result.innerText = str;
});

// taking input for signs
add.addEventListener("click", () => {
  str += "+";
  result.innerText = str;
});
subtract.addEventListener("click", () => {
  str += "-";
  result.innerText = str;
});
multiply.addEventListener("click", () => {
  str += "*";
  result.innerText = str;
});
divide.addEventListener("click", () => {
  str += "/";
  result.innerText = str;
});

//
clear.addEventListener("click", () => {
  str = "";
  result.innerText = str;
});

back.addEventListener("click", () => {
  let newStr = str.slice(0, -1);
  str = newStr;
  result.innerText = str;
});
equal.addEventListener("click", () => {
  let n = str.length;
  let signs = ['+', '-', '*', '/'];
  if (signs.includes(str[0]) || signs.includes(str[n - 1])) {
    str = "Wrong Input";
  } 
  else {
    let sign = ''
    let op = "";
    let output = 0;
    for (let i = 0; i < n; i++) {
      if (signs.includes(str[i])) {      
        let num = Number.isInteger(op)
          ? Number.parseInt(op, 10)
          : Number.parseFloat(op);

        
        if (output == 0) {
          output = num;
        }
        else{
            if (sign === "+") output += num;
            else if (sign === "-") output -= num;
            else if (sign === "*") output *= num;
            else if (sign === "/") output /= num;
        }
        sign = str[i]
        op = "";
        // str=''
      } else if (i === n - 1) {
        op += str[i];
        let num = Number.isInteger(op)
          ? Number.parseInt(op, 10)
          : Number.parseFloat(op);

        console.log(
          `i = ${i}, num = ${num}, sign = ${sign}, output = ${output}`
        );

        if (sign === "+") output += num;
        else if (sign === "-") output -= num;
        else if (sign === "*") output *= num;
        else if (sign === "/") output /= num;
      } else {
        op += str[i];
      }
    }

    if (Number.isInteger(output)) {
      str = output.toString();
    } else{
        console.log(output.toFixed(2));
        str = output.toFixed(2).toString();

    }
  }
  result.innerText = str.toUpperCase();
  str = "";
});
