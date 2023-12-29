function preload(){

}

function shownext(){
    document.getElementById("Snapshot").style.display="block";
}

function setup(){
    canvas=createCanvas(750,460);
    canvas.position(200,220);
    video=createCapture(VIDEO);
    video.hide();
  }
  
function draw() {
    image(video,230,150,220,200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    fill(0,0,0);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(580,90,20,300);
  }

  function takesnapshot(){
    save('anything.png');

  }
