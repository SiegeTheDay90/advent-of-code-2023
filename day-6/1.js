"use strict"

const times = [59, 70, 78, 78];
const distances = [430, 1218, 1213, 1276];

let sum = 0;
let prod = 1;

for(let i = 0; i < times.length; i++){
    let time = times[i];
    let distance = distances[i];

    // distance = (time - held)(held);
    // 0 = -distance + (time*held) - held**2

    let left = Math.floor((-time + Math.sqrt(time**2 - 4*distance))/-2+1);
    let right = Math.ceil((-time - Math.sqrt(time**2 - 4*distance))/-2-1);

    console.log(left, right);

    let diff = right - left +1;

    prod *= diff;
}

console.log(prod);

