"use strict"

const fs = require('fs');

let file_data;


fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) throw err;
    file_data = data.split("\n");
    let originalCards = {};

    file_data.forEach((line, lineNum) => {
        const [card, nums ] = line.split(": ");

        const [winning, has ] = nums.split(" | ");
        
        const winningNums = winning.replaceAll("  ", " ").trim().split(" ").map(Number);
        const hasNums = has.replaceAll("  ", " ").trim().split(" ").map(Number);

        let matches = 0;

        for(const num of hasNums){
            if(winningNums.includes(num)){ matches++}
        }

        originalCards[Number(card.split(" ").at(-1))] = {count: 1, matches};
    });

    for(let i = 1; i <= 187; i++){

        const matches = originalCards[i].matches;

        for( let j = 1; j <= matches; j++){
            originalCards[i+j].count += originalCards[i].count;
        }
    }
    // console.log(Object.values(originalCards));
    // console.log(Object.values(originalCards).slice(100));

    let sum = 0;

    Object.values(originalCards).forEach((card) => {
        sum += card.count;
    })

    console.log(sum);

});
