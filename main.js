
function preload(){
   
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    
}
function draw(){
    image(video,0,0,640,480);
    fill();
    stroke(0,0,120);
    rect(0,0,640,20);
    rect(0,460,640,20);
    rect(0,20,20,480);
    rect(620,20,20,480);
}
