//The ternary Operator and Switch Statements

//Tenary Statement
var firstName = 'John';
var age = 16;

age >18 ? console.log(firstName + ' drinks beer'): console.log(firstName + 'drinks juice');

//Simplified Tenerary statement
var drink = age >=18 ? 'beer': 'juice';
console.log(drink);


    
    
    
//Switch Statement
    
var job = 'instructor';

switch (job){
        
    case 'instructor':
        console.log(firstName + 'teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + 'drives an uber');
        break;
    default:
        console.log(firstName + 'does something else');
}



//Switch Statement (TRUE) like an if/else statement

switch(true){
        
    case age < 13 :
    console.log(firstName + 'is a boy.');
        break;
    case age >=13 && <20 :
    console.log(firstName + 'is a teenager');   
        break;
    default:
     console.log(firstName + 'is a man');
 }
}

