"use strict"

const fs = require('fs');

let file_data;

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) throw err;
    file_data = data.split("\n");

    let sum = 0;

    for(const line of file_data){ 
        const hands = line.split(": ")[1];

        const counts = hands.split(";").join(",").split(", ");
        const maxes = { red: 0, green: 0, blue: 0 };
        
        for(const count of counts){
            const num = Number(count.slice(0, 2)) || Number(count.slice(0, 1));

            const color = num > 9 ? count.slice(3) : count.slice(2);

            maxes[color] = Math.max(num, maxes[color]);
        }

        sum += maxes.red*maxes.green*maxes.blue;
    }
    console.log(sum);
});



