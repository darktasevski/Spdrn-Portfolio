// // // var name = prompt("What is your name?");
// // // var lastName = prompt("What is your last name?");
// // var age = prompt("How old are you?");

// // // alert("So your name is " + name + " " + lastName + "?");
// // // alert("And you have " + age + " years?");
// // // console.log("Well, nice to meet you " + name + " " + lastName + "!");
// // var lifeTime = age * 365.25;
// // alert("So you are alive for roughly " + lifeTime + " days!");


// // // Get age and convert it to a Number (prompt always returns a String)
// // var age = Number(prompt("What is your age?"));

// // // If age is negative
// // if(age < 0) {
// //  console.log("Come back once you're out of the womb");
// // }

// // // If age is 21  
// // if(age === 21) {
// //  console.log("Happy 21st Birthday!");
// // }

// // // If age is odd
// // //(not evenly divisible by two)
// // if(age % 2 !== 0) {
// //  console.log("Your age is odd!");
// // }

// // // If age is a perfect square
// // if(age % Math.sqrt(age) === 0) {
// //   console.log("Your age is a perfect square!");
// // }



// // Guess game js


// // var secretNumber = 5;
// // var guess = Number(prompt("Guess the secret number! \:D "));

// // if (guess === secretNumber) {
// //   console.log("You have guessed correctly!! :D");
// // } else if (guess < secretNumber) {
// //   console.log("Too low, guess again!");
// // } else if ( guess > secretNumber) {
// //   console.log("Too high, guess again!");
// // } else {
// //   console.log("You suck!");
// // }


// // while loop

// // var loopN = 1;

// // while(loopN < 22) {
// //   console.log("count is " + loopN);
// //   loopN++;
// // }

// // var name = "Darko";
// // var count = 0;

// // while(count < name.length) {
// //   console.log(name[count]);
// //   count++;
// // }

// // prints all odd numbers between 300 and 333

// var count = 300;

// while (count <= 333) {
//     if (count % 2 !== 0) {
//         console.log(count);
//     }
//     count++;
// }




// // prints all numbers between 5 and 50 that are dividable by both 3 and 5!
// var count = 5;

// while (count <= 50) {
//     if (count % 3 === 0 && count % 5 === 0) {
//         console.log(count);
//     }
//     count++;
// }


// // var answer = prompt("Are we there yet??!");

// // while( answer !== "yes" && answer !== "yeah" ) {
// //   var answer = prompt("Are we there yet??!");
// // };

// // alert("Yay!! We made it!");


// // var answer = prompt("Are we there yet??!");

// // while( answer.indexOf("yes") === -1 ) {
// //   var answer = prompt("Are we there yet??!");
// // };

// // alert("Yay!! We made it!");



// // iterating all numbers from -10 to 19...

// // for (var i = -10; i <= 19; i++) {
// //   console.log(i);
// // }

// // all even numbers between 10 and 40...

// // for (var i = 10; i <= 40; i++) {
// //   if (i %  2 === 0) {
// //       console.log(i);
// //   }
// // }

// // all odd numbers between 300 and 333...

// // for (var i = 300; i <= 333; i++) {
// //   if (i % 2 !== 0 ) {
// //       console.log(i);
// //   }
// // }

// //  all numbers divisible by both 3 and 5 between 5 and 50...

// // for (var i = 5; i <= 50; i++) {
// //   if (i %  3 === 0 && i % 5 === 0) {
// //       console.log(i);
// //   }
// // }
// // var answer = prompt("Are we there yet??!");

// // while (answer !== "yes" && answer !== "yeah") {
// //     var answer = prompt("Are we there yet??!");
// // };

// // alert("Yay!! We made it!");


// // var answer = prompt("Are we there yet??!");

// // while (answer.indexOf("yes") === -1) {
// //     var answer = prompt("Are we there yet??!");
// // };

// // alert("Yay!! We made it!");



// // // iterating all numbers from - 10 to 19...

// // for(var i = -10; i <= 19; i++) {
// //     console.log(i);
// // }

