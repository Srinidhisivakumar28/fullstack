
/* function greetCustomer() {
    console.log("Hello peter");
    
}
greetCustomer();

function greetCustomer(customerName) {
    console.log("Hello" +  customerName);
}
greetCustomer("Tomm") 

function checkForValidAge(age) {
    return age > 18 ? true : false;
}
var person1 = checkForValidAge(14);
console.log(person1);
var person2 = checkForValidAge(21);
console.log(person2); 

var test = function(marks) {
    return marks % 2 === 0 ? "passed" : "Failed"
};
 console.log(test(100));
 console.log(test(101));

 function printFullName(fname, lname) {
    console.log(fname + " " + lname);
 }
 printFullName("sri","nidhi");


const printFullName = (fname,lname) => {
    console.log(fname + " " + lname);
};
 printFullName("sri","nidhi");
*/
 function provideNumber1(number1) {
    return function provideNumber2(number2) {
        return parseInt(number1) + parseInt(number2);
    }
 }
 const result = provideNumber1(10);
 const finalResult = result(20);
 console.log(finalResult);