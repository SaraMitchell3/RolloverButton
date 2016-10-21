var x = 400;
var y = 250;

function setup() {
  background(255);
  createCanvas(800, 500);

}

function draw() {

  background(255);

  // make it so that when mouse position >400 but <600, the screen goes black.
  // this is an extension of the code so that the background changes when the mouse is in the square.

  if (mouseX > x && mouseX < x + 50 && mouseY > y && mouseY < y + 50) {
    background(0);
  }

  fill(0, 255, 150);
  rect(x, y, 50, 50);

  if (mouseX > x && mouseX < x + 50 && mouseY > y && mouseY < y + 50 && mouseIsPressed) {
    fill(255, 0, 0);
    rect(x, y, 50, 50);
  }
}