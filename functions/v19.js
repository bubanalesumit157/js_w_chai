function sayMyName() {
    console.log("sumit");
}

sayMyName  //reference
sayMyName()  //fn call

function add(n1,n2){ 
    console.log(n1+n2)
}
add()  // no arg passed
add(2,3)
add(2,"3")
add(2,null)

function add1(n1,n2){
    return n1+n2;
}

const r=add1(2,3)
console.log("aa",r,"ss")

function login(name = "sam "){
    if(name=== undefined){
        console.log("pls enter a name")
        return
    }
    else{
        return `${name} just logged in`
    }

}
console.log(login("jj"))


function cal(v1,...num){
    return num
}
console.log(cal(2,3,4,4))

const user = {
    name:"dd",
    p:"s"
}

function handleObj(obj){
     console.log(obj.name,obj.p)
}
handleObj(user)


var f=0
let d="ss"
if(true){
    let a=0
    const c =9
    var f =99
}
console.log(f,d)  // var not used coz it doesnot conisder scope

console.log(addone(3))  // here we called the funnction b4 declaring n it works
function addone(n){
    return  n+1
}


const two = function(n){
    return n+2;
}
console.log(two(3))   // if keep fun in variable we cant call it before we define it
