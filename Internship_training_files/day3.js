
// console.log("first:",first);
// var first=20; // Variable used for assigning first value

// var i=10;
// {
//     var i=20;
//     console.log("Block scope check:",i);
// }

// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const numbers = generateNumbers();

// // console.log(numbers.next().value); // Output: 1
// const timer=setInterval(()=>console.log(numbers.next().value),1000); // Output: 2
// // console.log(numbers.next().value); // Output: 3
// setTimeout(() => {
//     clearInterval(timer);
// }, 5000); // Stop after 5 seconds





var firstVarValue=10;
let firstLetValue=20;
const firstConstValue=30;

{
     firstVarValue = 100;
     firstLetValue=200;
    //  firstConstValue=300;
    console.log("First Var Value:", firstVarValue); // Output: 10
    console.log("First Let Value:", firstLetValue); // Output: 20
    console.log("First Const Value:", firstConstValue); // Output: 30
}

async function firstFunction() {
    console.log("First Function:", firstVarValue); // Output: 10
   await new Promise(resolve => setTimeout(resolve, 1000));

}
firstFunction();
const firstFunExpression = async () => {
    console.log("First Let Value:", firstLetValue); // Output: 20
    console.log("First Const Value:", firstConstValue); // Output: 30
    
    await new Promise(resolve => setTimeout(resolve, 1000));
}
firstFunExpression();
(()=>{
console.log("First Function Expression:", firstVarValue); // Output: 10
})()


function* firstGenerator() {
    yield firstVarValue;
    yield firstLetValue;
    yield firstConstValue;
}
const generatorFun= firstGenerator()
// console.log("First Generator:",generatorFun.next().value);
// console.log("Sec Generator:",generatorFun.next().value);
// console.log("Third Generator:",generatorFun.next().value);
setInterval(() => {
    console.log("Generator Interval:", generatorFun.next().value);
}
, 1000); // Output: 10, 20, 30 every second

function firstFunction(user) {
    console.log("Hi ", user); // Output: 10
    return function (greet) {
        console.log(greet); // Output: 20
    }
}
const secondFunction = firstFunction("John");
secondFunction("Good Morning!"); // Output: Good Morning!

function firstCallbackFunction(callback){
    console.log("First Callback Function Executed");
    callback();
}

firstCallbackFunction(() => {
    console.log("Callback Function Executed");
});