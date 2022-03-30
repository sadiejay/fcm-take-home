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
                console.log(array);
            break;
            case  '>':
                 xCoord += 1;
                //  console.log(`xCoord = ${xCoord} yCoord = ${yCoord}`);
                var xVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
                array.push(xVal);
                console.log(array);
            break;
            case 'v':
                yCoord -= 1;
                // console.log(`xCoord = ${xCoord} yCoord = ${yCoord}`);
                var yVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
                array.push(yVal);
                console.log(array);
            break;
            case '<':
                xCoord -= 1;
                // console.log(`xCoord = ${xCoord} yCoord = ${yCoord}`);
                var xVal = `xCoord = ${xCoord} yCoord = ${yCoord}`;
                array.push(xVal);
                console.log(array);
            break;
        }
    });

// remove duplicates
 let uniqueCoords = [...new Set(array)];
 console.log(uniqueCoords);

// number of houses with at least 1 pizza
console.log(`${uniqueCoords.length} houses receive at least one pizza`);


// part 2 
    // let maria = y coordinates
    // let clovis = x coordinates
    // ?
