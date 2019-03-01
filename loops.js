//LOOPS automate many task withouth retyping allot of code

/*THREE PARTS (var/counter; condition evaluated each iteration;increment) */

//i increments by 1
for (var i =0; i < 10; i++){
    
    console.log(i);
}




/* PRINTS
0
1
2
3
4
5
6
7
8
9
*/



//j increments by 2
for (var j = 1; j <= 20; j +=2){
    console.log(j);
}



//PRINT Array
var john = ['john', 'smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}


//WHILE LOOP

var i = 0;
while (i < john.length){
    console.log(john[i]); i++;
}



//continue and break statements (!= differant Operator  !== Strict differant Operator)
var john = ['john', 'smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++){
    for (var i =0; i < john.length; i ++){
        if (typeof john[i] != )
            console.log(john[i] !== 'string') continue;
        console.log(john[i]);
    }
    console.log(john[i]);