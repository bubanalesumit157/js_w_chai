const user = new Object();  // this is singleton obj
const non_sigleton_user ={}
console.log(non_sigleton_user) 

user.id="313";
user.name="sumit";

const regular_user= {
    email:"s@gmail.com",
    fullName:{
        name:"s",
        username:{
            fname:"ds",
            lName:"ds"
        }
    }
}
console.log(regular_user.fullName.username)


const obj1={1:"a",2:"dd" };
const obj2={1:"a",2:"dd" };

// const obj3 = {obj1,obj2};
// const obj=Object.assign({},obj1,obj2);  // {}here optional
const obj = {... obj1,...obj2}
console.log(obj);

