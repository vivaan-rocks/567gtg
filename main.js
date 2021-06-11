img='';
status='';
objectDetector='';



function preload(){
    img=loadImage('bggbcanvsas.jpeg');
}
function draw(){
    image(img,0,0,600,500);
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF0000");
    rectangle(30,60,450,350);

    fill("#FF0000");
    text("CAT",320,120);
    noFill();
    stroke("#FF0000");
    rectangle(300,90,270,320);
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    status=true;
    objectDetector.detect(img,gotresult);
}

function gotresult(error,result){
    if (error){
        console.log(ERROR);
    }else{
        console.log(result);
    }
}
