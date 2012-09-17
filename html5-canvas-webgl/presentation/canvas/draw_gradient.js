var lingrad = ctx.createLinearGradient(0,0,
        canvas.width, canvas.height);
lingrad.addColorStop(0, '#00ABEB');
lingrad.addColorStop(0.5, '#fff');
lingrad.addColorStop(0.5, '#26C000');
lingrad.addColorStop(1, '#fff');
ctx.fillStyle = lingrad;
ctx.fillRect(0, 0, canvas.width, canvas.height);
