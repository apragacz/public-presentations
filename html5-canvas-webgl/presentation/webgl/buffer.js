var triangleVertexPositionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
var vertices = [
     0.0,  1.0,  0.0,
    -1.0, -1.0,  0.0,
     1.0, -1.0,  0.0
];
//binding data to current buffer
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices),
      gl.STATIC_DRAW);

