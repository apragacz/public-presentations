var size = 20;
var sides  = 5;

ctx.strokeStyle = "rgb(255,255,0)";
ctx.lineWidth = 6;
ctx.lineJoin = "bevel";

ctx.beginPath();
var angle = 0;
var x = Math.cos(angle);
var y = Math.sin(angle);
ctx.moveTo(size * x, size * y);
for (var i = 1; i <= this.sides; i++) {
    angle = 2 * i * Math.PI / sides;
    x = Math.cos(angle);
    y = Math.sin(angle);
    ctx.lineTo(size * x, size * y);
}
ctx.closePath();
ctx.stroke();
