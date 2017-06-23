import test from 'ava';

const MicroDispatch = require('./src/microdispatch');
const dispatcher = new MicroDispatch();

test('dispatches type and evt obj', t => {

  dispatcher.on('test', (e)=>{
    t.true(e.type === 'test');
    t.true(e.foo === 'bar');
  })

  dispatcher.dispatch('test', {foo:'bar'});
});
