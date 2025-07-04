
//selecting add button and input 

function add(){
    var addTask=document.getElementById("addbtn");
    var input=document.getElementById("task-input");
    var taskText=input.value.trim();
    if(taskText==="") return;

// create div to show all list 
var Taskdiv=document.createElement("div");
Taskdiv.className="tasks";

//show list of task
 var span=document.createElement("span");
span.innerText=taskText;

//create div to store icons
var icons=document.createElement("div");
icons.className="Icons";

//edit icon
var editbtn=document.createElement("button");
editbtn.className="edit-icon";
editbtn.innerHTML="✏️";
editbtn.onclick=()=>{
   var edit=prompt("Edit:",span.innerText);
   if(edit !==null && edit.trim()!==""){
    span.innerText=edit;
   }
}

//create delete
var deletebtn=document.createElement("button");
deletebtn.className="delete-icon";
deletebtn.innerHTML="🗑️";
deletebtn.onclick=()=>{
    Taskdiv.remove();
};

//create up
var upbtn=document.createElement("button");
upbtn.className="up-icon";
upbtn.innerHTML="⬆️";
upbtn.onclick=()=>{
    var prev=Taskdiv.previousElementSibling;
    if(prev){
        Taskdiv.parentNode.insertBefore(Taskdiv,prev);
    }
};

//create down
var downbtn=document.createElement("button");
downbtn.className="down-icon";
downbtn.innerHTML="⬇️";
downbtn.onclick=()=>{
    var next=Taskdiv.nextElementSibling;
    if(next){
        Taskdiv.parentNode.insertBefore(next,Taskdiv);
    }
}

//append a icon to icons
icons.appendChild(editbtn);
icons.appendChild(deletebtn);
icons.appendChild(upbtn);
icons.appendChild(downbtn);


Taskdiv.appendChild(span);

//append icons to taskdiv
Taskdiv.appendChild(icons);

document.getElementById("taskContent").appendChild(Taskdiv);
//to clear input 
input.value="";
}


