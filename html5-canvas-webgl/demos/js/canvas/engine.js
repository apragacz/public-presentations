    CanvasEngine = function () {
        this.drawCallback = null;
        this.drawTimeout = null;
        this.actionCallback = null;
        this.actionTimeout = null;
        this.sprites = [];
    };

    CanvasEngine.prototype.defaultDrawCallback = function () {

    };

    CanvasEngine.prototype.defaultActionCallback = function () {
        for (var i = this.sprites.length - 1; i >= 0; i--) {
            this.sprites[i].draw();
        }
    };



    CanvasEngine.prototype.start = function (params) {
        params || (params = {});
        this.params = params

    };

    CanvasEngine.prototype.stop = function () {
        params || (params = {});
        this.params = params;
        clearTimeout(this.actionTimeout);
        clearTimeout(this.drawTimeout);
    };

    CanvasEngine.prototype.defaultActionCallback = function () {
        for (var i = this.sprites.length - 1; i >= 0; i--) {
            this.sprites[i].draw()
        }
    };
