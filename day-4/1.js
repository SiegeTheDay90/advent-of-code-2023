"use strict"

const fs = require('fs');

let file_data;


fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) throw err;
    file_data = data.split("\n");
    let sum = 0;

    file_data.forEach((line, lineNum) => {
        const [card, nums ] = line.split(": ");

        const [winning, has ] = nums.split(" | ");
        let matchNums = [];

        
        const winningNums = winning.replaceAll("  ", " ").trim().split(" ").map(Number);
        const hasNums = has.replaceAll("  ", " ").trim().split(" ").map(Number);
        console.log(winningNums);

        let matches = 0;

        for(const num of hasNums){
            if(winningNums.includes(num)){ matches++; matchNums.push(num);}
        }

        if(matches > 0){
            sum += 2**(matches-1);
            // console.log(matches, sum);
        }
    });

    console.log(sum);
    
});
