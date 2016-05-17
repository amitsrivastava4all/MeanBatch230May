/*
this is function constructor
*/
function Task(name, desc){
  this.name = name;
  this.desc = desc;
}

var taskOperations={
  taskList:[],
  addTask:function(name,desc){
    // Create Object of Task Prototype , also calling Function Constructor
    var task = new Task(name,desc);
    this.taskList.push(task);  // Store the task object in Array
  }
}
