

			var Farmers = new Array();
			var FarmersMap = new Map();

			var Customers = new Array();
			var CustomerMap = new Map();

			function FarmerLogin() {
			  alert("clicked");
			  let username = document.getElementById("uname").value;
			  let Password = document.getElementById("pswd").value;


			  console.log("check");
			  console.log(username +" " + Password);
			  console.log(FarmersMap[Password]);
			  console.log("check");

              console.log(Farmers.includes(username));
              console.log(FarmersMap.get(username));

              var farmidpass =  JSON.parse(localStorage.getItem("farmerid"));
              console.log(farmidpass);
			  if((username == "farmer" && Password == "farmerpswd") || ((farmidpass.includes(username) == true) && farmidpass.get(username) == Password )){
				alert("successfully logged in as Farmer");
                localStorage.setItem("username",JSON.stringify(username));
				window.location.href="Farmer.html";
			  }
			  else{
				alert("Wrong password");
			  }
				

			}


			function CustomerLogin() {
			  alert("clicked");
			  let username = document.getElementById("uname").value;
			  let Password = document.getElementById("pswd").value;
			  if(username == "customer" && Password == "customerpswd" || ((Customers.includes(username) == true) && CustomerMap.get(username) == Password )){
				alert("successfully logged in as Farmer");
				window.location.href="Customer.html";
			  }
			  else{
				alert("Wrong password");
			  }
				

			}


			function signupFarm(){
			  alert("clicked");
			  let username = document.getElementById("uname").value;
			  let Password = document.getElementById("pswd").value;
			  let safety = document.getElementById("safety").value;
			  console.log(username);
			  console.log(Password); 
			  if(username == "" || Password == ""){
					alert("Empty username or password");
			  }
			  if(safety == "FARM22"){
					console.log(Farmers.includes(username));
					if(Farmers.includes(username)  == false){
					Farmers.push(username);
					FarmersMap.set(username,Password);
					console.log(username+" "+Password);
					console.log(FarmersMap.get(username));
					alert( username + " created successfully");
                    var storedlist = JSON.parse(localStorage.getItem("farmerlist"));
                    storedlist.push(username);
                    localStorage.setItem("farmerlist",JSON.stringify(storedlist));

                    var farmidpass =  JSON.parse(localStorage.getItem("farmerid"));
                    farmidpass.put(username,Password);
                    localStorage.setItem("farmerid",JSON.stringify(farmidpass));

					}
					else{
						alert("Error the username with the folowing username already exist , please try again");
					}
			  }
			  else{
				alert("Wrong Safety code please try with correct credentials");
			  }

			}


			function signupCust(){
			  alert("clicked");
			  let username = document.getElementById("uname").value;
			  let Password = document.getElementById("pswd").value;
			  let safety = document.getElementById("safety").value;
			  console.log(username);
			  console.log(Password); 
			  if(username == "" || Password == ""){
					alert("Empty username or password");
			  }
			  if(safety == "CUST22"){
					console.log(Farmers.includes(username));
					if(Customers.includes(username)  == false){
					Customers.push(username);
					CustomerMap.set(username,Password);
					console.log(username+" "+Password);
					console.log(FarmersMap.get(username));
					alert( username + " created successfully");
                    var storedlist = JSON.parse(localStorage.getItem("customerlist"));
                    storedlist.push(username);
                    localStorage.setItem("farmerlist",JSON.stringify(storedlist));
					}
					else{
						alert("Error the username with the folowing username already exist , please try again");
					}
			  }
			  else{
				alert("Wrong Safety code please try with correct credentials");
			  }

			}


		