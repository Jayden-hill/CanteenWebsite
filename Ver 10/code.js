var list = [];
var costTotal = 0;
var menuCheck = false;

/*
function colorOverlays(){
    var i=0   
    while (i <= 1) {
        var overlayColor = document.getElementById("thing" + i);
        overlayColor.style.backgroundColor = "green";
        console.log(i);
        i++;
    }
}

colorOverlays();
*/

//This generates a class for each item and does the order and cost listing
function Item(myName,itemPrice) {
    this.name = myName;
    this.number = 0;
    this.price = itemPrice;
    //this adds items to the total price and order
    this.addItem = function () {
        if(this.number == 10) {
            return
        } else {
            this.number ++;
            costTotal += this.price;
            document.getElementById("cost").innerHTML = "Price: $" + costTotal;
            updateItems();
            //make overlay turn green when clicked then normal
        }
       
    }; 
    //this removes items to the total price and order
    this.removeItem = function () {
        if (this.number > 0) {
            this.number --;
            costTotal -= this.price;
            document.getElementById("cost").innerHTML = "Price: $" + costTotal;
            updateItems();
            //make overlay turn red when clicked then normal
        } else {
        }
    };
    //calculates the total price for one item
    this.cost = function () {
        return this.number * this.price;
    };
}
//If adding a food add too both of these
    //===========================================================================
        //var list of all items and prices
        var burger = new Item("burger",10);
        var pizza = new Item("pizza",7);
        var chips = new Item("chips",6);
        var fish = new Item("fish",7);
        var chicken = new Item("chicken",8);
        var smoothie = new Item("smoothie",5);

        //menuItems is list for all the items to be displayed 
        var menuItems = [ burger,pizza,chips,fish,chicken,smoothie]
    //===========================================================================

//writes the items wanted to the order form
function updateItems(){
    document.getElementById("items").innerHTML = "";
    var i=0;
    while(menuItems[i]) {
        document.getElementById("items").innerHTML += " " + menuItems[i].name + " " + menuItems[i].number + " " + "<br>";
        i++
    }
}

/*unused code 
function addToOrder(item) {
    alert(item);
    list.push(item)
    alert(list)
}*/

//check is for making sure that the form is filled out correctly
function check(data, condition) {
    if(data.value.length < condition) {
        alert("Form is not filled out correctly");
        return false
    } else { 
        return true
    }
}

//order is for making sure that the order form is filled out correctly
function order() {
    menuCheck = false;
    var orderName = document.getElementById ("orderName");
    var className = document.getElementById ("className");
    var email = document.getElementById ("email");
    var items = "";
    var i=0
    if (check(email, 6) && check(className, 2) && check(orderName, 3)) {

    } else {
        return
    }
    while(menuItems[i]) {
        if(menuItems[i].number > 0) {
            items += menuItems[i].number + " " + menuItems[i].name + " ";
            menuCheck = true;
            i++
        } else {
            i++ 
        }
    } 
    if(menuCheck == false) {
        alert("No food is being ordered")
       return 
    }
    //populates the email 
    window.open("mailto:" + "jayden.hill@inglewoodhs.school.nz" + 
    '?cc=' + 'nobody@nowhere.com' + 
    '&subject=' + "My name is " + orderName.value + " and I would like " + items + "please." + 
    '&body=' + "My email address is " + email.value + " I want my food delivered to class " + className.value + "." );
}