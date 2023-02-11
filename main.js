leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(10,80);

    canvas = createCanvas(550, 500);
    canvas.position(580, 125);

    poseNet = ml5.poseNet(video, modelDone);
    poseNet.on('pose', gotPoses);
}

function modelDone()
{
    console.log("PoseNet is Intialized and Loaded!!");
}

function draw()
{
    background("#e6f3ff");

    document.getElementById("Font-size").innerHTML = "Font Size Of The Text Will Be = "+ difference +"px";
    textSize(difference);
    fill("#66a3ff");
    text('Suzzie',50,450);
}

function gotPoses(results,error)
{
   if(error)
   {
    console.error(error);
   }

   if(results.length > 0)
   {
    console.log(results);

    leftWrist_x = results[0].pose.leftWrist.x;
    rightWrist_x = results[0].pose.rightWrist.x;

    difference = floor(leftWrist_x - rightWrist_x);

    console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
    console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
   }
}