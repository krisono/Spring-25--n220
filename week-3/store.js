let price = 40.99// i used let because this number could possibly be dynamic if i decalre it again
const sales_tax = 0.07;
console.log("Item Price: $", price); // I used const because this value is nopt to be changed
console.log("Total After Tax: ", price * (1 + sales_tax));

let newprice = 60.99 // i used let because this number could possibly be dynamic if i decalre it again
const discount_rate = 0.10 // const because this is NOT a dynamic discount rate but rather a firm one. 
console.log("Discounted Total After Tax: ", newprice * (1 + sales_tax) * (1 - discount_rate));


