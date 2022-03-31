// part 2 
let mariaArray = [];
function evenInputs(input) {
    for (let i = 0; i < input.length; i += 2) {
        mariaArray.push(input[i]);
    }
    console.log({ mariaArray });
};

let clovisArray = [];
function oddInputs(input) {
    for (let i = 1; i < input.length; i += 2) {
        clovisArray.push(input[i]);
    }
    return console.log({ clovisArray });
};

evenInputs(inputs);
oddInputs(inputs);


let duoarray = ['xCoord = 0 yCoord = 0'];
let mariaXCoord = 0;
let mariaYCoord = 0;
let clovisXCoord = 0;
let clovisYCoord = 0;
mariaArray.forEach((input) => {
    let mariaXVal = `xCoord = ${mariaXCoord} yCoord = ${mariaYCoord}`;
    let mariaYVal = `xCoord = ${mariaXCoord} yCoord = ${mariaYCoord}`;

    switch (input) {
        case '^':
            mariaYCoord += 1;
            duoarray.push(mariaYVal);
            break;
        case '>':
            mariaXCoord += 1;
            duoarray.push(mariaXVal);
            break;
        case 'v':
            mariaYCoord -= 1;
            duoarray.push(mariaYVal);
            break;
        case '<':
            mariaXCoord -= 1;
            duoarray.push(mariaXVal);
            break;
    }
});


clovisArray.forEach((input) => {
    let clovisXVal = `xCoord = ${clovisXCoord} yCoord = ${clovisYCoord}`;
    let clovisYVal = `xCoord = ${clovisXCoord} yCoord = ${clovisYCoord}`;

    switch (input) {
        case '^':
            clovisYCoord += 1;
            duoarray.push(clovisYVal);
            break;
        case '>':
            clovisXCoord += 1;
            duoarray.push(clovisXVal);
            break;
        case 'v':
            clovisYCoord -= 1;
            duoarray.push(clovisYVal);
            break;
        case '<':
            clovisXCoord -= 1;
            duoarray.push(clovisXVal);
            break;
    }
});

// remove duplicates
let uniqueduoCoords = [...new Set(duoarray)];
console.log({ uniqueduoCoords });
console.log(`🍕 Clovis and Maria deliver at least one pizza to ${uniqueduoCoords.length} houses 🍕`);