// // // all even numbers between 10 and 40...

// // for(var i = 10; i <= 40; i++) {
// //     if (i % 2 === 0) {
// //         console.log(i);
// //     }
// // }

// // // all odd numbers between 300 and 333...

// // for(var i = 300; i <= 333; i++) {
// //     if (i % 2 !== 0) {
// //         console.log(i);
// //     }
// // }

// // // all numbers divisible by both 3 and 5 between 5 and 50...

// // for(var i = 5; i <= 50; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //         console.log(i);
// //     }
// // }




// // FUNCTIONS PROBLEM SET ---

// //--------------------------------------------------------------
// // isEven function problem solution

// var evenOr = function isEven(num) {
//     //return true if even
//     if (num % 2 === 0) {
//         return true;
//         // return false if not
//     } else {
//         return false;
//     }
// };
// /* even better solution */

// function wasEven(num) {
//     return num % 2 === 0;
// }
// //---------------------------------------------------------------

// // factorial problem solution

// // function factorial(num){

// //   for (var i = num; i >= 0 ; i--) {
// //       console.log( num * i );
// //   };
// // }

// function factorialize(num) {
//     // If the number is less than 0, reject it.
//     if (num < 0)
//         return -1;

//     // If the number is 0, its factorial is 1.
//     else if (num == 0)
//         return 1;

//     // Otherwise, call the recursive procedure again
//     else {
//         return (num * factorialize(num - 1));

//         First Part of the recursion method
//         You need to remember that you won’t have just one call, you’ll have several nested calls

//         Each call: num === "?"                    num * factorialize(num - 1)
//         1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
//         2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
//         3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
//         4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
//         5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)

//         Second part of the recursion method
//         The method hits the if condition, it returns 1 which num will multiply itself with
//         The function will exit with the total value

//         5th call will return (5 * (5 - 1))     // num = 5 * 4
//         4th call will return (20 * (4 - 1))    // num = 20 * 3
//         3rd call will return (60 * (3 - 1))    // num = 60 * 2
//         2nd call will return (120 * (2 - 1))   // num = 120 * 1
//         1st call will return (120)             // num = 120

//         If we sum up all the calls in one line, we have
//         (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120

//     }
// }
// factorialize(5);

// /* another solution */

// function factorial(num) {

//     // if(num === 0){ return 1; }
//     // define a result variable 
//     var result = 1; // var result = num;
//     // calculate factorial and store value in result
//     for (var i = 1; i <= num; i++) { // for(var = num-1; i >= 1; i--)
//         result *= i;
//     }
//     // return the result variable
//     return result;
// }
// // factorial(4); // 4 * 3 * 2 * 1  4!

// //--------------------------------------------------------------- 

// // KEBAB TO SNAKE FUNCTION PROBLEM SOLUTION


// function kebabToSnake(string) {

//     var newString = string.replace(/-/g, "_");
//     // or return (string.replace(/-/g, "_"));
//     return newString;
// }


// //-----------------------------------------------------------------
// //                    TODO LIST

// //to do array
// var toDos = ["read"];
// //finished tasks
// var removed = "";
// //user input
// var input = prompt("What would you like to do?")
//     // loop that keep asking user what he wants to do until user rage quit
// while (input !== "quit") {
//     // if user asks for list(shows toDos array content)
//     if (input === "list") {
//         listTodos();
//     } else if (input === "new") { //if user wants to add new todo
//         newTodof();
//     } else if (input === "delete") {
//         deleteTodo();
//     } else if (input === "finished") {
//         finishedTodos();
//     }
//     // input line, that goes in loop
//     var input = prompt("What would you like to do?")
// };
// // quit message
// alert("Do your stuff!! See you later!");
// // Todo functions --->   
// function listTodos() {
//     console.log("***************"); // decorative asterisks around todo list
//     toDos.forEach(function(todo, index) { // index number of todo in array, can be named as you wish
//         // alert(toDos);
//         console.log(index + ": " + todo);
//     });
//     console.log("**************");
// };

