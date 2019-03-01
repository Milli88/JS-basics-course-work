//Tip Calculator 2
var mark = {
    fullName: 'Mark Milligan',
    bill: [44,34,54,59],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
    
    
    for (var i = 0; i < this.bills.length; i ++){
        //Determines percentage base on tipping rules
        var percentage;
        var bill = this.bills[i];
        
        if(bill <50){
            percentage = .2;
        }else if (bill >= 50 && bill < 200){
            percentage = .15;
        }else{
            percentage = .1;
        }
        
        //Add results to the corresponding arrays
        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill * bill * percentage;
    }
  }
}


// Average tips for both families



function calcAverage(tips){
    var sum = 0
    for (var i=0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

//Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);


if (john.average > mark.average){
    console.log(john.fullName + '\'s family pays higher tips, with an aver age of $' + john.average);
    
}else if (mark.average > john.average){ console.log(mark.fullName + '\'s family pays higher tips, with an aver age of $' + mark.average);
                                       
    }