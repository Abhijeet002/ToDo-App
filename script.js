const inputBox = document.getElementById("input-box")                                     
const listContainer = document.getElementById("list-container")            

function addTask(){          //creating and adding task in the list
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    showTask();    //calling the functions everytime when a change occcurs


}

listContainer.addEventListener("click", function(e){
    // checking or unchecking the listItem
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();     //calling the functions everytime when a change occcurs

    }

// deleting the listItem
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        showTask();
        //calling the functions everytime when a change occcurs
    }
    
}, false);

// save the data on local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// show saved data from localStorage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
 