//Exercise 1
//Node.js Console Log
console.log("Exercise 1: This console log is to be loaded via node in Terminal with node filename.js.");




//Exercise Section Divider
console.log("---------------------------");




//Exercise 2
//Node.js Number Array Sum
var numArray = [10, 20, 30]; //Overall: 60
var numTotal = 0;

//Sum Function
numArray.forEach(function (num) {
    numTotal = numTotal + num;
});

//Print Results
console.log(`Exercise 2: ${process.argv + numTotal}`);




//Exercise Section Divider
console.log("---------------------------");




//Exercise 3
//Node.js File S
//Create File System Module
var fileRead = require("fs");

//Read File I/O
var fileContent = fileRead.readFileSync("./exercise3readme.txt");

//Set File Content to String
var fileString = fileContent.toString();


//Print file's content in plain text
console.log(fileString);




//Exercise 4
//Node.js File System (Asynchronous)
//Create File System Module
var fileReadAsync = require("fs");

//Read File I/O
var fileContentAsync = fileReadAsync.readFile("./exercise4readme.txt", 
function callFile(error, fileData) {
    if (error) {
        return console.error(error.message);
    }

    //Set File Content to String
    var fileStringAsync = fileData.toString();

    //Print file's content in plain text
    console.log(fileStringAsync);
});