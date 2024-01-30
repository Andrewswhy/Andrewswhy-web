var canvas_x = 16*50;
var canvas_y = 9*50;
var count_x = 0;
var count_y = 150;
var direction_x = 1; // Direction variable to control movement direction
var direction_y = 1;

function setup() {
  createCanvas(canvas_x, canvas_y);
}

function draw() {
  background(0);
  
  var x = 0 + count_x;
  var y = 0 + count_y;
  
  // Move the rectangle to the right if x + count is less than canvas_x
  // Move the rectangle to the left if x + count is greater than canvas_x
  count_x += 1.5 * direction_x;
  count_y += 1.5 * direction_y;


  if (count_x >= canvas_x - 200) {
    // If the rectangle exceeds the right edge of the canvas
    direction_x = -1;// Change direction to move left
    fill(color(143,61,144))
  } else if (count_x <= 0) {
    // If the rectangle exceeds the left edge of the canvas
    direction_x = 1; // Change direction to move right
    fill(color(52,165,105))
  }
  
  if (count_y >= canvas_y - 75) {
    // If the rectangle exceeds the right edge of the canvas
    direction_y = -1; // Change direction to move left
    fill(color(94,17,17))
  } else if (count_y <= 0) {
    // If the rectangle exceeds the left edge of the canvas
    direction_y = 1; // Change direction to move right
    fill(color(225,165,165))
  }

  //rect(x, y, 200, 75);
  textSize(100)
  text("DVD", x-5, y+75)
}