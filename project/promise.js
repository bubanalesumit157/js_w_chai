const promiseOne = new Promise(function(resolve,reject){
    //do any async task like DB calls,cryptography
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000);
})
promiseOne.then(function(){
    console.log("promise consumed");
     
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task2 complete');
        resolve();
    },1000)}).then(function(){
        console.log('promise2 consumed')
    })


const promise2 = new  Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task3 is complete');
        resolve({username:"chai",email:"s@email.com"});
    },1000);
})

promise2.then(function(user){
    console.log(user);
})


const promise3 = new  Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"sumit",email:"@"})
        }
        else{
            reject('something went wrong');
        }
        //console.log('async task4 is complete');
        //resolve({username:"chai",email:"s@email.com"});
    },1000); 

})
promise3.then((user)=>{
    console.log(user);
    return user.username;
 }).then((username)=>{
    console.log(username);
 }).catch(function(err){
    console.log(err)
 }).finally(()=>{
    console.log('promise either resolved or rejected')
 })



const p5 = new Promise((reject,resolve)=>{
    setTimeout(function(){
        let err= true;
        if(!err){
            resolve({username:"js",psd:"123"});
        }
        else{
            reject('error');
        }

    },1000);

});
async function consumePromiseFive() {
    try{
        const response = await p5;
        console.log(response);
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()
async function getAllUsers() {
try{
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
console.log('hey',data);

}
catch(err){
console.log(err)

}
}
getAllUsers()



fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
    return response.json();
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error));


