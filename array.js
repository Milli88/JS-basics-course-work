// Array

//Initiate new array
var names = ['john', 'mark', 'jane'];
var years = new Array(1990,1969, 1948);

console.log(names[2]);
console.log(names.length);


//Mutate array data
names[1] = 'ben';
names[names.length]= 'mary';
console.log(names);

//Differant data types
var john = ['john', 'smith', 1990, 'teacher', 'false'];

//Push adds new element at end of ARRAY

john.push('blue');

//unshift adds an element  to begining of Array
john.unshift('Mr.');
console.log(john);

//pop removes an element from the end
john.pop();

//shift removes and element from the front
john.shift();

//index of returns the position of the element of the array 
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'; console.log(isDesigner); 