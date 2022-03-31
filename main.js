// part 1
    let array = ['xCoord = 0 yCoord = 0'];
    let xCoord = 0;
    let yCoord = 0;

// testing values
    // let rawInputs = "^>v<"
    let rawInputs = "^v^v^v^v^v"
    // let rawInputs = ">"

// takes raw input and splits 
    let inputs = rawInputs.split('');


// loop for evaluating inputs
inputs.forEach((input) => {
        switch (input) {
            case '^':
                yCoord += 1;
                var yVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
                array.push(yVal);
                console.log({array});
            break;
            case  '>':
                 xCoord += 1;
                var xVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
                array.push(xVal);
                console.log({array});
            break;
            case 'v':
                yCoord -= 1;
                var yVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
                array.push(yVal);
                console.log({array});
            break;
            case '<':
                xCoord -= 1;
                var xVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
                array.push(xVal);
                console.log({array});
            break;
        }
    });

// remove duplicates
 let uniqueCoords = [...new Set(array)];
 console.log({uniqueCoords});

// number of houses with at least 1 pizza
console.log(`${uniqueCoords.length} houses receive at least one pizza`);


// part 2 
            let mariaArray = [];
            function evenInputs(input){
                for (var i = 0; i < input.length; i += 2){
                    mariaArray.push(input[i]);
                }
                console.log({mariaArray});
            }

            var clovisArray = [];
            function oddInputs(input){
                for (var i = 1; i < input.length; i += 2){
                    clovisArray.push(input[i]);
                }
                return console.log({clovisArray});
            }

            evenInputs(inputs);
            oddInputs(inputs);


            let duoarray = ['xCoord = 0 yCoord = 0'];
            let mariaXCoord = 0;
            let mariaYCoord = 0;
            let clovisXCoord = 0;
            let clovisYCoord = 0;
            mariaArray.forEach((input) => {
                switch (input) {
                    case '^':
                        mariaYCoord += 1;
                        var mariaYVal = `xCoord = ${mariaXCoord} yCoord = ${mariaYCoord}`;
                        duoarray.push(mariaYVal);
                        console.log({duoarray});
                    break;
                    case  '>':
                         mariaXCoord += 1;
                        var mariaXVal = `xCoord = ${mariaXCoord} yCoord = ${mariaYCoord}`;
                        duoarray.push(mariaXVal);
                        console.log({duoarray});
                    break;
                    case 'v':
                        mariaYCoord -= 1;
                        var mariaYVal = `xCoord = ${mariaXCoord} yCoord = ${mariaYCoord}`;
                        duoarray.push(mariaYVal);
                        console.log({duoarray});
                    break;
                    case '<':
                        mariaXCoord -= 1;
                        var mariaXVal = `xCoord = ${mariaXCoord} yCoord = ${mariaYCoord}`;
                        duoarray.push(mariaXVal);
                        console.log({duoarray});
                    break;
                }
            });


            clovisArray.forEach((input) => {
                switch (input) {
                    case '^':
                        clovisYCoord += 1;
                        var clovisYVal = `xCoord = ${clovisXCoord} yCoord = ${clovisYCoord}`;
                        duoarray.push(clovisYVal);
                        console.log({duoarray});
                    break;
                    case  '>':
                         clovisXCoord += 1;
                        var clovisXVal = `xCoord = ${clovisXCoord} yCoord = ${clovisYCoord}`;
                        duoarray.push(clovisXVal);
                        console.log({duoarray});
                    break;
                    case 'v':
                        clovisYCoord -= 1;
                        var clovisYVal = `xCoord = ${clovisXCoord} yCoord = ${clovisYCoord}`;
                        duoarray.push(clovisYVal);
                        console.log({duoarray});
                    break;
                    case '<':
                        clovisXCoord -= 1;
                        var clovisXVal = `xCoord = ${clovisXCoord} yCoord = ${clovisYCoord}`;
                        duoarray.push(clovisXVal);
                        console.log({duoarray});
                    break;
                }
            });


// remove duplicates
let uniqueduoCoords = [...new Set(duoarray)];
console.log({uniqueduoCoords});

// number of houses with at least 1 pizza
console.log(`${uniqueduoCoords.length} houses receive at least one pizza`);