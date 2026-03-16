function saveSketch(){

let code=document.getElementById("code").value;

localStorage.setItem("p5sketch",code);

alert("Sketch saved");

}

function loadSketch(){

let code=localStorage.getItem("p5sketch");

if(code){

document.getElementById("code").value=code;

alert("Sketch loaded");

}

}
