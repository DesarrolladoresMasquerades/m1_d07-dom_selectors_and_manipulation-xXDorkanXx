console.log("JS Loaded");

const rootDiv = document.getElementById("cappuccino");
/*
// create and populate/fill the element
const rootH2 = document.createElement("h2");
rootH2.innerText = "To-do list";
rootH2.classList.add("main-subtitle");

// attach it to a parent
rootDiv.appendChild(rootH2);
*/

// create button element
const actionButton = document.createElement("button");
actionButton.innerText = "Add to-do";
actionButton.classList.add("action-btn");

function actionOnClick(event){
    console.log("button clicked", event);
};

function addToDoItem(text){
    const newToDo = document.createElement("li");
    newToDo.innerText = text;
    document.getElementById("items-list").appendChild(newToDo);
};

/*
function KeyboardEvent(

    if(event.keyCode === 13){
        const inputToDo = document.querySelector("[name='to-do-item']");
        inputToDo.addToDoItem(inputToDo.value);
        inputToDo.focus();
        inputToDo.value = "";
    }
);
*/

actionButton.addEventListener(
    "click",
    (event)=> {   //actionOnClick
        // console.log("button clicked", event);

        // we select an element from inside the action
        const inputToDo = document.querySelector("[name='to-do-item']");
        event.addToDoItem(inputToDo.value);
        inputToDo.focus();
        inputToDo.value = "";

    } 
);

rootDiv.appendChild(actionButton);




