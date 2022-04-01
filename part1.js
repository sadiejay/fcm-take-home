// part 1


// testing values
// let rawInputs = "^>v<";
// let rawInputs = "^v^v^v^v^v";
// let rawInputs = ">";

// get Data
export const getData = async (inputFile) => {
    let rawInputs = await fetch(inputFile)
        .then(response => response.text());
    return rawInputs;
}

export const processData = (rawInputs) => {
    let array = ['xCoord = 0 yCoord = 0'];
    let xCoord = 0;
    let yCoord = 0;


    // takes raw input and splits 
    let inputs = rawInputs.split('');


    // loop for evaluating inputs
    inputs.forEach((input) => {

        switch (input) {
            case '^':
                yCoord += 1;
                break;
            case '>':
                xCoord += 1;
                break;
            case 'v':
                yCoord -= 1;
                break;
            case '<':
                xCoord -= 1;
                break;
        }
        let coordDetails = `xCoord = ${xCoord} yCoord = ${yCoord}`;
        array.push(coordDetails);
    });

    // remove duplicates
    let uniqueCoords = [...new Set(array)];
    console.log({ array });
    console.log({ uniqueCoords });
    return uniqueCoords.length;

}

getData('input.txt').then(data => processData(data))
    .then(uniqueCoordsLength => console.log(`🍕 Maria delivers at least one pizza to ${uniqueCoordsLength} houses 🍕`))

