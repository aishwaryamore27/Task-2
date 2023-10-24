const inputBox = Document.getElementById("input-box");
const listContainer = Document.getElementById("list-contanier");

function addTask(){
    if(inputBox.value === '');{
    
     alert("You must write something!");

}
else{
     let li = document.createElement("li");
     li.innerHTML = inputBox.value;
     listContainer.appendchild(li);
     let span = document.createElement("span");
     span.innerHTML = "\u00d7";
     li.appendChild(span);


    }
    inputBox.value = "";
    saveData();

}
listContainer.addEventListner("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagNAme === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
}, fa
false);
 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

 }
 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();   

