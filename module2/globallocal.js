/* var fullname;

{
    var age;
}
function greet() {
   var fullname = "Siddartha verma";
   var age = 23;
   console.log(age);

   console.log(fullname);
}

function greet2() {
    fullname = "Siddartha verma";
    console.log(fullname);
}
greet();
greet2();
*/

function num1(number1) {
    const result = number1 * 2;
     function num2() {
        return result * 3;
    };
    const resp = num2();
    console.log(resp);
}
num1(10);
 //const response = num1(10);
 //console.log(response);