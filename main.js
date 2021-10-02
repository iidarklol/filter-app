function preload(){

}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide()
    PoseNet = ml5.poseNet(video, modelLoaded)
    PoseNet.on("pose", gotPose)
}

function draw(){
    image(video,0,0,300,300)
}

function modelLoaded(){
    console.log("PoseNet Loaded!");
}

function gotPose(results){
console.log(results);
    if(results.length > 0){
nose_x = results[0].pose.nose.x
nose_y = results[0].pose.nose.y
}
}