//Create canvas 1. metoda
var canv=document.createElement("canvas");
canv.setAttribute("id", "canvasID");
document.body.appendChild(canv);

//Druhá metoda
createCanvas();
   function createCanvas() {
      var x = document.createElement("CANVAS");
	   x.id = "canvas3";
      /*var ctx = x.getContext("2d");
      ctx.fillStyle = "#C7EA46";
      ctx.beginPath();
      ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();*/
      document.body.appendChild(x);
   }

