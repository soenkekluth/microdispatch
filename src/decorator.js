import MicroDispatch from './microdispatch';

export default (target) => {

  const micro = new MicroDispatch();
  micro.on = micro.on.bind(micro);
  micro.off = micro.off.bind(micro);
  micro.dispatch = micro.dispatch.bind(micro);

  const t = target.prototype ? target.prototype : target;

  if (!t.dispatch) {
    t.dispatch = micro.dispatch;
  }
  if (!t.on) {
    t.on = micro.on;
  }
  if (!t.off) {
    t.off = micro.off;
  }

  if (!target.prototype) {
    t.__microDispatch = micro;
  }
}
