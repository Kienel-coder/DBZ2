

window.onload = function () 
{
      var xDiv = document.createElement("div");
      xDiv.id = "anim_container";
      xDiv.style.left = "80px";
      xDiv.style.top = "80px";
      xDiv.style.position = "fixed";    

      var Canv = document.createElement("CANVAS");
      Canv.id = "canvas";
      Canv.style.position = "absolute";

      var Kontejner = document.createElement("div");
      Kontejner.id = "dom_overlay_container";
      Kontejner.style.position = "absolute";

      document.body.appendChild(xDiv);
      document.body.appendChild(Canv);
      document.body.appendChild(Kontejner);
      document.getElementById('anim_container').appendChild(Canv);
      document.getElementById('anim_container').appendChild(Kontejner);

      init();
   }

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("BC6127D038D5004783D1711C365B33AC");
	var lib=comp.getLibrary();
	createjs.MotionGuidePlugin.install();
	handleComplete({},comp);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.Snih();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}