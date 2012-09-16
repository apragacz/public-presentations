function () {

    /*
     *
     *    SPRITES
     *
     */

    SpritePrototype = {

        init: function (params) {
            this.x = params.x || 0;
            this.y = params.y || 0;
            this.rot = params.rot || 0;
            this.draw = this.defaultDraw;
            this.action = this.defaultAction;
        },

        startDraw: function (canvasContext) {
            //EXAMPLE: transformations
            //EXAMPLE: save
            canvasContext.save()
            canvasContext.translate(this.x, this.y);
            canvasContext.rotate(this.rot);
            //canvasContext.
        },

        drawCore: function (canvasContext) {
            //TODO:
        },

        endDraw: function (canvasContext) {
            //EXAMPLE: restore
            canvasContext.restore();
        },

        defaultDraw: function (canvasContext) {
            this.startDraw(canvasContext);
            this.drawCore(canvasContext);
            this.endDraw(canvasContext);
        },

        defaultAction: function (envContext) {
        },

        getWidth: function () {
            return 0;
        },

        getHeight: function () {
            return 0;
        },

        getXDev: function () {
            return this.getWidth() / 2;
        },

        getYDev: function () {
            return this.getHeight() / 2;
        }
    };

    MovableSpritePrototype = {

        init: function (params) {
            this.__superfunction__.init.call(this, params);
            this.xUpdate = params.xUpdate || 0;
            this.yUpdate = params.yUpdate || 0;
            this.rotUpdate = params.rotUpdate || 0;
        },

        defaultAction: function (envContext) {
            this.x += this.xUpdate;
            this.y += this.yUpdate;
            this.rot += this.rotUpdate;
            if (envContext.isXCollision(this)) {
                this.xUpdate = -this.xUpdate;
            }
            if (envContext.isYCollision(this)) {
                this.yUpdate = -this.yUpdate;
            }
        }
    };

    ImageSpritePrototype = {

        init: function (params) {
            this.__superfunction__.init.call(this, params);
            this.image = params.image;
        },

        drawCore: function (params) {
            //EXAMPLE: draw image

        }

        getWidth: function () {
            return this.image.width;
        },

        getHeight: function () {
            return this.image.height;
        }

    };

    ImageSpritePrototype = {

        init: function (params) {
            this.__superfunction__.init.call(this, params);
            this.image = params.image;
        },

        drawCore: function (params) {
            //EXAMPLE: draw image

        }

        getWidth: function () {
            return this.image.width;
        },

        getHeight: function () {
            return this.image.height;
        }

    };

    var funsWithSuperProp = ['init']

    window.ImageMovableSprite = createObjectConstructor();
    extendPrototype(ImageMovableSprite, SpritePrototype, funsWithSuperProp);
    extendPrototype(ImageMovableSprite, MovableSpritePrototype, funsWithSuperProp);
    extendPrototype(ImageMovableSprite, ImageSpritePrototype, funsWithSuperProp);

    GradientMovableSprite = createObjectConstructor();
    RectMovableSprite = createObjectConstructor();
    PentagonMovableSprite = createObjectConstructor();
    //TODO:

    console.log(window.ImageMovableSprite);


}();
