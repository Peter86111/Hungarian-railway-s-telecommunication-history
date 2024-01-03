window.onload = function (){
  localStorage.setItem("switch", "true")
}

function myFunction(){
var element = document.body;

  if(localStorage.getItem("switch") == "true"){
  
      element.classList.toggle("light-mode");
      document.getElementById("swit").innerText = "Sötét mód";
      localStorage.setItem("switch", "false");

  }
  else{
    element.classList.toggle("light-mode");
    document.getElementById("swit").innerText = "Fényes mód";
    localStorage.setItem("switch", "true");
  } 
}
