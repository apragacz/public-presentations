function () {

    var addToPrototype = function (objPrototype, superPrototype, name, replacementFunction, addSuperFunProp) {
        var superFunction = superPrototype[name];
        var newCoreFunction = replacementFunction;
        var newFunction = replacementFunction;
        if (superFunction && addSuperFunProp) {
            newFunction = function () {
                var tmpSuperFunction = this.__superfunction__;
                var tmpSuper = this.__super__;
                this.__superfunction__ = superFunction;
                this.__super__ = superPrototype;
                var returnValue = newCoreFunction.apply(this, arguments);
                this.__superfunction__ = tmpSuperFunction;
                this.__super__ = tmpSuper;
                return returnValue;
            };
        }
        objPrototype[name] = newMethod;
    };

    var arrayContains = function (arr, elem) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === elem) {
                return true;
            }
        }
        return false;
    }

    window.extendPrototype = function (objConstructor, prototypeExt, superFunPropertyFuns) {
        var superPrototype = objConstructor.prototype;
        var newPrototype = {};

        //shallow copy
        for (name in superPrototype) {
            newPrototype[name] = superPrototype[name];
        }

        for (name in prototypeExtension) {
            var addSuperFunProp = false;
            if (typeof (superFunPropertyFuns) === 'undefined') {
                addSuperFunProp = true;
            } else if (superFunPropertyFuns === null) {
                addSuperFunProp = true;
            } else if (arrayContains(superFunPropertyFuns, name)) {
                addSuperFunProp = true;
            } else {
                addSuperFunProp = false;
            }
            addToPrototype(newPrototype, superPrototype, name, prototypeExt[name], addSuperFunProp);

            objConstructor.prototype = newPrototype;
        }
    };

    window.createObjectConstructor = function () {
        var constructor = function (params) {
            params || (params = {});
            this.init(params);
        };
        return constructor;
    };

}();
