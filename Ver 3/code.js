list=[]

function Item(itemPrice) {
    this.number = 0;
    this.price = itemPrice;
    this.addItem = function(){
        this.number ++;
        alert (this.number);
        alert ("$" + this.cost());
    }; 
    this.removeItem = function(){
        if (this.number > 0){
            this.number --;
            alert (this.number);
            alert ("$" + this.cost());
        } else {

        }
    };
    this.cost = function(){
        return this.number*this.price;
    }
}

var burger = new Item(10)
var pizza = new Item(7)

function addToOrder (item){
    alert(item);
    list.push(item)
    alert(list)
}