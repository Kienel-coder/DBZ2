

window.onload = function () 
{
      var xDiv = document.createElement("div");
      xDiv.id = "PlochaCanvas";
      xDiv.style.left = "100px";
      xDiv.style.top = "100px";
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
      document.getElementById('PlochaCanvas').appendChild(Canv);
      document.getElementById('PlochaCanvas').appendChild(Kontejner);

      init();
   }

let Canvas, stage, exportRoot, PlochaAnimace, dom_overlay_container, StartAnimation;
function init() 
{
	Canvas = document.getElementById("canvas");
	PlochaAnimace = document.getElementById("PlochaCanvas");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("9ECEE2925C2F5A46B738C7CB128A5261");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}

function handleComplete(evt,comp) 
{
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) 
        {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.Textbox();
	stage = new lib.Stage(canvas);	

	//Start + Událost "tick" při animaci
	StartAnimation = function() 
        {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
        }
	    
	//Kód pro podporu high DPI a škálování kvality obrazu
	AdobeAn.makeResponsive(false,'both',false,1,[Canvas,PlochaAnimace,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	StartAnimation();
}