const user = {
    name:"sumit",
    price:999, 

    welcome_msg: function(){
        console.log(`${this.name},welcome to page`) ;
        console.log(this)
    }
}

user.welcome_msg()
user.name="sam"
user.welcome_msg()

console.log(this)  // empty obj {}
function chai(){
    console.log(this)
}
chai()

const chai1 = () => {
    console.log(this)
}
chai1()


const add1 = (n1,n2) => {
    return n1+n2;
}
const add2 = (n1,n2) => n1+n2;  // no nedd to write return ,if we use this {} parentesis we need to write return 
const obj_ret = (n1) =>({user:"sumit"});    // to return object wrap in ()
console.log(obj_ret())
console.log(add1(22,3))
console.log(add2(2,3))


( (name) => {
    console.log("db connnected${name}");
})('hit');

// ( (name) => {
//     console.log(`db connnected${name}`);
// })('hit');


