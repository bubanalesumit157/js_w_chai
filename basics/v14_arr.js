// const myarr  = [1,2,3,4,5,6,7,"d"]
// console.log(myarr[0])

// const arr = new Array(1,2,3,3)

// myarr.push(6) 
// console.log(myarr)
// myarr.pop()
// myarr.unshift(9)
// myarr.shift()
// console.log(myarr)
// console.log(myarr.includes(2))
// console.log(myarr.indexOf(2))

// const newarr = myarr.join();
// console.log(newarr)
// console.log(typeof newarr)

// console.log("A",myarr)
// const myn1=myarr.slice(1,3)
// console.log(myn1)
// console.log(myarr)
// const myn2=myarr.splice(1,3)
// console.log(myn2)
// console.log(myarr)

const a1=[1,2,3];
const a2=[4,5,6]; 
// a1.push(a2);

const  a = a1.concat(a2);  // combines two arrays
console.log(a);
console.log(a[5]);

const a3 = [...a2,...a1];
const a4 = {...a2,...a1};
console.log(a3);
console.log(a4);


const newarr = [  1,[4,5,5],6,7,[7,[7,77,]]];
console.log(newarr.flat(Infinity));

console.log(Array.isArray([2,3]));
console.log(Array.from("dada"));
console.log(Array.from({name:"sssf"}));


let s1=22;
let s2=212;
let s3=223;

console.log(Array.of(s1,s2,s3));