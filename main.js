status = "";
output = [];

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}

function draw()
{
    image(video, 0, 0, 480, 380);
    if(status != "")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < output.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: " + output.length;

            fill("#FF0000");
            percent = floor(output[i].confidence * 100);
            text(output[i].label + " " + percent + "%", output[i].x + 15, output[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(output[i].x, output[i].y, output[i].width, output[i].height);
        if(output[i].label == )
        {
            document.getElementById("object_status").inerHTML = object_name + "Found";
            
        }
        }
    }
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    output = results;
}

