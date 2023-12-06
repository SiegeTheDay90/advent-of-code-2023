"use strict"

const fs = require('fs');

let file_data;

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) throw err;
    file_data = data.split("\n");

    const symbols = {};
    let sum = 0;

    file_data.forEach((line, lineNum) => {
        for(let i = 0; i < line.length; i++){
            if(line[i] === "."){
                continue;
            } else if(!(Number(line[i])+1)){
                symbols[lineNum] ||= [];
                symbols[lineNum].push(i);
            }
        }
    })


    file_data.forEach((line, lineNum) => {
        for(let i = 0; i < line.length; i++){
            let currentNum = "";
            let isPart = false;

            while((Number(line[i])+1)){
                currentNum += line[i];
                if(
                    symbols[lineNum+1]?.includes(i) ||
                    symbols[lineNum-1]?.includes(i)||
                    symbols[lineNum]?.includes(i+1)||
                    symbols[lineNum]?.includes(i-1)||
                    symbols[lineNum+1]?.includes(i+1)||
                    symbols[lineNum+1]?.includes(i-1)||
                    symbols[lineNum-1]?.includes(i+1)||
                    symbols[lineNum-1]?.includes(i-1)
                    ){
                        isPart = true;
                }
                i++;
            }
            if(isPart){
                sum += Number(currentNum);
            }
        }
    })
    console.log(sum);
});