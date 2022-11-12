let sortDirection = false;
	let list = [];
	var storedlist = JSON.parse(localStorage.getItem("list"));
    console.log(storedlist);
	list = storedlist;
	console.log(list);

 	window.onload = () => {
 		loadTableData(list);
 		move();
 		moveUp();
 	};

	function loadTableData(tableData){
		const tableBody = document.getElementById('tableData');
		let dataHTML = '';
		for(let data of tableData){
			console.log(data);
			console.log(data['name']);
			const age = data['age'];
			console.log("age is" + age);


			console.log('here');
			dataHTML += `<tr><td>${data.FarmerName}</td><td>${data.age}</td>
				<td>${data.contact}</td>
				<td>${data.location}</td>
				<td>${data.name}</td>
				<td>${data.price}</td>
				<td>${data.quantity}</td>
			</tr>`
		}
		console.log(dataHTML);
		tableBody.innerHTML = dataHTML;
	}





	function move(){
	let id = null;
	const elem = document.getElementById("heading");
	// elem.style.color = "#ffffff";
	console.log(elem);
	let pos =0;
	clearInterval(id);
	id = setInterval(frame,0.1);
	function frame(){
		if(pos>500){
			clearInterval(id);
		}else{
			pos++;
			console.log(elem.style.left);
			elem.style.marginLeft = pos + "px";
			pos = pos+ 10;
		}
		}
	}




	function moveUp(){
	let id = null;
	const elem = document.getElementById("table");
	// elem.style.color = "#ffffff";
	console.log(elem);
	let pos = 400;
	clearInterval(id);
	id = setInterval(frame,0.1);
	function frame(){
		if(pos < 11){
			clearInterval(id);
		}else{
			pos++;
			console.log(elem.style.left);
			elem.style.marginTop = pos + "px";
			pos = pos-10;
		}
		}
	}