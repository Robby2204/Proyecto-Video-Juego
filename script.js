const canvas = document.getElementById('canvas1');
const ctx = canvas.getcontext('2d');

const CANVAS_WIDTH = canvas.width = 600;
// Esto esta colocado con 600 pixeles ya que si no se coocan las medidas y se pone en automatico a veces las imagenes se distorcionan
// este lo comparte con el style.css
const CANVAS_HEIGHT = canvas.height = 600;
// Lo mismo con la altura

const playerImage = new Image();
playerImage.src = 'imagen de movimientos que hara roberto';
// en la sección de arriba se coloca una imagen

function animacion(){
    ctx.clearRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillrect(50,50,100,100);
    requestAnimationFrame(animate);
};

