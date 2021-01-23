const lyricsGenerator = (beats) => {
    let counter = 0;
    let output = "";

    for (let beat of beats)
        if (beat == 0){
            counter = 0;
            output += "Boom ";
        } else if (beat == 1) {
            counter += 1
            if (counter == 3){
                output += "Drop the base !!!Break the base!!! ";
                counter = 0;
            } else {
                output += "Drop the base ";
            }
        }
    return output;
}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))