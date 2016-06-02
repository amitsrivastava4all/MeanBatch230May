function showItems(){
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