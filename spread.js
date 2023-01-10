let arr = [1,2,3,4,5];
let fun = (a,b,c) => {
    return a+b+c;
}
let add = fun(...arr);  
// adding array as argument 
console.log(add);

let obj1 = {
    first_name:"sanjiv",
    last_name:"gupta"
    
}

console.log(obj1);

// copying the obj1 data to new obj 
let obj2 = {...obj1,last_name:"kumar"};
console.log(obj2);


// destructor

let {first_name , last_name } = obj1;

console.log("sanjiv", "winsmoke");