// function newTodof() {
//     var newTodo = prompt("Enter a new todo");
//     toDos.push(newTodo);
//     console.log("Todo added");
// };

// function deleteTodo() {
//     // delete and todo from the array
//     var dlt = prompt("Input index of todo to delete");
//     // removing todo and storing it into removed variable array?
//     removed = toDos.splice(dlt, 1); // https://blog.mariusschulz.com/2016/07/16/removing-elements-from-javascript-arrayss
//     console.log("Todo removed.");
// };

// function finishedTodos() {
//     console.log("**************");
//     console.log(removed);
//     console.log("**************");
// }


// // function toDo() {
// //   // todo array

// //   //user input
// //   var userInput = prompt("What you would like to do?");
// //   //input storage if new
// //   if (userInput == "new") {
// //       var newTask = prompt("Enter a new Todo");
// //       toDos.push(newTask);
// //       return newTask;
// //   }
// //   //list show if list
// //   else if (userInput == "list") {
// //       alert(toDoList);
// //   }
// //   //quit app
// //   else {
// //       alert("See you later \:(");
// //   }
// // } 

// // toDo();


// // -------------------------------------------------------------------

// // iterating through the loop

// var colors = ["red", "blue", "green", "gray"];

// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// };
// // forEach statement
// colors.forEach(function() {
//     console.log("inside for each!");
// }); // printing inside for each 4 times, for every object in array.
// // colors.forEach(function(col) {
// // console.log("inside for each! " + col);
// // });
// //  inside for each! red
// //  inside for each! blue
// //  inside for each! green
// //  inside for each! gray

// // ANOTHER WAY to iterate through array...
// //  var count = 0;
// // while(count < colors.length) {
// //   console.log(colors[count]);
// //   count++;
// // }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         console.log(numbers[i]);
//     }
// }


// // ---------------------------------------------------------------
// // PRINT REVERSE FUNCTION ----------------------------------------

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // my solution!!! xD 
// http://stackoverflow.com/questions/8689573/why-is-iterating-through-an-array-backwards-faster-then-forwards
function printReverse(num) {
    for (var i = num.length - 1; i >= 0; i--) {
        console.log("***********");
        console.log(numbers[i]);
    }
};



// -------------------------------------------------------------------
// IS UNIFORM FUNCTION --------------------------------------------

var uniArray = [1, 1, 1, 1, 1];
var nuniArray = [1, 1, 2, 1, 1];
// my solution -> http://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
function isUniform(check) {
    for (var i = 1; i < check.length; i++) {
        if (check[i] !== check[0]) {
            return false;
        }
    }
    return true;
}

//---------------------------------------------------------------------
// SUM ARRAY FUNCTION -------------------------------------------------

var nums2 = [5, 10, 11];
var nums3 = [2, 2, 2, 2, 3]
var nums = [1, 4, 88, 99, 7];
var nums1 = [10, 10, 88, 199, 5];
// my own solution x) edit: mistaken sum for multiply -.-
function sumArray(sum) {
    var result = 1;
    for (var i = 0; i < sum.length; i++) {
        result = result * sum[i]
    };
    return result;
};
// Colts forEach solution

// function sumArray(sum) {
//     var result = 0;
//     sum.forEach(function(element) {
//         result += element;
//     });
//     return result;
// }

//---------------------------------------------------------------------
// MAX() ARRAY FUNCTION ----------------------------------------------

// my own solution x)

function max(max) {

    var maxNum = 0;
    for (var i = 0; i < max.length; i++) {
        if (maxNum <= max[i]) {
            maxNum = max[i];
        }
    }
    return maxNum;
};

// Colts solution 

function max(max) {

    var maxNum = max[0];
    for (var i = 1; i < max.length; i++) {
        if (max[i] > maxNum) {
            maxNum = max[i];
        }
    }
    return maxNum;
}

//------------------------------------------------------------
// FOR EACH CUSTOMIZATION? -----------------------------------

function myForEach(arr, func) {
    // loop through array
    for (var i = 0; i < arr.length; i++) {

    };
    // call funcc for each item in array
    func(arr[i]);
}


