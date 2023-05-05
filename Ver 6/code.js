var list = [];
var costTotal = 0

function Item(myName,itemPrice) {
    this.name = myName;
    this.number = 0;
    this.price = itemPrice;
    this.addItem = function () {
        this.number ++;
        costTotal += this.price;
        document.getElementById("cost").innerHTML = "Price: " + costTotal;
        updateItems();
    }; 
    this.removeItem = function () {
        if (this.number > 0) {
            this.number --;
            costTotal -= this.price;
            document.getElementById("cost").innerHTML = "Price: " + costTotal;
            updateItems();
        } else {
        }
    };
    this.cost = function () {
        return this.number * this.price;
    };
}

var burger = new Item("burger",10);
var pizza = new Item("pizza",7);
var chips = new Item("chips",6);
var fish = new Item("fish",7);
var chicken = new Item("chicken",8);
var menuItems = [ burger,pizza,chips,fish,chicken]

function updateItems(){
    document.getElementById("items").innerHTML = "";
    var i=0
    while(menuItems[i]) {
        document.getElementById("items").innerHTML += menuItems[i].name + " " + menuItems[i].number + "<br>";
        i++
    }
    
}

function addToOrder(item) {
    alert(item);
    list.push(item)
    alert(list)
}

