// to-do
// change north (`^`), south (`v`), east (`>`), or west (`<`) into something readable
    // create coordinates from these inputs
        // north / south -->  y coordinates
        // east / west --> x coordinates
    // have coordinates =+ or =-
        // north/east --> =+
        // south / west --> =-
    // push x,y values to an array
        // need to update value and log each time as x,y
        // need to create array from string
    // can create unit test using the examples that they have given.

// part 1
    // array length +1 = number of pizzas delivered
    // number of houses = number of unique coordinates
        // remove duplicates (.reduce?)
        // count array length

    let array = ['xCoord = 0 yCoord = 0'];
    let xCoord = 0;
    let yCoord = 0;
    // let inputs = ["^","v","^","v","^","v","^","v","^","v"];
    // let inputs = ['^','>','v','<'];
    // let rawInputs = "^>v<"
    let rawInputs = "^v^v^v^v^v"
    // let rawInputs = ">"

    let inputs = rawInputs.split('');


inputs.forEach((input) => {
        switch (input) {
            case '^':
                yCoord += 1;
                // console.log(`xCoord = ${xCoord} yCoord = ${yCoord}`);
                var yVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
                array.push(yVal);
                console.log({array});
            break;
            case  '>':
                 xCoord += 1;
                //  console.log(`xCoord = ${xCoord} yCoord = ${yCoord}`);
                var xVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
                array.push(xVal);
                console.log({array});
            break;
            case 'v':
                yCoord -= 1;
                // console.log(`xCoord = ${xCoord} yCoord = ${yCoord}`);
                var yVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
                array.push(yVal);
                console.log({array});
            break;
            case '<':
                xCoord -= 1;
                // console.log(`xCoord = ${xCoord} yCoord = ${yCoord}`);
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
    // let maria = inputs[even]
    // let clovis = inputs[odd]
        // so maybe create two lists
            // keep the same switch statements
            // push the results to the same list
            // also find uniquecoods 

            let mariaArray = [];
            function evenInputs(input){
                for (var i = 0; i < input.length; i += 2){ //Add two to i every iteration
                    mariaArray.push(input[i]); //Add the element at index i to a temporary array
                }
                console.log({mariaArray});
            }

            var clovisArray = [];
            function oddInputs(input){
                for (var i = 1; i < input.length; i += 2){ //Add two to i every iteration
                    clovisArray.push(input[i]); //Add the element at index i to a temporary array
                }
                return console.log({clovisArray});
            }

            evenInputs(inputs);
            oddInputs(inputs);
