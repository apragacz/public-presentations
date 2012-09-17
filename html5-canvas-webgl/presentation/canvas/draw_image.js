image = Image();
image.src = 'img/megusta.png';
...
// assuming image is loaded
...
// drawing image (semi-transparent)
ctx.globalAlpha = 0.8;
ctx.drawImage(image, x, y);

// scaling
ctx.drawImage(image, x, y, width, height);

// cropping + scaling
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
