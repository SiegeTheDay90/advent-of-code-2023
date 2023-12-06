"use strict"

const fs = require('fs');

let file_data;


fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) throw err;
    file_data = data.split("\n\n");

    const [
        seedsStr,
        seedToSoilStr,
        soilToFertilizerStr,
        fertilizerToWaterStr,
        waterToLightStr,
        lightToTempStr,
        tempToHumidityStr,
        humidityToLocationStr
    ] = file_data;

    const seedNums = seedsStr.split(" ").slice(1);

    const seedToSoil = new rangeMap(seedToSoilStr);
    const soilToFertilizer = new rangeMap(soilToFertilizerStr);
    const fertilizerToWater = new rangeMap(fertilizerToWaterStr);
    const waterToLight = new rangeMap(waterToLightStr);
    const lightToTemp = new rangeMap(lightToTempStr);
    const tempToHumidity = new rangeMap(tempToHumidityStr);
    const humidityToLocation = new rangeMap(humidityToLocationStr);


    const locations = seedNums.map((seed) => {
        const soil = seedToSoil.check(seed);
        const fertilizer = soilToFertilizer.check(soil);
        const water = fertilizerToWater.check(fertilizer);
        const light = waterToLight.check(water);
        const temp = lightToTemp.check(light);
        const humidity = tempToHumidity.check(temp);
        const location = humidityToLocation.check(humidity);
        return(
            location
        )
    })

    console.log(Math.min(...locations));


    
});

class rangeMap{

    constructor(mapStr){
        this.ranges = [];
        this.map = {};
        const arr = mapStr.split("\n").slice(1);
        arr.forEach((line) => {
            const [to, from, length] = line.split(" ").map(Number);
            this.ranges.push([from, from+length-1]);
            this.map[from] = to;
        })
    }

    check(num){
        num = Number(num);
        let holder;
        let target = num;
        if(holder = this.ranges.find(range => range[0] <= num && num <= range[1])){
            target = this.map[holder[0]] + (num - holder[0])
        }

        return target;
    }
}
