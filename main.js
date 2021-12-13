nosex=0;
nosey=0;

function preload(){
clown= loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}

function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()

poseNet=ml5.poseNet(video,modeloaded)
poseNet.on('pose',gotposes)
}

function gotposes(result){
if(result.length>0){
console.log(result)    
nosex=result[0].pose.nose.x-15
nosey=result[0].pose.nose.y-15
console.log("nose x ="+nosex)
console.log("nose y ="+nosey)
}  

}

function modeloaded(){
    console.log("poseNet is initialized")
}

function draw(){
    image(video,0,0,300,300)
    image(clown,nosex,nosey,30,30)
    //fill(255,0,0)
    //stroke(2550,0,0)
    //circle(nosex,nosey,30)
}