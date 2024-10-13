
// object literals 
const mysym=Symbol("k")
const user = {
    name: "sumit",
    [mysym]:"mykey1",
    "full name":"sumit B",
    age : 20,
    days : ["mon","tue"]
};

console.log(user.name)
// console.log(sy)
console.log(user[mysym])
console.log(user["full name"])
console.log(user["name"])
console.log(user["age"])

user.name="ss";
Object.freeze(user)
user.name="ds"
console.log(user.name);
console.log(user);
user.greet=function(){
    console.log("hello");
}
user.greet1=function(){
    console.log(`hello, ${this.name}`);
}
console.log(user.greet);
console.log(user.greet1);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('p'));

const {name:n}=user;  //destructing
console.log(n)