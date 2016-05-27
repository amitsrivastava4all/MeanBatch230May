// app1 module
app.factory("MyService",function(){
    return {"show":function(){
        return "Hello App1 Module ";
    }}
});
app.service("MyAppService",function(){
    this.show=function(){
        return "HelloApp Service Module";
    }
    /*return {"show":function(){
        return "Hello App1 Module ";
    }}*/
});
