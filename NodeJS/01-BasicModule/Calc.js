/*var calc = {
    add:function(x,y){
        return x + y;
    }

}
module.exports=calc;*/

function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x -y;
}
//module.exports=calc;
module.exports.add=add;
module.exports.sub=subtract;
