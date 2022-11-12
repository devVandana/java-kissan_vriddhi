let tasks1=['Rice','Cell wall polysaccharides','MCPA 750 Herbicide'];
			listTask1();
			dropdown1();
            
            function listTask1(){
				let results1 ="<ol>";
				for(let i=0;i<tasks1.length;i++){
					results1 += "<li>" + tasks1[i] + "</li>";
				}
				results1 += "</ol>";
				document.getElementById("pest").innerHTML = results1;

			}
            
            function addPest(){
				let addPest = document.getElementById("addpes").value;
				tasks1.push(addPest);
				document.getElementById("addpes").value="";
				listTask1();
            	dropdown1();

			}
            
            function dropdown1(){
				let opt1="";
				for(let i=0;i<tasks1.length;i++){
					opt1 += "<option>" + tasks1[i] + "</option>";
				}
				console.log(opt1);

				document.getElementById("taskDropdown1").innerHTML = opt1;

			}
            
            function deletetask4(){
				let task1=document.getElementById("taskDropdown1").value;
				for(let i=0;i<tasks1.length;i++){
					if(task1==tasks1[i])
						tasks1.splice(i,1);
				}
				listTask1();
				dropdown1();
			}
            
            function deletePest(){
				let task1=document.getElementById("taskDropdown1");
				tasks1.splice(task1.selectedIndex,1);

				listTask1();
				dropdown1();
			}