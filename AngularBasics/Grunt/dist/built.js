function Item(id,name,desc,price,quantity,rating){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.rating = rating;
};var itemOperations={
    itemList:[],
    addItem:function(id,name,price,quantity,desc,rating){
        var itemObject = new Item(id,name,desc,price,quantity,rating);
        this.itemList.push(itemObject);
    }
};function doAjax(){
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
    
};function showItems(){
    if(localStorage.items){
            //var itemList = JSON.parse(localStorage.items); // Convert JSON into Object
        var itemList = localStorage.items;
        console.log(" Typeof ",typeof itemList);
        var itemList = JSON.parse(localStorage.items);
        var ul = document.getElementById("items");
        itemList.forEach(function(itemObject){
            var li = document.createElement("li");
            var img = "<img src='"+itemObject.url+"'>";
            var button = "<button>Add to Cart</button>";
            li.innerHTML="Id "+itemObject.id+ " Name "+itemObject.name+" Price "+itemObject.price+img+button;
            ul.appendChild(li);
        })
    }
}