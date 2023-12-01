"use strict"

const fs = require('fs');

let file_data;
const nums = [];

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) throw err;
    file_data = data.split("\n");
    console.log(file_data.length);

    for(const line of file_data){

        let start = 0;
        let end = line.length-1;

        while(!(Number(line[start])+1)){
            start++;
        }

        while(!(Number(line[end])+1)){
            end--;
        }

        nums.push( line[start]*10 + line[end]*1)
    }

    console.log(nums.reduce((a,b) => a+b));
});



