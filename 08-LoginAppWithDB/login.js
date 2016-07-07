function checkUserLogin(userid, password){
    console.log("CheckUser Login "+userid+" "+password);
    if(userid===password){
        return {message:"Welcome",user:userid,pageTitle:"Welcome Page"};
    }
    else{
        return {message:"Invalid Userid or Password",pageTitle:"Error Page"};
    }

}
module.exports=checkUserLogin;