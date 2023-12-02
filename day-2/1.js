"use strict"

const fs = require('fs');

let file_data;
const given = { red: 12, green: 13, blue: 14 }

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) throw err;
    file_data = data.split("\n");

    let id = 1;
    let invalids = new Set();

    for(const line of file_data){ 
        const hands = line.split(": ")[1];

        const counts = hands.split(";").join(",").split(", ");
        
        for(const count of counts){
            if(Number(count.slice(0,2)) > given[count.slice(3)]){
                invalids.add(id);
            }
        }

        id++;
    }
    console.log(5050 - Array.from(invalids).reduce((a,b) => a+b));
});



