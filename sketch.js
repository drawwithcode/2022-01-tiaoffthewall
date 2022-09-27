function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);  
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  noStroke();
  frameRate(10);
 
  fill(random(255), random(255), random(255));
  //draw a rectangle
  let x = random(width);
  let y = random(height);

  let rWidth = random(width);
  let rHeight = random(height);
  drawingContext.filter = 'blur(300px)';
  console.log('Frame rate: '+frameRate());
  rect(x, y, rWidth, rHeight, 40, 80, 90); 
  
}
  

