
let abc=20; // Variable used for assigning first value
let def=30;
let sum = abc + def;
let jsonVariable={
    sum:(a,b)=>{
        return a+b;
    }
}


/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const addition =(a,b)=>{
    return a+b;
}


console.log("Sum result:",addition(abc,def));
let str1= 'Hi';
let str2= "Team";

let str3 = `${str1} ${str2} the result is ${addition(abc,def)}`;
let str4 = str1+str2;
console.log("String result:",str3);