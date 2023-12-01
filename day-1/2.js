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

        while(true){
            let i = false;
            if(Number(line[start])+1){
                start = Number(line[start]);
                break;
            } else if(["o", "t", "f", "s", "e", "n"].includes(line[start])){
                switch(line[start]){
                    case "o":
                        if(line.slice(start, start+3) === "one"){
                            start = 1;
                            i = true;
                        }
                        break;
                    case "t":
                        if(line.slice(start, start+3) === "two"){
                            start = 2;
                            i = true;
                        } else if(line.slice(start, start+5) === "three"){
                            start = 3;
                            i = true;
                        }
                        break;
                    case "f":
                        if(line.slice(start, start+4) === "four"){
                            start = 4;
                            i = true;
                        } else if(line.slice(start, start+4) === "five"){
                            start = 5;
                            i = true;
                        }
                        break;
                    case "s":
                        if(line.slice(start, start+3) === "six"){
                            start = 6;
                            i = true;
                        } else if(line.slice(start, start+5) === "seven"){
                            start = 7;
                            i = true;
                        }
                        break;
                    case "e":
                        if(line.slice(start, start+5) === "eight"){
                            start = 8;
                            i = true;
                        }
                        break;
                    case "n":
                        if(line.slice(start, start+4) === "nine"){
                            start = 9;
                            i = true;
                        }
                        break;
                }
            }
            if(i){
                break;
            } else {
                start++;
            }
        }

        while(true){
            let i = false;
            if(Number(line[end])+1){
                end = Number(line[end]);
                break;
            } else if(["o", "t", "f", "s", "e", "n"].includes(line[end])){
                switch(line[end]){
                    case "o":
                        if(line.slice(end, end+3) === "one"){
                            end = 1;
                            i = true;
                        }
                        break;
                    case "t":
                        if(line.slice(end, end+3) === "two"){
                            end = 2;
                            i = true;
                        } else if(line.slice(end, end+5) === "three"){
                            end = 3;
                            i = true;
                        }
                        break;
                    case "f":
                        if(line.slice(end, end+4) === "four"){
                            end = 4;
                            i = true;
                        } else if(line.slice(end, end+4) === "five"){
                            end = 5;
                            i = true;
                        }
                        break;
                    case "s":
                        if(line.slice(end, end+3) === "six"){
                            end = 6;
                            i = true;
                        } else if(line.slice(end, end+5) === "seven"){
                            end = 7;
                            i = true;
                        }
                        break;
                    case "e":
                        if(line.slice(end, end+5) === "eight"){
                            end = 8;
                            i = true;
                        }
                        break;
                    case "n":
                        if(line.slice(end, end+4) === "nine"){
                            end = 9;
                            i = true;
                        }
                        break;
                }
            }
            if(i){
                break;
            } else {
                end--;
            }
        }
        nums.push( start*10 + end)
    }

    console.log(nums.reduce((a,b) => a+b));
});



