//Bayan Berri-- B^2
//SoftDev2 pd7
//K02--They lock us in the tower whenever we get caught ...which is often
//2018-02-08

var c=document.getElementById("slate"); //gets the canvas tag
var ctx=c.getContext("2d");//obj info

//Getting the button values
var stop=document.getElementById("stop");
var animate=document.getElementById("animate");
var dvd_anim=document.getElementById("dvd");

var radius=1;//startsat one and increments

var reqID;//request ID useful for stopping
var growth=true;//state variable
var color=0//C0l0r3$

//for the dvd part:
var dvd=new Image();


var changeState=function(radius){
  if(radius>=300){//at tangent to the square it starts shrinking
    console.log("changing it to false");
    growth=false;
  }
  //when it reaches 1 radius it grows again
  else if(radius<=1){
    growth=true;
  }
}


var circle= function(){
  //draws a circle
  ctx.fillStyle="hsl(" + color++ + ",100%,80.5%)";
  ctx.beginPath();
  ctx.clearRect(0,0,600,600);//removes the trail (even though the trail pattern looked cool :( )
  ctx.arc(300,300,radius,0,2*Math.PI);//subtracting to center the mouse click
  ctx.fill();
  ctx.stroke();
  changeState(radius);//checks the radius
  if(growth){
    radius+=1;
    console.log("increasing: "+ radius);
  }
  else{
    radius-=1;
    console.log("decreasing: "+radius);
  }
  reqID=window.requestAnimationFrame(circle);//update request ID

  console.log("reqID==: "+ reqID);
}

var animateDVD = function() {
  //declares the variables
  var radius = 40;
  var x = 300;
  var y = 300
  var dx = Math.floor(Math.random() * 3) + 1;
  var dy = Math.floor(Math.random() * 3) + 1;
  //uses the variables declared above to draw
  var drawDVD = function() {
    ctx.fillStyle="hsl(" + color++ + ",100%,50%)";
    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    reqID = window.requestAnimationFrame(drawDVD);

    x += dx;
    y += dy;
    console.log("x,y: " +x+","+y);
    if (x <= radius || x >= 600 - radius) {
      dx = (Math.random() - 0.3)-dx;
    }
    if (y <= radius || y >= 600 - radius) {
      dy = (Math.random() - 0.3)-dy;
    }
  };

  drawDVD();
};

var stopAnimation=function(){
  window.cancelAnimationFrame(reqID);//stops it
}
animate.addEventListener("click",circle);
dvd_anim.addEventListener("click",animateDVD);
stop.addEventListener("click",stopAnimation);
