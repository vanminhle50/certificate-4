// ---------------------------------------------------------------------
// Part 3: String Manipulation and Files
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen institute, VIC , Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------
//Step 1: Create a string with the given strings
/**
 * @let {string} myString - A string with the value "This is a string"
 * @let {string} anotherString - A string with the value "   Another string"
 * @let {string} hello - A string with the value "Hello there!"
 * @let {string} myName - A string with the value "van minh"
 */
let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "van minh";
document.getElementById("input-strings").innerHTML = `<span class="note">myString: [</span>${myString}<span class="note">]<br>anotherString: [</span>${anotherString}<span class="note">]<br>hello: [</span>${hello}<span class="note">]<br>myName: [</span>${myName}<span class="note">]</span>`;
document.getElementById("input-strings").style.whiteSpace = "pre-wrap";
//Step 2: 
/**
 * @let {number} myStringLength - The length of myString
 * @let {string} firstCharMyString - The first character of myString
 * @let {string} eleventhCharMyString - The 11th character of myString
 */
// Find out the length of myString
let myStringLength = myString.length;
// Display the length of myString
document.getElementById("lenght-string").innerHTML = `Length of myString : <span class="note"> ${myStringLength} </span>`;
// Find out the first character of myString
let firstCharMyString = myString[0];
// Display the first character of the strings
document.getElementById("first-character").innerHTML = `First Character of myString : <span class="note"> ${firstCharMyString}</span>`;
//Find out the 11th character of myString
let eleventhCharMyString = myString[10];
document.getElementById("eleventh-character").innerHTML = `11th Character of myString : <span class="note"> ${eleventhCharMyString}</span>`;


//Step 3: Use the slice and substring functions to create new strings.
/**
 * @let {string} sliceString - A substring of myString created using slice
 * @let {string} substringString - A substring of anotherString created using substring
 */
//Slice “is a” from myString
let sliceString = myString.slice(5, 9);
//Display the sliced string
console.log(sliceString);

//Use substring to get “the” from anotherString
let substringString = anotherString.substring(6, 9);
//display the substring string
console.log(substringString);

//Display the sliced string
document.getElementById("slice-string").innerHTML = `Create sliceString by slice “is a” from myString : <span class="note"> ${sliceString}</span>`;
//Display the substring string
document.getElementById("substring-string").innerHTML = `Create substringString by substring “the” from anotherString : <span class="note"> ${substringString}</span>`;

//Step 4: Change the case of the myName string
// Use the toUpperCase
myName.toUpperCase();

//Display the uppercase string
console.log(`Uppercase of myName : ${myName.toUpperCase()}`);

// toLowerCase functions
myName.toLowerCase();

//Display the lowercase string
console.log(`Lowercase of myName : ${myName.toLowerCase()}`);

// Display the uppercase string
document.getElementById("uppercase-string").innerHTML = `Uppercase of myName : <span class="note"> ${myName.toUpperCase()}</span>`;
// Display the lowercase string
document.getElementById("lowercase-string").innerHTML = `Lowercase of myName : <span class="note"> ${myName.toLowerCase()}</span>`;

//Step 5: Use concat, trim, replace and split to create new strings 
/**
 * @let {string} concatString - A concatenated string of hello and myName
 * @let {string} trimString - A trimmed version of anotherString
 * @let {string} replaceString - A version of myString with "is a" replaced by an empty space
 * @let {Array<string>} splitString - An array of substrings created by splitting myString on spaces
 */
//Concat hello and myName together
let concatString = hello.concat(" ", myName);
//Display the concatenated string
console.log(`Join the hello string and myName: ${concatString}`);

//Use the trim function to remove the spaces in anotherString
let trimString = anotherString.trim();
//Display the trimmed string
console.log(`Trim the spaces in anotherString: ${trimString}`);

//Use the replace function to change “is a” to an empty space in myString
let replaceString = myString.replace("is a", "");
//Display the replaced string
console.log(`Replace “is a” to an empty space in myString: ${replaceString}`);

//Split myString on the spaces.
let splitString = myString.split(" ");
//Display the split string
console.log(`Split myString on the spaces: ${splitString}`);


//Display the concatenated string
document.getElementById("concat-string").innerHTML = `Concat hello and myName together : <span class="note"> ${concatString}</span>`;
//Display the trimmed string
document.getElementById("trim-string").innerHTML = `Trim the spaces in anotherString : <span class="note"> ${trimString}</span>`;
//Display the replaced string
document.getElementById("replace-string").innerHTML = `Replace “is a” to an empty space in myString : <span class="note"> ${replaceString}</span>`;
//Display the split string
document.getElementById("split-string").innerHTML = `Split myString on the spaces : <span class="note"> ${splitString}</span>`;


//Step 6: Create algorithms 
/*Create algorithm for saving string to a text file
1. Receive a string of data to save.
2. Open or create a file named output.txt.
3. Write the string to the file.
4. Close the file. */

/* Create algorithm for reading in the text file
1. Receive the file name (output.txt).
2. Open the file and read its contents.
3. Print the content to the screen.
 */
// Ensure 'fs' is declared only once at the top
/* const fs = require('node:fs');
const data ="This is a string that we are going in to write to file";
console.log("Writing to file");
fs.writeFile('output1.txt', data,(err)=>{
    if (err){
        console.log(err);
    }else{
            console.log("File written successfully");
        }
    }
);
console.log("Reading from file");

fs.readFile("output1.txt",(err,fileText)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("The file content are: ");
    console.log(fileText.toString());
});
 */

