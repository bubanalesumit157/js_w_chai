
greet = "hello"
for(g in greet){
    console.log(g);
}

const map = new Map();
map.set('IN',"india")
map.set('IN',"india")
map.set('us',"uss")

for(const [key,val] of map){
    console.log(key,"->",val);
}
for(const key of map){
    console.log(key);
}

const myobj = {
    'g1':'nfs',
    'd2':'nffss'
}

for(o in myobj){
    console.log(myobj[o]);
}

const vals=[2,3,4,5,5];

vals.forEach(function (val){
    console.log(val)
})
vals.forEach( (val) =>{
    console.log(val)
})

function print(val){
    console.log(val)
}

vals.forEach(print)
vals.forEach( (val,index,arr)=>{
    console.log(val,index,arr)
})

const object = [
    {
        lang:"js",
        L:"j"
    },
    {
        lang:"c",
        L:"c"
    },
    {
        lang:"cpp",
        L:"cp"
    }
]

object.forEach( (item) =>{
    console.log(item.lang)
})

const r = object.forEach( (item)=>{
    console.log(item)
    return item
    
})
console.log(r)  // foreach does not return anything


const nums = [1,2,3,4,5,5,6,6,7,8]
const newnums2 =[]
nums.forEach( (num)=>{
    if (num>4){
        newnums2.push(num)
    }
})
const newnums = nums.filter( (num)=>num>4)   //this is explicit return
const newnums1 = nums.filter( (num)=>{   // we opened scope{} we have to write return now
        return num>4
    }
)
   // console.log(nu)
console.log(newnums1,newnums2)


//how filter used to retreive data from database ,eg below
const books = [

    {
        title:'b1',genre:'drame',publish:'2003',edition:'2003'
    },
    {
        title:'b2',genre:'life',publish:'2003',edition:'2003'
    },
    {
        title:'b3',genre:'history',publish:'2003',edition:'2003'
    },
    {
        title:'b4',genre:'history',publish:'2003',edition:'2003'
    }
]

const history_books = books.filter( (bk)=> bk.genre ==='history')

console.log(history_books)  // filter checks condition and if true returns those vales only


const numbers10 = nums.map( (num) => num+10)  // map return all elements with some modification specified

console.log(numbers10)

const numbers20 = nums.map((num)=>num+10).map((num=>num*10)).filter((num)=>num<140)
console.log(numbers20)

const initial_val =0;
const numbers_sum = nums.reduce( (accum,cur_val)=>accum+cur_val,initial_val)
console.log(numbers_sum)
