

/* const person = {};

person["firstName"] = "Sri";
person["LastNamae"] = "nidhi";
person.age = 24;
person.designation = "fullstack developer";
console.log(person.firstName+ 'works ' + person.designation);


const person1 = {firstname: 'sri', lastname:'nidhi'};
const person2 = {firstname: 'aaa', lastname:'bbb'};
const personCollection = [person1, person2];
console.log(personCollection);

 // object constructors

 const school = new Object();
 school.name = "sunbeam";
 school.grade = "A";
 school.address = "vellore";
 console.log(school); 

 const student = new Object();
 student.name = "siddarath";
 student.percentage = "78%";
 student.greet = function () {
    return "Hello World"
 };

 const student = {
    name: "srinidhi",
    percentage: "78%",
    greet: function ()  {
    return this.name + ", Hello World"; 
    },
 };
 console.log(student.greet());
 */

 function person(firstName,lname,age,contactNumber) {
    this.firstName = firstName;
    this.lname = lname;
    this.age = age;
    this.contactNumber = contactNumber;
 }
 const p1 = person("sri","nidhi",'27',948696770);
 console.log(p1);
