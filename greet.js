// Now We Are Binding Events on JavaScript,
// Eariler Binding of Events in HTML e.g. onclick =greet(); // Bad Way
// HTMLContains JavaScript Code (SRP) - Single Rep Pr
window.addEventListener("load",init);

function init(){
  
  document.getElementById("greet").addEventListener("click",greet);
}



/*
This is Function Decleration
*/
function greet(){
  // DOM Manipulation
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;

  document.getElementById("greetmsg").innerHTML = initCap(firstName) +"  " +initCap(lastName);
}
function initCap(str){
  return str.charAt(0).toLocaleUpperCase() + str.substring(1).toLocaleLowerCase();
}
