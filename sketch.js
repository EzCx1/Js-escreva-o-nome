function setup() {
    createCanvas(700,700);
    background("gray");
  }
  
  function draw() {
    
    stroke("green");
    fill("black");
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
    rect(mouseX,mouseY,20,35);
    }
    
  }
