// JavaScript Document


function saveItem(){
	var name = document.forms.ShoppingList.name.value;
	var data = document.forms.ShoppingList.data.value;
	localStorage.setItem(name, data);
	showAll();
}


function modifyItem(){
	var name = document.forms.ShoppingList.name.value;
	 document.forms.ShoppingList.data.value = localStorage.getItem(name);
	localStorage.getItem(name);
	showAll();
}


function removeItem(){
	var name = document.forms.ShoppingList.name.value;
	 document.forms.ShoppingList.data.value = localStorage.removeItem(name);
	 localStorage.removeItem(name);
	showAll();
}





function clearAll(){
	localStorage.clear();
	showAll();
}


function showAll(){
	if (checkBrowser()) {
		var key = "";
		var list = "";
		var i=0;
		for (i=0; i<localStorage.length - 1; i++){
			key = localStorage.key(i);
			list += "<tr><td>" key + "</td>\n<td>" localStorage.getItem(key) + "</td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	}else{
		alert("Cannot store shopping list.Your browser does not support local storage")
	}
	
	
}





function checkBrowser(){
	if('localStorage' in window && window ['localStorage'] !== null){
		//we can use local storage
		console.log ('local storage works');
		return true;
	}else{
		return false;
	}
	}
