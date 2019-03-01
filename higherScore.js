var scoreJohn = (89 + 120 + 34)/ 3;
var scoreMike = (24 + 34 + 67) /3 ;
var scoreMary = (4 + 4+ 6) /3; 
console.log(scoreJohn,scoreMike,scoreMary);

if (scoreJohn > scoreMike > scoreMary){
    console.log('John\'s team wins with' + scoreJohn + 'points');
    
}else if (scoreMike > scoreJohn > scoreMary){
    console.log('Mikes\'s  teams wins with' + scoreMike + 'points');}
else{
    console.log('There is a draw');
}