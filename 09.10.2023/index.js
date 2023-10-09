const stream = require('stream');
const fs = require('fs')


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


async function* getAllRandomNumbers(how_many, min, max) {
    const tab = [];
    for(let i=0; i<how_many; i++){
        yield getRandomNumber(min, max).toString() + '\n'
    }
}

const min = -420
const max = 2137

const gen = stream.Readable.from(getAllRandomNumbers(20, min, max))
const write = fs.createWriteStream(`random-${Date.now()}.txt`);

stream.pipeline(
    gen,
    write,

    (err) => {
        if(err){
            console.log("Error: ", err)
        } else{
            console.log("PINEAPPLE")
        }
    }
)
