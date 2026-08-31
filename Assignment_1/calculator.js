const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

let result;

if (operation === "add"){
    result = num1 + num2;
}
else if (operation ==="subtract"){
    result = num1 - num2;
}
else if (operation === "multiply") {
    result = num1 * num2;
}
else if (operation === "divide") {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
        process.exit();
    }
    result = num1 / num2;
}
else {
    console.log("Invalid operation");
    console.log("Use: add, subtract, multiply, or divide");
    process.exit();
}

console.log("Result:", result);