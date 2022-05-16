// JavaScript Document

'use strict';

function saveItem() {
	let name = document.forms.ShoppingList.name.value;
	let data = document.forms.ShoppingList.data.value;
	localStorage.setItem(name, data);
	showAll();
}


function modifyItem() { 
	let name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = localStorage.getItem(name);
	localStorage.getItem(name);
	showAll();
}


function removeItem() {
	let name = document.forms.ShoppingList.name.value;
	 document.forms.ShoppingList.data.value = localStorage.removeItem(name);
	 localStorage.removeItem(name);
	showAll();
}





function clearAll() {
	localStorage.clear();
	showAll();
}






function checkBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null){
		//we can use local storage
		console.log('local storage works');
		return true;
	} else  {
		return false;
	}
}


function showAll(){ 
	if(checkBrowser()){ 
		let key=""; 
		let list=""; 
		let i 
		for 
			(i = 0;
			 	i < localStorage.length;
			 	i++){ 
					key=localStorage.key(i); 
					list+="<tr><td>"+key+"</td><td>"+localStorage.getItem(key)+"</td></tr>" 
				} 
				document.getElementById("list").innerHTML="<tr><th>Item</th><th>Quality</th></tr>"+list } 
					else{ 
						alert("Can't store shopping list.Your browser doesn't support local storage.");
				} 
}


