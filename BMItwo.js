//BMI calculator 2



//JOHN
var john = {
    fullName: 'John Milligan',
    mass: 78,
    height: 1.50,
    calcBMI: function(){this.bmi= this.mass/(this.height * this.height);
    return this.bmi;
    }
   
    
    //MARK
var mark = {
    fullName: 'Mark Miller',
    mass: 77,
    height: 1.25,
    calcBMI: function(){this.bmi= this.mass/(this.height * this.height);
    return this.bmi;
    }
}
    

if (john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + ' has a higher BMI of' + john.bmi);
} else if (mark.bmi > john.bmi){
    console.log(mark.fullName + ' has a higher BMI of' + mark.bmi);
}else{
    console.log('They have the same BMI');
}
    
    
    
    
}