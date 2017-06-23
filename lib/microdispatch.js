Object.defineProperty(exports, '__esModule', { value: true });

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var MicroDispatch = function () {
  function MicroDispatch(target) {
    classCallCheck(this, MicroDispatch);

    this.types = {};
    this.target = target || this;
  }

  MicroDispatch.prototype.on = function on(type, handler) {
    if (!this.types[type]) {
      this.types[type] = [];
    }
    this.types[type].push(handler);
    return this;
  };

  MicroDispatch.prototype.off = function off(type, handler) {
    if (this.types[type]) {
      this.types[type].splice(this.types[type].indexOf(handler), 1);
    }
    return this;
  };

  MicroDispatch.prototype.dispatch = function dispatch(type, obj) {
    var evtObj = obj || {};
    if (!evtObj.target) {
      evtObj.target = this.target;
    }
    evtObj.type = type;
    if (this.types[type]) {
      for (var i = 0, l = this.types[type].length; i < l; i++) {
        this.types[type][i](evtObj);
      }
    }
    return this;
  };

  return MicroDispatch;
}();

exports['default'] = MicroDispatch;
//# sourceMappingURL=microdispatch.js.map
