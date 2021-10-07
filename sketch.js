let Red;
let Blue;

let button_1 = true;
let button_2;
let button_3;
let button_4;
let c;

function setup() {
    createCanvas(800, 1000);
    background(255);
    noStroke();
}

function draw() {
  fill(0, 0, 0);
  rect(0, 0, 200, 200);

  fill(225, 0 , 0);
  rect(0, 200, 200, 200);

  fill(200, 200, 200);
  rect(0, 400, 200, 200);

  fill(0, 0, 255);
  rect(0, 600, 200, 200);

  if (mouseX < width *0.25 && mouseY < height * 0.2) {
      if (mouseIsPressed){
          button_1 = true;
          button_2 = false;
          button_3 = false;
          button_4 = false;
      }
  }else if (mouseX < width * 0.25 && mouseY > height * 0.2 && mouseY < height * 0.6) {
      if (mouseIsPressed) {
          button_1 = false;
          button_2 = true;
          button_3 = false;
          button_4 = false;
      }
  }else if (mouseX < width * 0.25 && mouseY > height * 0.6 && mouseY < height * 0.8) {
    if (mouseIsPressed) {
        button_1 = false;
        button_2 = false;
        button_3 = true;
        button_4 = false;
    }
}else if (mouseX < width * 0.25 && mouseY > height * 0.8 && mouseY < height) {
    if (mouseIsPressed) {
        button_1 = false;
        button_2 = false;
        button_3 = false;
        button_4 = true;
    }
}else {
    if (mouseIsPressed){
        fill(c);
        ellipse(mouseX, mouseY, 32, 32);
    }
}
if (button_1){
    c = color(0, 0, 0);
}else if (button_2){
    c= color(225, 0, 0);
}else if (button_3){
    c = color(255, 255, 255);
}else if (button_4){
    c = color(0, 0, 255);
}
}