// const tasks = [
//     { id: 1, title: "JS Practice", done: false },
//     { id: 2, title: "Code Review", done: true }
//   ];
// const [task1,task2] = tasks;
// console.log("Task 1:", task1); // Output: Task 1: { id: 1, title: "JS Practice", done: false }
// console.log("Task 2:", task2); // Output: Task 2: { id: 2, title: "Code Review", done: true }
// const { id: task1Id, title: task1Title } = task1;
// console.log("Task 1 ID:", task1Id); // Output: Task 1 ID: 1
// console.log("Task 1 Title:", task1Title); // Output: Task 1 Title: JS Practice




// Arrays, Object and related functions

// function calSum(...values){
//     let res=values.reduce((prev,cur)=>

//             prev+cur
        
//         ,0);
//     return res;
// }
// console.log("sum1 is:", calSum(1,2,3,4,5));
// console.log("sum2 is:", calSum(10,20,30)); 

// let array1 = [1,2,3,4,5];
// // Stack
// // Heap
// let array2 = [...array1]; // Shallow copy of array1
// let array3 = [10,11,12,13,14];
// let array5 = array1;
// let mergedArray = [...array1, ...array3]; // Merging arrays

// array1.push(6); // Modifying array1
// array1.push(7); // Modifying array2
// console.log("Array 1:", array1); // Output: Array 1: [1, 2, 3, 4, 5]
// console.log("Array 2:", array2); // Output: Array 2: [1, 2, 3, 4, 5]
// console.log("Array 5:", array5); // Output: Array 2: [1, 2, 3, 4, 5]
// console.log("Merged Array:", mergedArray); // Output: Merged Array: [1, 2, 3, 4, 5, 10, 11, 12, 13, 14]
// let sum=array1.reduce((prev,cur)=>{

//     prev*cur

// },0);


// console.log("Sum is:", sum); // Output: Sum is: 28
// let objArray=[
//     {
//         name: "Aditya",
//         age: 21
//     },
//     {
//         name: "Hitesh",
//         age:21
//     },
//     {
//         name: "Yogitha",
//         age: 25
//     },
//     {
//         name: "Sahithi",
//         age: 20
//     }
// ]

// let filteredArray= objArray.filter((item) => item.age > 21); // Filtering objects with age > 21
// let findName= objArray.find((item) => item.age === 21); // Filtering objects with age > 21
// let getNames= objArray.map((item) => item.name); // Filtering objects with age > 21
// console.log("Filtered Array:", filteredArray); // Output: Filtered Array: [ { name: 'Yogitha', age: 25 } ]
// console.log("Find Name:", findName); // Output: Find Name: { name: 'Aditya', age: 21 }
// console.log("Get Names:", getNames); // Output: Get Names: [ 'Aditya', 'Hitesh', 'Yogitha', 'Sahithi' ]
// let updatedArray= objArray.map((item) => item.age = item.age-5); // Filtering objects with age > 21
// console.log("Get objArray:", objArray); // Output: Get Names: [ 'Aditya', 'Hitesh', 'Yogitha', 'Sahithi' ]
// console.log("Get updatedArray:", updatedArray); // Output: Get Names: [ 'Aditya', 'Hitesh', 'Yogitha', 'Sahithi' ]

// let updatedAgesArray=objArray.map((item) => {
//     if(item.age < 21) {
//         item.age = item.age + 5; // Incrementing age by 5 if less than 21
//         return item;
//     }
//     return null;
// }).filter(item => item); // Filtering out null values
// console.log("Updated Ages Array:", updatedAgesArray); // Output: Updated Ages Array: [ { name: 'Aditya', age: 21 }, { name: 'Hitesh', age: 21 }, { name: 'Yogitha', age: 25 }, { name: 'Sahithi', age: 20 } ]

// updatedAgesArray.forEach((item) => {
//     console.log(`Name: ${item.name}, Age: ${item.age}`); // Output: Name: Aditya, Age: 21
// }); // Output: Name: Hitesh, Age: 21

let obj1 = {
    name: "John",
    age: 30,
    city: "New York",
    mobNumbers:[1234567890, 9876543210],
    address: {
        street: "123 Main St",
        zip: "10001"
    },
    getDetails: function() {
        return `${this.name}, ${this.age}, ${this.city}`;
    }
};
// let age=obj1.age; // Accessing property
// let city=obj1.city; // Accessing property

let { name,age,city, mobNumbers:phone, address: { street, zip } } = obj1; // Destructuring object
let newObj= { ...obj1}; // Shallow copy with new property
delete newObj.city; // Deleting property
console.log("phone:", phone); 
function displayDetails({ name, age, city="Delhi" }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`); // Output: Name: John, Age: 30, City: New York
}
displayDetails(obj1); // Calling function with object as argument
displayDetails(newObj); // Calling function with object as argument


// let obj2 = { ...obj1 }; // Shallow copy of obj1
// let obj3 = obj1; // Reference to obj1
// let obj4=Object.assign({}, obj1); // Another way to create a shallow copy
// obj1 = {
//     ...obj1,
//     country: "USA" // Adding a new property
// };
// console.log("Object 1:", obj1); // Output: Object 1: { name: 'John', age: 30, city: 'New York', mobNumbers: [ 1234567890, 9876543210 ], address: { street: '123 Main St', zip: '10001' }, getDetails: [Function: getDetails], country: 'USA' }
// console.log("Object 2:", obj2); // Output: Object 2: { name: 'John', age: 30, city: 'New York', mobNumbers: [ 1234567890, 9876543210 ], address: { street: '123 Main St', zip: '10001' }, getDetails: [Function: getDetails] }
// console.log("Object 3:", obj3); // Output: Object 3: { name: 'John', age: 30, city: 'New York', mobNumbers: [ 1234567890, 9876543210 ], address: { street: '123 Main St', zip: '10001' }, getDetails: [Function: getDetails], country: 'USA' }
// console.log("Object 4:", obj4); // Output: Object 4: { name: 'John', age: 30, city: 'New York', mobNumbers: [ 1234567890, 9876543210 ], address: { street: '123 Main St', zip: '10001' }, getDetails: [Function: getDetails] }


// let deepCopy=JSON.parse(JSON.stringify(obj1)); // Deep copy of obj1


// Object.keys(obj1);
// Object.freeze(obj1); // Freezes the object, preventing any modifications
// Object.seal(obj1); // Seals the object, preventing new properties from being added