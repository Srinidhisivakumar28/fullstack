
/*var x = 10;
try {
if (x % 2 == 0){
   console.log("Fine Number"); 
}
} catch (err) {
    console.log(err);
} 

var x = 11;
try {
    x.toPrecision(5);
    console.log(x);
} catch(err) {
    throw "Error: While setting precision to x";
}
*/
var x = 5;
var y = 10;
try {
    x = y + 1 * 2;
} catch (err) {
    throw err;
} finally {
    console.log("Failed to convert");
}