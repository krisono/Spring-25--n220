const applePrice = 0.49;

let pickedApples = 4;

// I went back to pick more apples
pickedApples += 10;

// I dropped a few
pickedApples -= 4;

const totalForApples = applePrice * pickedApples;
console. log("Cost of Apples", totalForApples);

console.log("Too many apples", pickedApples >5 );

// I eat a few and drop the rest
pickedApples -= 6;

console.log("Too many home", pickedApples > 5);

let rememberRouteHome = false;

console.log("Good to go home", pickedApples > 5 && rememberRouteHome);

let haveAMap = true;

console.log("Good to go home", rememberRouteHome || haveAMap || Boolean(" "));

console.log("String of 5:", typeof String(5), typeof 5);

let myAddress = "413";

//myAddress = myAddress + " Peach"
myAddress += " Peach";

console.log("My Address:", myAddress);

console.log("Street name has an St", myAddress.toLowerCase().includes("st"));

console.log("My Address:", myAddress.replace("St", "Street"));

console.log("ty".length)

let myAge = "76";

myAge = Number(myAge);

myAge += 5 / 12;

console.log("My Age", myAge.toFixed(2));

console.log("Next Birthday: ", Math.ceil(myAge));

console.log("My Fav Number: ", Math.round(MathRandom() * 100));