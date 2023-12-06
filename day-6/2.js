"use strict"

const time = 59707878;
const distance = 430121812131276;


let left = Math.floor((-time + Math.sqrt(time**2 - 4*distance))/-2+1);
let right = Math.ceil((-time - Math.sqrt(time**2 - 4*distance))/-2-1);

console.log(left, right);

let diff = right - left +1;

    
console.log(diff);