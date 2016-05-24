
/*
*/

app.service("calcService",function(){
    this.calcOperation=function(operator,operand1,operand2){
            return eval(operand1 + operator + operand2);
        }
   /* var mathOperations = {
        calcOperation:function(operator,operand1,operand2){
            return eval(operand1 + operator + operand2);
        }
        add:function(num1,num2){
            return parseInt(num1) + parseInt(num2);        
        },
        subtract:function(num1,num2){
            return parseInt(num1) - parseInt(num2);        
        }
    }
    return mathOperations;*/
})