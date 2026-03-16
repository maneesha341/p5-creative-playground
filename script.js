let sketch;

function runCode(){

document.getElementById("error").innerText="";

try{

let code=document.getElementById("code").value;

if(sketch){
sketch.remove();
}

sketch=new p5(function(p){

let wrapped=`
with(p){
${code}
}
`;

let func=new Function("p",wrapped);

func(p);

},"canvas-container");

}

catch(e){

document.getElementById("error").innerText=e.message;

}

}

function loadExample(){

let selected=document.getElementById("exampleSelect").value;

document.getElementById("code").value=examples[selected];

}

function exportImage(){

let canvas=document.querySelector("canvas");

let link=document.createElement("a");

link.download="p5-art.png";

link.href=canvas.toDataURL();

link.click();

}

function fullscreenCanvas(){

let canvas=document.querySelector("canvas");

canvas.requestFullscreen();

}
