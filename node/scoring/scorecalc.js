function scoreCalculate( age){
    if(age<=40 && age>=25){
        return 90;
    }
    else{
        return 30;
    }
}
module.exports=scoreCalculate;