//---------------------------------------------------------------------
// MOVIE DATABASE ARRAY ----------------------------------------

// declaring array with objects inside:
var movies = [{
    name: "Ghost in the Shell",
    year: 1995,
    genre: ['Animation', 'Action', 'Crime'],
    rating: "4.5 stars",
    watched: true
}, {
    name: "Ghost in the Shell 2: Innocence",
    year: 2005,
    genre: ['Animation', 'Drama', 'Sci-Fi'],
    rating: "4 stars",
    watched: false
}, {
    name: "The Matrix",
    year: 1999,
    genre: ['Action', 'Sci-Fi'],
    rating: "5 stars",
    watched: true
}, {
    name: "Inception",
    year: 2010,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: "5 stars",
    watched: true
}];

function movieFun() {
    // iterate through movie database, and return movie info and info about have you watched it or not!
    for (var i = 0; i < movies.length; i++) {
        console.log("---------------------------------------------");
        if (movies[i].watched == true) { // thi can be broken in lesser console.log() with adding variables to: 
            // name, genre and rating and 'you have watched' as result. so it looks like console.log(result + name + genre + rating);
            console.log("You have watched " + "\"" + movies[i].name + "\"" + " - " + movies[i].genre + " - " + movies[i].rating);
        } else {
            console.log("You have not seen " + "\"" + movies[i].name + "\"" + " - " + movies[i].genre + " - " + movies[i].rating);
        }
    }
}
// movies.forEach(function(movies){  
//  console.log(movieFun(movies));
// });

//-------------------------------------------------------------------------------------------
// change background coloe every second js

// var body = document.querySelector('body');

// var isRed = false;

// setInterval(function(){
//  if(isRed) {
//  body.style.background = "silver";
// } else {
//  body.style.background = "red";
// }
//  isRed = !isRed; // switching true/false condition for isREd variable each iteration
// // }, 1000); // code runs every 1 second // (had to comment this out because of console spam...)


//-----------------------DOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMV
// DOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMDOMV---------------

// Methods
// The document comes with a bunch of methods for selecting elements.  We're going to learn about the following 5:

document.getElementById() // SELECTS ELEMENT BY ID
document.getElementsByClassName() // SELECTS ELEMENT BY CLASS
document.getElementsByTagName() // SELECTS ELEMENT BY NAME (p, h1, div, etc.)
document.querySelector() // selects first selected object for example: document.querySelector('h1'); selects the FIRST h1 on the page
document.querySelectorAll() // this one selects every selected object on page in opossite to .querySelector();


// ------------------------------------------------------------------------//
// FCC ALGORITHMS CHALLENGES --------------------------------------------------------

// REVERSING STRING ALGORITHM
function reverseString(str) {

    return str.split("").reverse().join("");
}
reverseString("hello");

// Factorial algorhitm ^^^ ----------------------------------------------
//           solution up
// ----------------------------------------------------------------------


// Palindrome algorithm ------------------------------------------------
// ---------------------------------------------------------------------

function palindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

    var lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";

    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split('').reverse().join('');
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";

    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}

palindrome("A man, a plan, a canal. Panama");

//my solution for palindrome 
function palindrome(str) {
    var simplified = str.toLowerCase().replace(/[\W_]/g, "");
    var reversed = str.toLowerCase().replace(/[\W_]/g, "").split('').reverse().join('');

    return simplified === reversed;

}

palindrome("not a palindrome");

//-----------------------------------------------------------------------------
// Find the Longest Word in a String algorithm --------------------------------

