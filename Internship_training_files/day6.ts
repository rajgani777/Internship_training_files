type User = {
  id: number;
  name: string;
  email?: string;
  age?: number;
  isActive?: boolean;
  createdAt?: Date;
  address?:{
    street?: {
        number: number;
        name: string;
    };
    city: string;
    state: string;
    zipCode: string;
  },
  hobbies?: string[];
  getName?: () => string;
  getAge?: () => number;
}

let user:User={
    id: 1,
    // age: 30,
    name: "John Doe",
    address: {
        street: {
            number: 123,
            name: "Main St"
        },
        city: "New York",
        state: "NY",
        zipCode: "10001"
    }
}
user.getName = function() {
    return this.name;
}

function getUserName(user: User): string {
    return user.getName ? user.getName() : "No name available";
}
console.log(getUserName(user));

function getUserHobbiesLength(user:User): Promise<number | string | boolean> {
    // return Promise.resolve(user.name);
    // if(user.age) {
    //     return Promise.resolve(user.age);
    // }
    if(user.hobbies && user.hobbies.length > 0) {
        return Promise.resolve(user.hobbies.length);
    }else if(!user.hobbies || user.hobbies.length === 0) {
        return Promise.resolve("No hobbies available");
    }
    return Promise.resolve(true);;

    // if(user.email){
    //     return Promise.resolve(user.email);
    // }
}

console.log(`Hobbies Count is:${getUserHobbiesLength(user)} `);
console.log(user);

function getUserObj():Promise<User> {
    let firstUser={
        id: 2,
        name: "Jane Smith",
        // address: {
        //     street: {
        //         number: 456,
        //         name: "Second St"
        //     },
        //     city: "Los Angeles",
        //     state: "CA",
        //     zipCode: "90001"
        // }
    }
    if(user.address) {
        return Promise.resolve(firstUser);
    }else if(!user.address) {
        return Promise.reject("Address is not available");
    }
    return Promise.resolve(firstUser);
}

getUserObj()
.then((userObj) => {
    console.log(`User Object is: ${userObj.name}`);
})
.catch((error) => {
    console.error("Error fetching user object:", error);
});

// console.log(`User Object is: ${getUserObj().address?.street?.name}`);
// interface Car {
//     make: string;
//     model: string;
//     year: number;
//     isElectric: boolean;
//     start(): void;
//     stop(): void;
// }