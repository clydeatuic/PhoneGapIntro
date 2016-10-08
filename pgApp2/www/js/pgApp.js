var pgApp = document.getElementById("pgApp");
var html = "Code in javascript";
pgApp.innerHTML = html;

var students = [
			{"fname":"Clyde", "lname":"Balaman"},
			{"fname":"Ariane", "lname":"Ang"}
		];

pgApp.innerHTML += renderPage();
updateStudentList(students);

function renderPage(){
	var h = "";

	h += "<div>";
	h += "<input id='txtFname' type='text' placeholder='Firstname' />";
	h += "<input id='txtLname' type='text' placeholder='Lastname' />";
	h += "<button onclick='addStudentList(students)'>Add</button>";
	h += "</div>";

	h += "<table border='1'>";
	h += "<thead><tr><th>Firstname</th><th>Lastname</th></tr></thead>";
	h += "<tbody id='studentList'></tbody>";
	h += "</table>";
	return h;
}

function updateStudentList(students){
	var h = "";
	for(var i=0;i<students.length;i++){
		h += "<tr>";
		h += "<td>"+students[i].fname+"</td>";
		h += "<td>"+students[i].lname+"</td>";
		h += "</tr>";
	}	
	var tableContainer = document.getElementById("studentList");
	tableContainer.innerHTML = h;
}

function addStudentList(students){
	var fname = document.getElementById("txtFname");
	var lname = document.getElementById("txtLname");

	students.push({"fname":fname.value,"lname":lname.value});
	updateStudentList(students);
}


// "use strict"

// class Student{
// 	constructor(){
// 		this.info = [
// 			{"fname":"Clyde", "lname":"Balaman"},
// 			{"fname":"Ariane", "lname":"Ang"}
// 		];		
// 	}
// 	getInfo(){
// 		return this.info;
// 	}	
// 	addStudent(){
// 		let fname = document.getElementById("txtFname");
// 		let lname = document.getElementById("txtLname");

// 		this.info.push({"fname":fname.value,"lname":lname.value});
// 		this.render();
// 	}
// 	render(){
// 		let students = this.getInfo();		
// 		let content = `
// 			<tr>
// 				<th>Firstname</th>
// 				<th>Lastname</th>
// 			</tr>
// 		`;
// 		for(let i=0;i<students.length;i++){
// 			content += `
// 				<tr>
// 					<td>${students[i].fname}</td>
// 					<td>${students[i].lname}</td>
// 				</tr>
// 			`;
// 		}

// 		let table = document.getElementById("studentList");
// 		table.innerHTML = content;
// 	}
// }


// let sObj = new Student();
// let pgApp = document.getElementById("pgApp");
// let html = `
// 	<div>
// 		<input id="txtFname" type="text" placeholder="Firstname"/>
// 		<input id="txtLname" type="text" placeholder="Lastname"/>
// 		<button onclick="sObj.addStudent()">Add</button>
// 	</div>
// 	<table id="studentList" border="1"></table>
// `;
// pgApp.innerHTML = html;
// sObj.render();