"use strict";
// const userName = 'Max';
// // userName = "Maximus"; 
// let age = 30;
// age = 29;
// function add(a:number, b:number) {
//     let result;
//     result = a + b;
//     return result
// }
// // if (age > 20) {
// //     let isOld = true;
// // }
// // console.log(isOld);
// const add = (a: number, b: number = 1) =>  a + b;
// // const printOutput = (output: string | number) => console.log(output);
// const printOutput: (a: string | number) => void = output => console.log(output);
// const button = document.querySelector('button');
// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }
// printOutput(add(5))
const hobbies = ['Sprots', 'Cooking'];
// const activeHobbies = ['Hiking'];
// activeHobbies.push(...hobbies)
const person = {
    firstName: 'Max',
    age: 30
};
// const copiedPerson = { ...person };
// console.log(copiedPerson)
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue, index) => {
        console.log(`curResult : ${curResult}, curValue : ${curValue}, index : ${index}`);
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person;
console.log(person, userName, age);
