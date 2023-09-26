/*
const fruits = ['mango', 'apple', 'kiwi', 'banana'];
const ages = [{emp: 'sidd', age:24}, {emp: 'aadi', age:87}];
const age_map = ages.map((ea: {emp: string, age: number}) => {
    return{
        emp_details: ea.emp + " 'S age is: " + ea.age;
    }
});
 
age_map.forEach(a => console.log(a));

const marks = [{
    subject: 'english',
    marks: 50
}, {
    subject: 'Tamil',
    marks: 89

}];
const result = marks.reduce(function(totalMarks,initialMarks) {
    return totalMarks + initialMarks;
}, 0)

console.log(result);
*/

const firstname = 'srinidhi';
const lastname = 'srinidhi';

console.log('${firstName}-${lastname}');

const res = firstname.replace('dd', 'ee');
console.log(res);
const res2 = firstname.concat('11111');
console.log(res2);
const greetings = 'Hello World ';
console.log(greetings.trim());
const specialkey = 'COUNTRY';
console.log(specialkey.split('_'));

