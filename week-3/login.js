const password = "(d0nteatTheScript)" // used const because password is very specific and does not change
//if password == "d0nteatTheScript
const passwithapplength = password.length > 8;
const passwithspace = password.includes(" ");
const passwitheat = password.includes("eat");

console.log("The password", passwithapplength, "is more than 8 characters")
console.log("The password having a space is ", passwithspace)
console.log("The password having the words 'eat' is ", passwitheat)