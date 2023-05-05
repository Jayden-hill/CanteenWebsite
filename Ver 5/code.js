var list = [];
var costTotal = 0

function Item(itemPrice) {
    this.number = 0;
    this.price = itemPrice;
    this.addItem = function () {
        this.number ++;
        costTotal += this.price;
        document.getElementById("cost").innerHTML = "Cost: " + costTotal;
    }; 
    this.removeItem = function () {
        if (this.number > 0) {
            this.number --;
            costTotal -= this.price;
            document.getElementById("cost").innerHTML = "Cost: " + costTotal;
        } else {
        }
    };
    this.cost = function () {
        return this.number * this.price;
    };
}



var burger = new Item(10);
var pizza = new Item(7);
var chips = new Item(6);
var fish = new Item(7);



function addToOrder(item) {
    alert(item);
    list.push(item)
    alert(list)
}

