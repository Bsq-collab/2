//Bayan Berri-- B^2
//SoftDev2 pd7
//K02--They lock us in the tower whenever we get caught ...which is often
//2018-02-08

var c=document.getElementById("slate"); //gets the canvas tag
var ctx=c.getContext("2d");//obj info

//Getting the button values
var stop=document.getElementById("stop");
var animate=document.getElementById("animate");

var radius=1;

var reqID;
var growth=true;//state variable
var color=0


var changeState=function(radius){
  if(radius>=300){
    console.log("changing it to false");
    growth=false;
  }
  else if(radius<=1){

    growth=true;
  }
}

//this draws the circle with an outline of black and a fill color of cyan
var circle= function(){
  ctx.fillStyle="hsl(" + color++ + ",100%,80.5%)";
  ctx.beginPath();
  ctx.clearRect(0,0,600,600);
  ctx.arc(300,300,radius,0,2*Math.PI);//subtracting to center the mouse click
  ctx.fill();
  ctx.stroke();
  changeState(radius);
  if(growth){
    radius+=1;
    console.log("increasing: "+ radius);
  }
  else{
    radius-=1;
    console.log("decreasing: "+radius);
  }
  reqID=window.requestAnimationFrame(circle);

  console.log("reqID==: "+ reqID);
}

var clearCanvas= function(){
  ctx.clearRect(0,0,600,600)
}

var stopAnimation=function(){
  window.cancelAnimationFrame(reqID);
}
animate.addEventListener("click",circle);
stop.addEventListener("click",stopAnimation);
clearCanvas();
