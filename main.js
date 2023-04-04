rightWristX = 0;
leftWristX = 0;
difference = 0;
noseX = "";
noseY = "";

function setup() {
    canvas = createCanvas(550, 450);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 550);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is initialised');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("right wrist = " + rightWristX + "left wrist = " + leftWristX + "difference = " + difference);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    background('#b4d6c4');
    fill('white');
    stroke('black');
    textSize(difference);
    text("Tvisha", noseX, noseY);

}