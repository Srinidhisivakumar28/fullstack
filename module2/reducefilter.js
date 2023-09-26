
/* const numbers = [1,2,3,4,5];
const even = numbers.filter((item) => item % 2 === 0);
console.log(even);

const students = [
    {name:"sidd", age: 24},
    {name:"aditiya", age: 18},
    {name:"raj", age: 20},
    {name:"tina", age: 84},
];
const filteredstudents = students.filter((stud,index) => {
    console.log(index);
    return stud.age <= 18;
});
console.log(filteredstudents);

const marks = [
{subject: "english", marks:75},
{subject: "hindi", marks:80},
{subject: "maths", marks:65},
];

const result = marks.reduce(function(totalmarks, subj) 
{
    console.log(subj);
        return totalmarks + subj.marks;
});
const result = marks.reduce(sumAllMarks, 0);
console.log(result);
*/

const cartoons = [
"schinchan",
"doremon",
"spiderman",
"batman",
"doremon",
"batman",
];
const result = cartoons.reduce(function (obj,cartoon) {
    if(!obj[cartoon]) {
        obj[cartoon] = 1;
    } else {
        obj[cartoon]++;
    }
    return obj;
}, {});
console.log(result);