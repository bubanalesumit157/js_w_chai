// primitives 
// they are 7: string number bool null undefined symbol bigint

const bignumber=62347326472364724234n;
let n=null;
let sym = Symbol('11');
let sym1 = Symbol('11');
console.log(typeof n);  // this print object
console.log(sym);  // this print object
console.log(sym1==sym);  // this print object

// Reference (non primitive)
//  array ,object, functions
let arr = ["s","e"];

let f= function(){
    console.log("f")
}
console.log(typeof f);

let myobj = {
    name:"sumit",
    age: 22
}
let myobj2=myobj;
myobj2.age=3
console.log(myobj.age);

// primitive use stack and non primitive use heap
// heap give referenece not create copy like stack 