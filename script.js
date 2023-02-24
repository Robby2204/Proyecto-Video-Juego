const canvas = document.getElementById('canvas1');
const ctx = canvas.getcontext('2d');

const CANVAS_WIDTH = canvas.width = 600;
//Esto esta colocado con 600 pixeles ya que si no se coocan las medidas y se pone en automatico a veces las imagenes se distorcionan
//este lo comparte con el style.css
const CANVAS_HEIGHT = canvas.height = 600;
//Lo mismo con la altura

const playerImage = new Image();
playerImage.src = "shadowdog.png";
//en la sección de arriba se coloca una imagen

function animate(){
    ctx.clearRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillrect(50,50,100,100);
    ctx.drawImage(Image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate);
};
//funciona para la colocación de las imagenes
animate();
