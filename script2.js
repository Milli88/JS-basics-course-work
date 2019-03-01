// JavaScript Document

/* Comment out code */

var firstName = 'John';
var age = 25;

//type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + 'year old' + job + 'Is he married?' + isMarried);

//varible mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + 'year old' + job + 'Is he married?' + isMarried);

var lastName = prompt('What is his last name ?');
console.log(firstName + ' ' + lastName);


//Logical operators
var year, yearJohn, yearMark;

now = 2018;
ageJohn = 28;
ageMark =30;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log (yearJohn);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//type of operator
console.log(typeof johnOlder);