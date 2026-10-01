let explosionTextSize = 150;
let moonXOffset = 0;
let moonYOffset = 0;
let backgroundColorR = 25;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    
    moonXOffset += 0.5;
    moonYOffset += 0.4;

    background(backgroundColorR, 0, 0);

    //moon
    fill(255, 0, 0);
    stroke(255, 55, 10);
    strokeWeight(5);
    circle(700 - moonXOffset, 110 + moonYOffset , 100);

    stroke(0);
    strokeWeight(0);  


    //moon holes
    fill(225, 0, 0);
    circle(715 - moonXOffset, 130 + moonYOffset, 25);
    circle(675 - moonXOffset, 125 + moonYOffset, 15);
    circle(700 - moonXOffset, 100 + moonYOffset, 30);
    circle(725 - moonXOffset, 80 + moonYOffset, 15)

    //explosion

    if(moonYOffset > 350)
        {
            textSize(explosionTextSize)
            text("💥", 175, 550)
            backgroundColorR = 250
        }
        else backgroundColorR += 0.05;

    
    textSize(100)
    text("🪾", 475, 500)

    textSize(10)
    text(`${mouseX}, ${mouseY}`, 20, 20);   
    text(`${moonYOffset}`, 20, 50);   

    //grass
    strokeWeight(1);
    fill("brown");
    arc(400, 620, 1500, 220, PI, TWO_PI);
}
