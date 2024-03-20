var input = document.getElementById("input");
var detail = document.getElementById("detail");


function task(){
    if(input.value != ""){
        detail.innerHTML += `<li onclick="gone(this)" id="set"> ${input.value} <button id="show1">Remove</button></li>`;
        input.value = "";

    }else{
      userName =  prompt("enter your name");
    }
    
     
}
function gone (element){
    element.style.display="none";
}