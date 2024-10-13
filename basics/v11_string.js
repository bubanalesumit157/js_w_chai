let str = new String('  ff55f55');
let str1 = 'ff';
console.log(str);
console.log(typeof str1);
console.log(str.__proto__);
console.log(str.length);
console.log(str.charAt(3));
console.log(str.indexOf('f'));
console.log(str.length);
console.log(str.toLocaleUpperCase());

// const newstr =  str.substring(0,2);
// console.log(newstr);
const newstr1 =  str.slice(1,4);
console.log(newstr1);
const newstr2 =  str.trim();
console.log(newstr2);
const newstr3 =  str.substring(1,4);
console.log(newstr3);
const newstr4 = str.replace('ff','r')
console.log(newstr4);
console.log(str.includes('f'))

let url = "fs=fds-f-ffs-f";
console.log(url.split('-'))
