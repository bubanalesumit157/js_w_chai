
// ( (name) => {
//     console.log(`db connnected${name}`);
// })('hit');

// inmmediately invoked funvction wxpreseeion
const c=3
switch(c){
    case 3:
        console.log(c);
        break;  
    default:
        console.log("d");

}
;
const email = ""
if(email){
    console.log("email present");
}
else{
    console.log("no email");
}
const email1 = []
if(email1){
    console.log("email present");
}
else{
    console.log("no email");
}
if(email1.length === 0){
    console.log("no elmail present");
}

const empty_obj = {};
if(Object.keys(empty_obj).length === 0 ){
    console.log("object empty");
}

let val= 5??6;
console.log(val)
val = null ?? 8;  // ?? null coalescing operator
console.log(val) 
// falsy values  : false , 0,-0, BigInt 0n, ""  , null ,undefined , NaN
    // true val:  "0", 'false' , " " , [], {}, function(){}
