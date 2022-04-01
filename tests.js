import { getData, processData } from "./part1.js";
import { getDuoData, processDuoData } from "./part2.js";

// part 1 tests
getData('testfile1.txt').then(data => {
    let result = processData(data);
    let expected = 2;
    console.log("p1- testfile1.txt",result === expected, {result,expected});
})
getData('testfile2.txt').then(data => {
    let result = processData(data);
    let expected = 4;
    console.log("p1- testfile2.txt",result === expected, {result,expected});
})
getData('testfile3.txt').then(data => {
    let result = processData(data);
    let expected = 2;
    console.log("p1- testfile3.txt",result === expected, {result,expected});
})
getData('testfile4.txt').then(data => {
    let result = processData(data);
    let expected = 2;
    console.log("p1- testfile4.txt",result === expected, {result,expected});
})

// part 2 tests
getDuoData('testfile1.txt').then(data => {
    let result = processDuoData(data);
    let expected = 2;
    console.log("p2- testfile1.txt",result === expected, {result,expected});
})
getDuoData('testfile2.txt').then(data => {
    let result = processDuoData(data);
    let expected = 3;
    console.log("p2- testfile2.txt",result === expected, {result,expected});
})
getDuoData('testfile3.txt').then(data => {
    let result = processDuoData(data);
    let expected = 11;
    console.log("p2- testfile3.txt",result === expected, {result,expected});
})
getDuoData('testfile4.txt').then(data => {
    let result = processDuoData(data);
    let expected = 3;
    console.log("p2- testfile4.txt",result === expected, {result,expected});
})