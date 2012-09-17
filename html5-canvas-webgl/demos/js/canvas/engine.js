(function () {

    CanvasEnginePrototype = {

        init: function (params) {
            this.initParams = params;
            this.canvas = params.canvas;
            this.ctx = this.getContext(this.canvas);

            this.actionPeriod = 50;
            this.actionTimeout = null;
            this.action = this.defaultAction;

            this.drawPeriod = 50;
            this.drawTimeout = null;
            this.draw = this.defaultDraw;
            this.drawBackground = this.drawBlackBackground;

            this.sprites = [];
            var self = this;
            this.env = {
                isXCollision: function (sprite) {
                    if (self.canvas.width < sprite.x + sprite.getXDev() ) return true;
                    if (sprite.x - sprite.getXDev() < 0 ) return true;
                    return false;
                },
                isYCollision: function (sprite) {
                    if (self.canvas.height < sprite.y + sprite.getYDev()) return true;
                    if (sprite.y - sprite.getYDev() < 0 ) return true;
                    return false;
                }
            };
            this.ctxExt = {

            };
        },

        getContext: function (canvas) {
            return canvas.getContext("2d");
        },

        defaultDraw: function () {
            this.drawBackground();
            for (var i = this.sprites.length - 1; i >= 0; i--) {
                this.sprites[i].draw(this.ctx, this.ctxExt);
            }
        },

        drawBlackBackground: function () {
            this.ctx.fillStyle = "rgb(0,0,0)";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        },

        drawGradientBackground: function () {
            this.ctx.fillStyle = "rgb(0,0,0)";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        },

        drawCallback: function () {
            var self = this;
            this.draw();
            this.drawTimeout = setTimeout(function () {
                self.drawCallback();
            }, this.drawPeriod);
        },

        defaultAction: function () {
            for (var i = this.sprites.length - 1; i >= 0; i--) {
                this.sprites[i].action(this.env);
            }
        },

        actionCallback: function () {
            var self = this;
            this.action();
            this.actionTimeout = setTimeout(function () {
                self.actionCallback();
            }, this.actionPeriod);
        },

        addSprite: function (sprite) {
            this.sprites.push(sprite);
        },

        resetSprites: function () {
            this.sprites.length = 0;
        },

        start: function (params) {
            params || (params = {});
            this.startParams = params;
            this.actionCallback();
            this.drawCallback();
        },

        stop: function () {
            clearTimeout(this.actionTimeout);
            clearTimeout(this.drawTimeout);
        }
    };

    var funsWithSuperProp = ['init'];

    window.CanvasEngine = createObjectConstructor();
    extendPrototype(CanvasEngine, CanvasEnginePrototype, funsWithSuperProp);

}).call(this);
