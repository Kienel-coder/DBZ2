window.onload = function () 
{
      var x = document.createElement("CANVAS");
      x.id = "canvasx";

        x.style.left = "700px";
        x.style.top = "0px";
        x.style.position = "absolute";

      /*var ctx = x.getContext("2d");
      ctx.fillStyle = "#C7EA46";
      ctx.beginPath();
      ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();*/
      document.body.appendChild(x);

        // GET THE IMAGE.
        let img = new Image();
        img.src = 'tygr.jpg';

        // WAIT TILL IMAGE IS LOADED.
        img.onload = function () {
            fill_canvas(img);       // FILL THE CANVAS WITH THE IMAGE.
        }

        function fill_canvas(img) {
            // CREATE CANVAS CONTEXT.
            let canvas = document.getElementById('canvasx');
            let ctx = canvas.getContext('2d');

            canvas.width = 700;//img.width;
            canvas.height =500;// img.height;

            //ctx.drawImage(img, 100, 100);       // DRAW THE IMAGE TO THE CANVAS.
            ctx.drawImage(img, 10, 10, 700, 500);
//ctx.drawImage(img, 90, 130, 50, 60, 10, 10, 50, 60);
        }
    }





