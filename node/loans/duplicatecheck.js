var obj={
    negativeCustomerList :[],
    initalize:function(){
        this.negativeCustomerList.push("ram");
        this.negativeCustomerList.push("tom");
    },
    checkDuplicate:function(name){
        this.initalize();
        return this.negativeCustomerList.filter(function(currentName){
            return currentName==name.toLowerCase();
        }).length;
    }
}
module.exports=obj;
