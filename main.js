// Animation Intro

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width= 600;
cnv.height = 400;

// Global Variable
let rectX = 100;
let rectY = 150;
let rectSize = 80;
let rectBlue = 255;
let rectRed = 0;
let mouseX;
let mouseY;

let animate = false;

// Main Program Loop (60 fps)
requestAnimationFrame(loop);
function loop() {
    // Update Variables
    
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 
      
    // Calc mouse coordinates using mouse event and canvas location info
    // mouseX = Math.round(event.clientX - cnvRect.left);
    // mouseY = Math.round(event.clientY - cnvRect.top);

    if (mouseX > rectX && mouseX < rectX + 80 && mouseY > rectY && mouseY < rectY + 80) {
    animate = !animate; 
        }

    if(animate) {
    rectX += Math.random() * 10 - 5;
    rectY += Math.random() * 10 - 5;
    rectSize += Math.random() * 2 - 1;
    rectBlue--;
    rectRed++;
    }
    

    // Draw a Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    // Draw a Square
    // if(animate) {
    ctx.fillStyle = "rgb(" + rectRed +", 0," + rectBlue + ")";
    ctx.fillRect(rectX, rectY, rectSize, rectSize);
   // } 
    requestAnimationFrame(loop);
}


// // Event Stuff
// document.addEventListener("keydown", keydownHandler);


// function keydownHandler() {  
//     if (event.code == "Space") {
//     animate = !animate; 
//     }    
    
// }

// Event Stuff
// document.addEventListener("mouseover", mousehoverHandler);
   

// function mousehoverHandler(event) {  

//     // Get rectangle info about canvas location
//     let cnvRect = cnv.getBoundingClientRect(); 
      
//     // Calc mouse coordinates using mouse event and canvas location info
//     mouseX = Math.round(event.clientX - cnvRect.left);
//     mouseY = Math.round(event.clientY - cnvRect.top);

//     if (mouseX > rectX && mouseX < rectX + 80 && mouseY > rectSize && mouseY >) {
//     animate = !animate; 
//     }    
    
// }
