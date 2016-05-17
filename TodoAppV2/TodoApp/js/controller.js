/*
Controller is used to take the data from UI and give it to Model (Business Logic)
and then Take the Process result from Model and Give it back to UI
Controller is a Glue B/W UI and Model
UI - User Interface
MVC - M - Model  , V - View , C- Controller
MVC - It is a Design Pattern  or Arch
What is Design Pattern
It is the Best Practice which comes from Industry
*/
//window.addEventListener("DOMContentLoaded",init);
//window.addEventListener("load",init2);
/*function init(){
  alert("I am Called when DOM (HTML) is Loaded...");
}
function init2(){
  alert("I am Called When Page(HTML,CSS, JS , Images, Audio, video) is Loaded...");
}*/
/*
Controller is used for DOM things B/W UI and Model
*/
window.addEventListener("DOMContentLoaded",function (){  // Anonymous Function
  document.getElementById("add").addEventListener("click",addTask);
});

function validate(htmlElement){
  if(htmlElement){  // Truthy
    htmlElement = htmlElement.value;
  }
  else{
    htmlElement=false;
  }
  return htmlElement;
}

function addTask(){
  var taskName = document.getElementById("taskName");
  var taskDesc = document.getElementById("taskDesc");
  if(validate(taskName) && validate(taskDesc)){
      var ul = document.getElementById("taskDataList");
      var li = document.createElement("li");  // this is the way to create HTML Element Dynamically
      li.innerHTML = taskName.value + " "+taskDesc.value;
      ul.appendChild(li);
      taskOperations.addTask(taskName.value,taskDesc.value);


  }
  else{
    console.log("Check the HTMLElement ID it is Incorrect ....");
    alert("Can't Add Contact to System Vendor...");
  }
    console.log("TaskName "+taskName+" TaskDesc "+taskDesc);
}
