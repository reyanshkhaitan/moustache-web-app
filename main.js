x = 0;
y = 0;

function preload() { 
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function modelLoaded(){
    console.log("model initialized");
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log(" x = " + results[0].pose.nose.x);
        console.log(" y = " + results[0].pose.nose.y);
        x = results[0].pose.nose.x-22;
        y = results[0].pose.nose.y+8;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache,x,y,50,30);
}

function take_snapshot(){
    save('moustache.png');
}