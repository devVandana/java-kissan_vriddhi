var user = "";
var click = "clicked";
var customer = "CustomerDB4";
// alert("JavaScript initalized");

function checkingFunction(){
	console.log(user);
	// document.getElementById("id").innerHTML(uname);
	// return user;
	console.log(click);
	// alert(click);
}

function  JsonStringToHashMap(){
	// alert("called");
	var CredentialsDB = new Map();
	let DBString = String(JSON.parse(String(localStorage.getItem(customer))));
	console.log(DBString);
	// var DBarray = new Array(); 
	const DBarry = DBString.split(" ");
	console.log(DBarry);
	for(var i=0;i<DBarry.length;i++){
		CredentialsDB.set(DBarry[i],DBarry[i+1]);
	}
	return CredentialsDB; 
}

function Check(){

}

//For storing the json strings (convertor)
function store(uname, pass){
	//localStorage.clear();
	// var uname = document.getElementById("uname").value;
	// var pass = document.getElementById("pswd").value;
	var ExisitingDb = String(JSON.parse(localStorage.getItem(customer)));
	var JsonStringToStore;
	if(ExisitingDb == 'null'){
		JsonStringToStore = String(uname+ " " + pass);
	}
	else{
		JsonStringToStore =String(String(ExisitingDb) + " " + uname + " " + pass);
	}
	console.log(JsonStringToStore);
	localStorage.setItem(customer,JSON.stringify(JsonStringToStore));
	console.log(JsonStringToHashMap());

}


function Login(){
	var uname = document.getElementById("uname").value;
	var pass = document.getElementById("pswd").value;
	if(uname == "" || pass == ""){
		alert("Either username or password is empty , please provide");
	}
	else{
		var DB = JsonStringToHashMap();
		console.log(DB);
		if( DB.has(uname)){
			if(pass == DB.get(uname))
			{
			  user = uname;
			  alert("Login is successful ");
			  window.location.href = "Customer.html";
			  localStorage.setItem("username",JSON.stringify(uname));
			}
			else{
				alert("Password is incorrect");
			}
		}
		else{
			alert("username with this name doesnt exist");
		}
		// store(uname,pass);
		// alert("here");
	}
}

function Signup(){
	var uname = document.getElementById("uname").value;
	var pass = document.getElementById("pswd").value;
	if(uname == "" || pass == ""){
		alert("Either username or passwod is invalid , please provide");
	}
	else{
		DB = JsonStringToHashMap();
		if(DB.has(uname)){
			alert("The user with this username already exist , please try a differentusername");
		}
		else{
			store(uname,pass);
			alert("Signup is successful");
		}
	}

}


function move(){
	let id = null;
	const elem = document.getElementById("moveright");
	elem.style.color = "#ffffff";
	console.log(elem);
	let pos =0;
	clearInterval(id);
	id = setInterval(frame,0.1);
	function frame(){
		if(pos>300){
			clearInterval(id);
		}else{
			pos++;
			console.log(elem.style.left);
			elem.style.marginLeft = pos + "px";
			pos = pos+ 10;
		}
	}
}







