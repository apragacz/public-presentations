var size = 20;
var sides  = 5;

ctx.shadowOffsetX = 4;
ctx.shadowOffsetY = 4;
ctx.shadowBlur = 4;
ctx.shadowColor = "rgba(0,0,0,0.5)";

ctx.fillStyle = "rgba(255,0,0,0.5)";
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
ctx.fill();
