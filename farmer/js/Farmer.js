

var FarmersMap = new Map();
var FaremerObj = [];
var FarmerProduct = new Map();
window.list = [];

var i = 0;

function Logout(){
    alert("Logged out");
    localStorage.setItem("username",JSON.stringify(null));
    location.reload();
}

function checker(username) {
    var storedlist = JSON.parse(localStorage.getItem("farmerlist"));
    if(username==null){
        return false;
    }
    
    if(storedlist.includes(username) == false){
        return false;
    }
    return true;

}
class Product{
    constructor(Farmername,name,quantity,price,location,contact,age){
        this.FarmerName = Farmername;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.location = location;
        this.contact = contact;
        this.age = age;
        console.log(age);
    }
    
}
class Farmer{
    constructor(Name,mail,place,num,prod){
        
        FaremerObj.push(this);
        FarmersMap.set(Name,this);
        FarmerProduct.set(Name,prod);
        this.name = Name;
        this.mail = mail;
        this.place = place;
        this.num = num;
        var product = prod;
        FarmerProduct.set(Name,prod);
        list.push(prod);
        console.log(i);

    
    }
     
    setterprod(Name,Prod){
        FarmerProduct.set(Name,Prod);
        console.log(Prod);
        list.push(Prod);
         
    }
    

}


function sub(){
    
    var i1 = document.getElementById("1").value;
    var i2 = document.getElementById("2").value;
    var i3 = document.getElementById("3").value;
    var i4 = document.getElementById("4").value;

    var name = document.getElementById("FarmerName").value;
    i1 = name;
    var n = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    var location= document.getElementById("location").value;
    var contact = document.getElementById("contact").value;
    var age = document.getElementById("age").value;
    var product1 = new Product(i1,n,quantity,price,location,contact,age);

    if(FarmersMap.has(i1)== false && FarmerName!=""){
        var far = new Farmer(i1,i2,i3,i4,product1);
    }
    else{
        var f = FarmersMap.get(i1);
        f.setterprod(i1,product1);
    }

    localStorage.setItem("list",JSON.stringify(list));

    var storedlist = JSON.parse(localStorage.getItem("list"));
    console.log(storedlist);

    console.log(FarmersMap.get(i1));
    console.log(FarmerProduct);
    console.log(list);
    
}


