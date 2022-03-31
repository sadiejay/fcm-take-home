// part 1
let array = ['xCoord = 0 yCoord = 0'];
let xCoord = 0;
let yCoord = 0;

// testing values
let rawInputs = "^>v<"
// let rawInputs = "^v^v^v^v^v"
// let rawInputs = ">"

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
console.log({ uniqueCoords });
console.log(`🍕 Maria delivers at least one pizza to ${uniqueCoords.length} houses 🍕`);
