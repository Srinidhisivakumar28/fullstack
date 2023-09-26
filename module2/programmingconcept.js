
/* 
1.) variable declartion
*/

let employeeName! : string;
employeeName = 'srinidhi';
employeeName = 'aditiya';
var employeeSalary!: number;
employeeSalary = 9000;
employeeSalary = 12000;
const employeeGrade: string = 'A+';

/*
2.) basic SyntaxError
*/
type Gender = 'male' | 'female' | 'other';
interface Person {
    firstName: string;
    lastName: string;
    contactNumber: number;
    isMarried: boolean;
    address:Address;
    gender:Gender 
}
interface Address {
    address1: string;
    address2: string;
    pincode: number;
    country: string;
}
const p1: Person = {
    firstName: 'srinidhi',
    lastName: 'sivakumar',
    contactNumber:'9993337770',
    isMarried: false,
    address: {
        address1: 'vellore',
        address2: 'srinidhi',
        pincode: 632059,
        country: 'india'
    },
    gender: 'female'
};  
/*
3.) datatypes and structure
*/

type Transmission = 'petrol' | 'diesel' | 'cng' | 'electric' | 'hybrid';
class Car {
    public color!: string;
    public transmission!: Transmission;
    public price!: number;
    public brand!; string;
    constructor(color: string, price: number, brand: string) {
        this.color = color;
        this.transmission = transmission;
        this.price = price;
        this.brand = brand;
    }
}
const car1: Car = new Car('red', 'petrol', 2500000, 'Audi');

const age: number = 27;

if(age > 18) {
    console.log('you are valid');
} else {
    console.log('you are not valid');
}

const result = age > 18 ? 'you are valid' : 'you are  not valid';
console.log(result);
/*
4.) flow and control structure
*/
const numbersArr: numbers[] = [1,2,4,5,6,7,8,9];
numbersArr.forEach(num => console.log(num));
for(let i=0;i<numbersArr.length;i--) {
    console.log(numbersArr[i]);
}