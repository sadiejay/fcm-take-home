// to-do
// change north (`^`), south (`v`), east (`>`), or west (`<`) into something readable
    // create coordinates from these inputs
        // north / south -->  y coordinates
        // east / west --> x coordinates
    // have coordinates =+ or =-
        // north/east --> =+
        // south / west --> =-
    // push x,y values to an array
    // can create unit test using the examples that they have given.

// part 1
    // array length +1 = number of pizzas delivered
    // number of houses = number of unique coordinates
        // remove duplicates (.reduce?)
        // count array length

    let array = [];
    let xCoord = 0;
    let yCoord = 0;
    switch (input) {
        case '^':
            yCoord += 1;
        break;
        case  '>':
             xCoord += 1;
        break;
        case 'v':
            yCoord -= 1;
        break;
        case '<':
            xCoord -= 1;
        break;
    }


    let reName = foreach((input) => {
        // log xCoor & yCoor
        // push to arry both x/y

    });


// part 2 
    // let maria = y coordinates
    // let clovis = x coordinates
    // ?