function setup() { // The setup function is called when a sketch starts and is used to intialise variables, pin modes etc. this function will only run once.
  createCanvas(400, 400) //Creates a container to add graphics by using JavaScript
  background(255) //  This variable controls the rgb colour of the canvas
}

function square(x, y, size) {
  rect(x, y, size, size)
}

function roof(x, y, size) {
  triangle(x, y, x + size / 2, y - 30, x + size, y)
}

function house(x, y, size) {
  roof (x, y, size)
 square(x, y, size) 
}

function draw() { // The draw function contiunously executes the lines of code contained within its block. It is used typically for animations, in combination with incrementing variables that affect the shapes drawn.
  background(255)
  fill(255, 130, 0) // The fill variable infroms the program to fill the shape with the rgb colour inputted
  stroke(0) // the stroke variable controls the outline colour of the shape
  house(mouseX, mouseY, 80)
}









