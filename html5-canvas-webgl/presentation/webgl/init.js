//assuming we have the canvas object
var gl = null;
try {
    gl = canvas.getContext("experimental-webgl");
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
} catch (e) {
}
if (!gl) {
    alert("Could not initialise WebGL, sorry :-(");
}
