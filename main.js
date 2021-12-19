video="";
status="";

function preload(){

}

function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,380,380);
}

function start(){
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status:Detecting Objects";
}

function modelLoaded(){
console.log("modelLoaded");
status=true;
}