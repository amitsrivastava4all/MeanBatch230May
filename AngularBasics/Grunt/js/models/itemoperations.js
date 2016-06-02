var itemOperations={
    itemList:[],
    addItem:function(id,name,price,quantity,desc,rating){
        var itemObject = new Item(id,name,desc,price,quantity,rating);
        this.itemList.push(itemObject);
    }
}