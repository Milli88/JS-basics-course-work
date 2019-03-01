// Objects and properties


//Object and Key, You can list many differant data types as Objects
var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: 1990,
    family: ['jan', 'mark', 'bob', 'emily'], 
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

//Changes job, and married status in object
john.job = 'designer';
john['isMarried'] = true;
console.log(john);


//Create new Object
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);




/********************************************************/

//Object Methods, USE the .this to return the current object in function
var john = {
     firstName: 'John', 
    lastName: 'Smith',
    birthYear: 1990,
    family: ['jan', 'mark', 'bob', 'emily'], 
    job: 'teacher',
    isMarried: false
    calcAge: function(){ this.age = 2018 - this.brithYear;}
};

john.calcAge();
console.log(john);
