// part 1


// testing values
// let rawInputs = "^>v<";
// let rawInputs = "^v^v^v^v^v";
// let rawInputs = ">";

// get Data
let getData = async () => {
    let rawInputs = await fetch('input.txt')
        .then(response => response.text());
    return rawInputs;
}

let processData = (rawInputs) => {
    let array = ['xCoord = 0 yCoord = 0'];
    let xCoord = 0;
    let yCoord = 0;


    // takes raw input and splits 
    let inputs = rawInputs.split('');


    // loop for evaluating inputs
    inputs.forEach((input) => {
        let xVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
        let yVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;

        switch (input) {
            case '^':
                yCoord += 1;
                array.push(yVal);
                break;
            case '>':
                xCoord += 1;
                array.push(xVal);
                break;
            case 'v':
                yCoord -= 1;
                array.push(yVal);
                break;
            case '<':
                xCoord -= 1;
                array.push(xVal);
                break;
        }
    });

    // remove duplicates
    let uniqueCoords = [...new Set(array)];
    console.log({ array });
    console.log({ uniqueCoords });
    return uniqueCoords.length;

}

console.log(processData(">"));
getData().then(data => processData(data))
.then(uniqueCoordsLength => console.log(`🍕 Maria delivers at least one pizza to ${uniqueCoordsLength} houses 🍕`))