function findLongestWord(str) {
    var arrayed = str.split(" ");
    var word = 1;
    for (var i = 1; i < arrayed.length; i++) {
        if (arrayed[i].length >= word) {
            word = arrayed[i].length;
        }
    }
    return word;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//----------------------------------------------------------------------------
// Title Case a Sentence algorithm -------------------------------------------


function titleCase(str) {

    var caps = str.toLowerCase().split(" "); // .charAt selects character in the string[zero indexed]
    // upper case at .charAt(0) eliminates rest of the string 
    for (var i = 0; i < caps.length; i++) { // so the rest must be added after altering first character with --
        caps[i] = caps[i].charAt(0).toUpperCase() + caps[i].substr(1);
    } // .substrThe substr() method extracts parts of a string, beginning at the character 
    //  at the specified position, and returns the specified number of characters.

    return caps.join(" ");
}

titleCase("I'm a little tea pot");

/////////////////////////////////////////////////////////////////////////////////

//        Return Largest Numbers in Arrays algorithm ////////////////////////////


function largestOfFour(arr) {
    // seting up target array
    maxArray = [];
    for (var i = 0; i < arr.length; i++) {
        // The Math.max() function returns the largest of zero or more numbers.
        maxArray.push(Math.max.apply(null, arr[i])); // dont have fucking idea what .apply is doing :(
        // The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
    }
    // returns an array with highest numbers of last array
    return maxArray;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);


/////////---------------------------------------------------------------------------
//       Confirm the Ending algorhitm-----------------------------------------------------

function confirmEnding(str, target) {
    // making target.lenght as numeric variable
    var lng = target.length;
    // substr , substracts last 'lng' number of letters from string
    var end = str.substr(-lng) === target; // and this compares last 'lng' numbers of string with target


    return end;
}

confirmEnding("Bastian", "n");

//-----------------------------------------------------------------------------------
//  Repeat a string repeat a string ------------------------------------------------

function repeatStringNumTimes(str, num) {
    // repeat after me

    var repeat = str;
    var empty = "";
    // declaring what if num is less than 0 variable
    if (num < 0) {
        return empty;
    } // for loop to add str to repeat as long as i is less than num
    for (var i = 1; i < num; i++) {
        repeat += str;
    }
    return repeat; // ta-da badum-tss
}

repeatStringNumTimes("abc", 3);

///////////THISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHIS
//----------------------------VTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHISTHIS

An important concept in OOP is that of inheritance, which allows you to build a new object from an existing object.
The new object then inherits the properties and methods of the old object.
In class - based languages, inheritance applies to classes— this is known as classical inheritance.
In JavaScript, objects inherit directly from other objects— this is achieved by means of an internal object known as a prototype.
Hence, inheritance in JavaScript is prototype - based.

The prototype is actually a property of any
function.A
function is also an object and hence has properties.
Properties ascribed to a
function’ s prototype are automatically inherited by new objects constructed from the
function object.
A
function object that is intended to be used
for constructing new objects is therefore called a constructor.
There is nothing special about a constructor
function— any
function can be used as a constructor.
But there is a widespread convention to denote constructors by
function names starting with a capital letter.

Here is an example that shows the syntax in action:

    function Particle(pname) {
        this.name = pname;
        this.move = function() {
            console.log(this.name + " is moving");
        };
    }

This code creates a constructor Particle with a property name and a method move().
The keyword this ensures that these properties are accessible outside the constructor.
Any instance of the Particle object can then be created by the new keyword, and it automatically inherits these properties, as shown in this example:

    particle1 = new Particle("electron");
particle1.name; //returns"electron"
particle1.move(); // returns "electron is moving"

To add new properties to the parent object so that they are inherited by all instances of the object,
you need to assign those properties to the parent object’ s prototype.
For example, to add a new property mass and a new method stop() to the Particle object, we can type:

    Particle.prototype.mass = 1;
Particle.prototype.stop = function() { console.log("I have stopped"); };

These are then available to all instances of Particle, even those instantiated previously,
for example:

    particle1.mass; // returns 1

Note that the value of particle1.mass can thereafter be changed independently of the
default value inherited from Particle.prototype.mass,
    for example:

    particle1.mass = 2; // returns 2
Particle.prototype.mass; // returns 1;

Other properties can be added to the instance and do not, of course, propagate to the parent object or to other instances.For example, this line:

    particle1.spin = 0;

adds a new property called spin to particle1 and gives it the value of 0. Other instances of Particle will not have that property by
default.
