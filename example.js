const examples={

circle: `function setup(){
createCanvas(400,400);
}

function draw(){
background(200);
circle(mouseX,mouseY,50);
}`,

bounce: `let x=200;
let speed=3;

function setup(){
createCanvas(400,400);
}

function draw(){
background(220);
x+=speed;

if(x>width || x<0){
speed*=-1;
}

circle(x,200,40);
}`,

art: `function setup(){
createCanvas(400,400);
background(0);
}

function draw(){
fill(random(255),random(255),random(255));
circle(random(width),random(height),random(50));
}`
};
