(function () {

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
            this.scaleFactor = params.scale || 1;
            this.draw = this.defaultDraw;
            this.action = this.defaultAction;
        },

        startDraw: function (ctx, ctxExt) {
            //EXAMPLE: transformations
            //EXAMPLE: save
            ctx.save()
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rot);
            ctx.scale(this.scaleFactor,this.scaleFactor);
        },

        drawCore: function (ctx, ctxExt) {
            //does nothing by default
        },

        endDraw: function (ctx, ctxExt) {
            //EXAMPLE: restore
            ctx.restore();
        },

        defaultDraw: function (ctx, ctxExt) {
            this.startDraw(ctx, ctxExt);
            this.drawCore(ctx, ctxExt);
            this.endDraw(ctx, ctxExt);
        },

        defaultAction: function (env) {
            //does nothing by default
        },

        getNaturalWidth: function () {
            return 0;
        },

        getNaturalHeight: function () {
            return 0;
        },

        getWidth: function () {
            return this.scaleFactor * this.getNaturalWidth();
        },

        getHeight: function () {
            return this.scaleFactor * this.getNaturalHeight();
        },

        getNaturalXDev: function () {
            return this.getNaturalWidth() / 2;
        },

        getNaturalYDev: function () {
            return this.getNaturalHeight() / 2;
        },

        getXDev: function () {
            return this.getWidth() / 2;
        },

        getYDev: function () {
            return this.getWidth() / 2;
        }
    };

    MovableSpritePrototype = {

        init: function (params) {
            this.__super__.init.call(this, params);
            this.xUpdate = params.xUpdate || 0;
            this.yUpdate = params.yUpdate || 0;
            this.rotUpdate = params.rotUpdate || 0;
        },

        defaultAction: function (env) {
            this.x += this.xUpdate;
            this.y += this.yUpdate;
            this.rot += this.rotUpdate;
            if (env.isXCollision(this)) {
                this.xUpdate = -this.xUpdate;
            }
            if (env.isYCollision(this)) {
                this.yUpdate = -this.yUpdate;
            }
        }
    };

    ImageSpritePrototype = {

        init: function (params) {
            this.__super__.init.call(this, params);
            this.image = params.image;
            this.width = params.width || this.image.width || this.image.naturalWidth;
            this.height = params.height || this.image.height || this.image.naturalHeight;
            console.log(this.image);
            console.log(this.width);
            console.log(this.height);
        },

        drawCore: function (ctx, ctxExt) {
            //EXAMPLE: draw image
            //console.log('draw image')
            ctx.drawImage(this.image, -this.getNaturalXDev(), -this.getNaturalYDev());
        },

        getNaturalWidth: function () {
            return this.width;
        },

        getNaturalHeight: function () {
            return this.height;
        }

    };

    NGonSpritePrototype = {

        init: function (params) {
            this.__super__.init.call(this, params);
            this.sides = params.sides || 3;
            this.size = params.size || 20;
            this.fillColor = params.fillColor || "rgb(255,0,0)"
        },

        drawCore: function (ctx, ctxExt) {
            //EXAMPLE: draw path
            ctx.fillStyle = this.fillColor;
            ctx.beginPath();
            ctx.moveTo(0, this.size);
            //console.log('draw ngon');
            for (var i = 0; i <= this.sides; i++) {
                var angle = 2 * i * Math.PI / this.sides;
                var x = Math.cos(angle);
                var y = Math.sin(angle);
                ctx.lineTo(this.size * x, this.size * y);
            }
            ctx.closePath();
            ctx.fill();
            //ctx.stroke();
        },

        getNaturalWidth: function () {
            return this.size * 2;
        },

        getNaturalHeight: function () {
            return this.size * 2;
        }
    };

    var funsWithSuperProp = ['init'];

    window.ImageMovableSprite = createObjectConstructor();
    extendPrototype(ImageMovableSprite, SpritePrototype, funsWithSuperProp);
    extendPrototype(ImageMovableSprite, MovableSpritePrototype, funsWithSuperProp);
    extendPrototype(ImageMovableSprite, ImageSpritePrototype, funsWithSuperProp);

    window.NGonMovableSprite = createObjectConstructor();
    extendPrototype(NGonMovableSprite, SpritePrototype, funsWithSuperProp);
    extendPrototype(NGonMovableSprite, MovableSpritePrototype, funsWithSuperProp);
    extendPrototype(NGonMovableSprite, NGonSpritePrototype, funsWithSuperProp);

    GradientMovableSprite = createObjectConstructor();
    RectMovableSprite = createObjectConstructor();
    //TODO:

}).call(this);
