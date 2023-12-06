"use strict"

const fs = require('fs');

let file_data;

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) throw err;
    file_data = data.split("\n");

    const gears = {};
    let sum = 0;

    file_data.forEach((line, lineNum) => {
        for(let i = 0; i < line.length; i++){
            if(line[i] === "*"){
                gears[[lineNum, i]] = 0;
            }
        }
    });
    
    const dirs = [
        [ 1, 1],
        [-1,-1],
        [ 1,-1],
        [ -1, 1],
        [ 1, 0],
        [ -1, 0],
        [ 0, 1],
        [ 0, -1]
    ]

    Object.keys(gears).forEach(coord => {
        const [lineNum, col] = coord.split(",").map(Number);
        const adjacentNums = new Set();
        let prod = 0;


        dirs.forEach(dir => {
            const [newLine, newCol] = [lineNum+dir[0], col+dir[1]];

            if(Number(file_data[newLine][newCol])+1){
                adjacentNums.add(locateNumber(newLine, newCol));
            }
        })

        if(adjacentNums.size === 2){
            prod = 1;
            adjacentNums.forEach((coord) => {
                const [x, y] = coord.split(",").map(Number)
                prod *= readNum(x, y);
            })
        }

        sum += prod;
    });

    console.log(sum);


    function locateNumber(lineNum, col){
        while(Number(file_data[lineNum][col-1]) + 1){
            col--;
        }

        return [lineNum, col].toString();
    }

    function readNum(lineNum, col){
        let num = file_data[lineNum][col];

        while(Number(file_data[lineNum][col+1])+1){
            col++;
            num += file_data[lineNum][col];
        }

        return Number(num);
    }
});
