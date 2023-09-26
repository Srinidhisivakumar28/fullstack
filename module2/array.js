

const cars = ["aa","bb","cc"];
//console.log(cars);
//console.log(cars[0]);
//console.log(cars[1]);
//console.log(cars[2]);

/*cars.forEach((item,index) => {
   if(item === 'aa') {
    cars[index] = "dd";
   } 
});
console.log(cars); */

const movies = new Array("aa","bb","cc");
const age = new Array(12,22,43);
const mixedItems = new Array(movies,age);
console.log(mixedItems);
