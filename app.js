window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");
	let completedItems = document.getElementById("completedItems");

	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Add Task") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Add Task";
		document.getElementById("item").value = "";

		document.getElementById("lblsuccess").innerHTML
			= "Text edited successfully";

		document.getElementById("lblsuccess")
						.style.display = "block";

		setTimeout(function() {
			document.getElementById("lblsuccess")
							.style.display = "none";
		}, 3000);

		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		{
			document.getElementById("lblsuccess").innerHTML
				= "Please enter some data!";
			
			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);

			return false;}
	else
		document.getElementById("item").value = "";

	let li = createMainLiTaskElement(newItem)
	li.appendChild(createTaskButtons());
	
	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML
				= "Text deleted successfully";

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);
		}
	}

    if (e.target.classList.contains("comp")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode.parentNode;
			li.removeChild(li.childNodes[1])
			completeTask(li.innerText)
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML
				= "Successfully Marked as Completed!";

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);
		}
	}

	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}

function completeTask(innerText){	
	let li = createMainLiTaskElement(innerText)
	completedItems.appendChild(li);
}

function createTaskButtons(){
	let actions = document.createElement("div");
	actions.className = "flex-grow-0 flex-shrink-0 align-self-start";

	let deleteButton = document.createElement("button");

	deleteButton.className =
		"btn-danger btn btn-sm mr-2 delete";

	deleteButton.appendChild(document.createTextNode("Delete Task"));

    let compButton = document.createElement("button");

	compButton.className =
		"btn-success btn btn-sm mr-2 comp";

	compButton.appendChild(document.createTextNode("Mark as Complete"));

	let editButton = document.createElement("button");

	editButton.className =
			"btn-warning btn btn-sm mr-2 edit";

	editButton.appendChild(document.createTextNode("Edit Task"));

	

	actions.appendChild(deleteButton);
	actions.appendChild(editButton);
  	actions.appendChild(compButton);

	  return actions;
}

function createMainLiTaskElement(taskText){
	let li = document.createElement("li");
	li.className = "list-group-item d-flex flex-row align-items-center justify-content-between flex-sm-wrap";	
	li.appendChild(document.createTextNode(taskText));
	return li
}

