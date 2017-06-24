export default class MicroDispatch {

  constructor(target) {
    this.types = {};
    this.target = target || this;
    this.emit = this.dispatch.bind(this);
  }

  on(type, handler) {
    if (!this.types[type]) {
      this.types[type] = [];
    }
    if (this.types[type].indexOf(handler) === -1) {
      this.types[type].push(handler);
    }
    return this;
  }

  off(type, handler) {
    if (this.types[type]) {
      if (handler) {
        this.types[type].splice(this.types[type].indexOf(handler), 1);
      } else {
        this.types[type].length = 0;
        delete this.types[type];
      }
    }
    return this;
  }

  dispatch(type, obj) {
    let evtObj = obj || {};
    if (!evtObj.target) {
      evtObj.target = this.target;
    }
    evtObj.type = type;
    if (this.types[type]) {
      for (let i = 0, l = this.types[type].length; i < l; i++) {
        this.types[type][i](evtObj);
      }
    }
    return this;
  }
}
