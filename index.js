<!--opgave1 -->
console.log("Hello World!");
console.log("Hej Verden");
console.log("Ciao mundo");
console.log("Hallo Welt");

<!--opgave2-->
let greeting; // This is a variable
greeting = "Hello how is it going";

console.log(greeting);
console.log(greeting);
console.log(greeting);

<!--opgave3-->
console.log("I'm awesome'!");

<!--opgave4-->
const name = "My name is peter. It has 5 characters";

console.log(name);

<!--opgave5-->
console.log(typeof typeof 3+5);
console.log(typeof typeof 3+5);

// This is the right way to make it solve 3 + 5

let sum = 3 + 5;
console.log(sum); // Dette vil vise resultatet 8 i konsollen.

<!--opgave6-->
const result1 = (6 + 2)
console.log(result1); // Will log out: 8

const complexCalc = ( 8 + 4) * 3 - 4 ** 2
console.log(complexCalc); // Will log out: 20

// (8 + 4) * 3 - 4 ** 2

<!--opgave7-->

const numberOfStudentsNumber = 15
const numberOfTeachersNumber =8
const totalStudentsAndTeachers = numberOfStudentsNumber + numberOfTeachersNumber

console.log(`Total number of teachers and mentors:${totalStudentsAndTeachers}`)


// Opgave8


// Beregner procentdelen
let PercentageOfStudents = (numberOfStudentsNumber / totalStudentsAndTeachers) * 100;
let PercentageOfTeachers = (numberOfTeachersNumber / totalStudentsAndTeachers) * 100

console.log(`Percentage Of Students:${PercentageOfStudents + "%"}`)
console.log(`Percentage Of Teachers:${PercentageOfTeachers + "%"}`)

// Opgave9

const TravelTime = 25
const Frekvens = 10

let NumberOfTrainsInOppositDirection = (TravelTime / Frekvens)

console.log(`Gennemsnit antal toge i modsat retning:${NumberOfTrainsInOppositDirection}`)

// Opgave10

const Price1 = 100
const Pizza1 = "Pepperoni"

console.log(`New pizza order:${Pizza1}
Price of Pizza:${Price1}`)
