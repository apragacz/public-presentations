gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

mat4.identity(mvMatrix);
mat4.translate(mvMatrix, [0.0, 0.0, -7.0]);

gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false,
        pMatrix);
gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false,
        mvMatrix);
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
        triangleVertexPositionBuffer.itemSize, gl.FLOAT,
        false, 0, 0);
gl.drawArrays(gl.TRIANGLES, 0,
        triangleVertexPositionBuffer.numItems);
