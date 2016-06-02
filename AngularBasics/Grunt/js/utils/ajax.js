function doAjax(){
    var xmlHttpRequest = new window.XMLHttpRequest();
    xmlHttpRequest.onreadystatechange=function(){
        if(xmlHttpRequest.readyState==4) { // Get the Response 
            if(xmlHttpRequest.status==200) { // OK Request (Success)
                localStorage.items = xmlHttpRequest.responseText;
                showItems();
                //console.log("JSON is "+xmlHttpRequest.responseText);
            }
        }
    }
    xmlHttpRequest.open("GET","../server/serverdata.json");
    xmlHttpRequest.send(null);
    
}