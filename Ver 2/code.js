list=[]

var burger = {
    number:0,
    price:10,
    addItem:function(){
        this.number ++;
        alert (this.number);
        alert ("$" + this.cost());
    },
    removeItem:function(){
        if (this.number > 0){
            this.number --;
            alert (this.number);
            alert ("$" + this.cost());
        } else {

        }
    },
    cost:function(){
        return this.number*this.price;
    }
}

function addToOrder (item){
    alert(item);
    list.push(item)
    alert(list)
}