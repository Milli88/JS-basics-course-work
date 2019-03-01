//Truthy and Falsy values and equality operators

//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

var height;

height = 0;

//check is varible is defined
if (height || height ===0){
    console.log('Varible is defined');
    }else {
        console.log('Varible has not been defined');
    }


/******************    NOTE  ********************/
// == varibles dont have to match
// ==== varibles have to match

if (height == '23'){
    console.log ('The == operator does type coercion');
    
}else if (height === '23'){
    console.log('this is specific to varible type so it is false becase a STRING and a NUMBER');
}else  {
    console.log('break');
}
/*******************************************/