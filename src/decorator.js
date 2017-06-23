export default (target) => {
  if(target.prototype && !target.prototype.dispatch){
    wrap(target);
  }
}

function wrap(target, fnName, fn) {
  const { prototype } = target;
  const origin = prototype[fnName];
  prototype[fnName] = fn;
}
