// part 2

export const getDuoData = async (inputfile) => {
    let rawDuoInputs = await fetch(inputfile)
        .then(response => response.text());
    return rawDuoInputs;
}

export const processDuoData = (rawDuoInputs) => {
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

    evenInputs(rawDuoInputs);
    oddInputs(rawDuoInputs);


    let duoarray = ['xCoord = 0 yCoord = 0'];
    let mariaXCoord = 0;
    let mariaYCoord = 0;
    let clovisXCoord = 0;
    let clovisYCoord = 0;
    mariaArray.forEach((input) => {


        switch (input) {
            case '^':
                mariaYCoord += 1;
                break;
            case '>':
                mariaXCoord += 1;
                break;
            case 'v':
                mariaYCoord -= 1;
                break;
            case '<':
                mariaXCoord -= 1;
                
                break;
        }
        let mariaCoordDetail = `xCoord = ${mariaXCoord} yCoord = ${mariaYCoord}`;
        duoarray.push(mariaCoordDetail);
    });


    clovisArray.forEach((input) => {


        switch (input) {
            case '^':
                clovisYCoord += 1;
                break;
            case '>':
                clovisXCoord += 1;
                break;
            case 'v':
                clovisYCoord -= 1;
                break;
            case '<':
                clovisXCoord -= 1;
                break;
        }
        let clovisCoordDetail = `xCoord = ${clovisXCoord} yCoord = ${clovisYCoord}`;
        duoarray.push(clovisCoordDetail);
    });

    // remove duplicates
    let uniqueduoCoords = [...new Set(duoarray)];
    console.log({ uniqueduoCoords });
    return uniqueduoCoords.length;
}

getDuoData('input.txt').then(data => processDuoData(data))
    .then(uniqueduoCoordsLength => console.log(`🍕 Clovis and Maria deliver at least one pizza to ${uniqueduoCoordsLength} houses 🍕`));