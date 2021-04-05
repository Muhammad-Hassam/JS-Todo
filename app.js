var input=document.getElementById("mainInput");
var list;

// main function of add button

function todoList(){
var listDiv=document.getElementById("listDiv");
var div=document.createElement("div");
div.setAttribute("id","div")
listDiv.appendChild(div);
list=document.createElement("li");
var dltbutton=document.createElement("button");
dltbutton.setAttribute("onclick","deletebtn(index)");
var buttonTextDlt=document.createTextNode("Delete");
var edtbutton=document.createElement("button");
var buttonTextEdt=document.createTextNode("Edit");
edtbutton.setAttribute("onclick","editbtn()")
list.setAttribute("id","listData");
div.appendChild(list);
dltbutton.appendChild(buttonTextDlt);
edtbutton.appendChild(buttonTextEdt);
div.appendChild(edtbutton);
div.appendChild(dltbutton);

if(input.value===""){
    alert("Enter your shedule")
    var liData=document.getElementById("div");
    liData.remove();
}
else{
    list.innerHTML=input.value;
    input.value="";
}
}

// function for deleteall button

function deleteAll(){
    var divData=document.getElementById("listDiv");
    divData.innerText="";
}

// function for delete button

function deletebtn(){
    var liData=document.getElementById("div");
    liData.remove(liData);
}

// function for edit button

function editbtn(){
   var edit=prompt("Update your shedule");
   list.innerHTML=edit;
}