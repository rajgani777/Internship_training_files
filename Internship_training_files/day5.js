
let first=1;
if(first == 1){
    console.log("First is 1");
}else if(first == 2){
    console.log("First is 2");
}else{
    console.log("First is neither 1 nor 2");
}

switch(first){
    case 1:
        console.log("First is 1");
        break;
    case 2:
        console.log("First is 2");
        break;
    default:
        console.log("First is neither 1 nor 2");
        break;
}
while(first < 5){
    console.log("First is less than 5 :", first);
    first++;
}
first = 1; // Resetting first to 1 for the do-while loop
do{
    console.log("First is less than 5 :", first);
    first++;
}while(first < 5)

 const str= `
    This is the multi line text\n
    First value is ${first} 
    `;
console.log(str)


const element1= document.querySelectorAll("li"); // Assuming the first <ul> has at least one <li>
console.log(element1); // Output: <li>...</li>
// jQUery
// $("li.secondElement")

function accessHtml(e){

    console.log('li clicked!',e.target.tagName);
    
}


export async function retrieveData(){
   try{ // Promise.all([
    //     fetch("https://jsonplaceholder.typicode.com/posts"),
    //     fetch("https://jsonplaceholder.typicode.com/todos"),
    //     fetch("https://jsonplaceholder.typicode.com/todos"),
    //     fetch("https://jsonplaceholder.typicode.com/todos"),
    //     fetch("https://jsonplaceholder.typicode.com/todos"),
    //     fetch("https://jsonplaceholder.typicode.com/todos"),
    //     fetch("https://jsonplaceholder.typicode.com/todos"),
    //     fetch("https://jsonplaceholder.typicode.com/todos"),
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    // ])  
    // .then(responses => Promise.all(responses.map(response => response.json())))
    // .then(data => {
    //     const posts = data[0];
    //     const todoData = data[1];
    //     console.log("Data retrieved posts:", posts);
    //     console.log("Data retrieved todoData:", todoData);
    // }
    // )
  const posts= await fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(response => response.json())
        // .then(data => {
        //     console.log("Data retrieved:", data);
        //     // Process the data as needed
        // })
        // .catch(error => {
        //     console.error("Error fetching data:", error);
        // }); 
//    const todoData= await fetch("https://jsonplaceholder.typicode.com/todsdfsdfos")
// //    const todoData1= await fetch("https://jsonplaceholder.typicode.com/todos")
// //    const todoData2= await fetch("https://jsonplaceholder.typicode.com/todos")
// //    const todoData3= await fetch("https://jsonplaceholder.typicode.com/todos")
// //    const todoData4= await fetch("https://jsonplaceholder.typicode.com/todos")
    await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response =>{
            
            try{
                response;
            }
            catch(error){
                console.error("Error accessing property:", error);
            }
            return response.json();
        
        })
        .then(data => {
            console.log("Data rerieved:", data);
            // Process the data as needed
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    console.log("Data retrieval initiated");
    console.log("Data retrieved posts:", posts);
    // console.log("Data retrieved todoData:", todoData);
}catch(error) {
    console.error("Error fetching data:", error);
}
}
// retrieveData();