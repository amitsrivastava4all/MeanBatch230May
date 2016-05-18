/*
this is function constructor
*/
function Task(id, name, desc){
 this.id = id;
  this.name = name;
  this.desc = desc;
  this.completed = false;
}
Task.prototype.toggleTask=function(){
  this.completed = !this.completed;
}


var taskOperations={
  taskList:[],
  taskId : 1,
  addTask:function(name,desc){
    // Create Object of Task Prototype , also calling Function Constructor
    var task = new Task(this.taskId , name,desc);
    this.taskList.push(task);  // Store the task object in Array
    var oldId = this.taskId;
    this.taskId++;
    return oldId;
  },
  search:function(taskId){
    var sTaskId = -1;
    for(var i = 0; i<this.taskList.length; i++){
        sTaskId = this.taskList[i].id;
      if(sTaskId===taskId){
        this.taskList[i].toggleTask();
        break;
      }
    }
  },
  delete:function(){
    return this.taskList = this.taskList.filter(function(taskObject){
      return !taskObject.completed;
    });
    //return this.taskList;
  }

}
