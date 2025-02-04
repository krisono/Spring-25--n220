let price = 40.99// i used let because this number could possibly be dynamic if i decalre it again
const sales_tax = 0.07;
console.log("Item Price: $", price); 
const priceaftertax = price * (1 + sales_tax); 
console.log("Total After Tax: ", priceaftertax);
const validdiscount = price > 50; // I used const because this value is nopt to be changed
const discount_rate = 0.10 // const because this is NOT a dynamic discount rate but rather a firm one. 
console.log("Discounted Total After Tax: ", priceaftertax * (1 - discount_rate * (validdiscount)));


