gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.enable(gl.DEPTH_TEST);
var mvMatrix = mat4.create();
var pMatrix = mat4.create();
//mat4 is from glMatrix library
//setting projection matrix to perspective with fov=45
mat4.perspective(45, gl.viewportWidth / gl.viewportHeight,
        0.1, 100.0, pMatrix);
//setting modelview matrix to identity
mat4.identity(mvMatrix);
