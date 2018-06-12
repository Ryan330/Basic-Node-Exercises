# Basic-Node-Exercises
-In exercise 1, we simply console log a message and use node to execute the coding via "node filename.js".
-In exercise 2, we create an array that returns the sum which is console logged with "process.argv".
-In exercise 3, we create a variable a variable that uses "require()" for node's file system module, "fs". We then 
use "readFileSync()" to read the data of the data in the entered file and returns the data in the binary format.
To convert to binary data to the plain text format which is readable to the user, we create a new variable that equals 
the variable that file read function with the ".toString()" method. We then console log the new string variable 
for the results.
-In exercise 4, we repeat the exercise in exercise 3, but we use the asynchronous method which includes a new "error" 
argument. This is to return any error if the file was not found for any reason. You can test it by changing the filename 
in the "readFile" function.
