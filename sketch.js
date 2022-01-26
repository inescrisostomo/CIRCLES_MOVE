a=0; 
diametro=300


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  background(0);


}

function draw() {
  
  background("rgba(0,0,0,0.01)"); 
  a++;
  fill("rgba(0, 0, 0, 0)");
  stroke("rgba(255, 179, 15, 0.5)");
  ellipse(windowWidth/2,windowHeight/2, diametro+(sin(a/3)*150),diametro+(sin(a/10)*150));

} 