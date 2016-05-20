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
  document.getElementById("delete").addEventListener("click",deleteTask);
  document.getElementById("search").addEventListener("click",showSearch);
  document.getElementById('save').addEventListener('click', saveTask);
  document.getElementById('load').addEventListener('click', loadTask);
  document.getElementById('loadFromServer').addEventListener('click', loadFromServer);


});

function loadFromServer () {
  var xmlHTTPRequest = new XMLHttpRequest();
  xmlHTTPRequest.onreadystatechange = function() {
    if (xmlHTTPRequest.readyState == 4 && xmlHTTPRequest.status == 200) {
        taskOperations.taskList = xmlHTTPRequest.responseText;
       printTask(xmlHTTPRequest.responseText);
    }
  };
  xmlHTTPRequest.open("GET", "server.json", true);
  xmlHTTPRequest.send(null);
}

function loadTask(){
  if(window.localStorage){
    if(localStorage.tasks){
      taskOperations.taskList = JSON.parse(localStorage.tasks);
      printTask(JSON.parse(localStorage.tasks));

    }
    else{
      alert("No Task in Memory....");
    }
  }
  else{
    alert("This Browser Doesn't Support LocalStorage...");
  }
}

function saveTask(){
  if(window.localStorage){
    var json = JSON.stringify(taskOperations.taskList);
    localStorage.tasks = json;
    alert("Data Saved...");
  }
  else
  {
    alert("This Browser Doesn't Support LocalStorage...");
  }
}

function showSearch(){
  document.getElementById('searchTxtSpan').style.display = 'block';
  document.getElementById('searchTxt').addEventListener('keyup',freeSearch);
}

function freeSearch () {

  printTask(taskOperations.freeSearch(this.value));
}
function validate(htmlElement){
  if(htmlElement){  // Truthy
    htmlElement = htmlElement.value;
  }
  else{
    htmlElement=false;
  }
  return htmlElement;
}

function deleteTask(){
  document.getElementById("taskDataList").innerHTML="";
  //var taskList = taskOperation.delete();
  //print(taskList);
  printTask(taskOperations.delete());
}
function printTask(taskList){
  printCount();
  var ul = document.getElementById("taskDataList");
  ul.innerHTML="";
  taskList.forEach(function(taskObject){
    var li = document.createElement("li");
    li.innerHTML = taskObject.id+" "+taskObject.name+" "+taskObject.desc;
    if(taskObject.completed){
      li.className = "completed";
    }
    else{
      li.className = "pending";
    }
    li.addEventListener("click",toggleTask);
    ul.appendChild(li);
  });
}
function printCount(){
  document.getElementById('countCompleted').innerHTML="Completed:: "+taskOperations.countCompleted();
document.getElementById('countPending').innerHTML = "Pending:: "+taskOperations.countPending();

}
function toggleTask(event){
  //console.log("Source Element is ",event.srcElement);
  event.srcElement.classList.toggle("completed");
  var array=event.srcElement.innerHTML.split(" ");
  taskOperations.search(parseInt(array[0]));
  printCount();
  // New Version of this Code (HTML5)
  // This Code is Older Version
  /*console.log("this is ",this.className);
  if(this.className==="pending"){
    this.className = "completed";
  }
  else
  {
    this.className = "pending";
  }*/
}

function addTask(){

  var taskName = document.getElementById("taskName");
  var taskDesc = document.getElementById("taskDesc");
  if(validate(taskName) && validate(taskDesc)){
      var ul = document.getElementById("taskDataList");
      var li = document.createElement("li");  // this is the way to create HTML Element Dynamically
      var taskId = taskOperations.addTask(taskName.value,taskDesc.value);
      li.innerHTML = taskId + " " +taskName.value + " "+taskDesc.value;
      li.className = "pending";
      ul.appendChild(li);

      li.addEventListener("click",toggleTask);
      printCount();

  }
  else{
    console.log("Check the HTMLElement ID it is Incorrect ....");
    alert("Can't Add Contact to System Vendor...");
  }
    console.log("TaskName "+taskName+" TaskDesc "+taskDesc);
}
