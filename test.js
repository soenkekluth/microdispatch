import test from 'ava';
import MicroDispatch, {microdispatch} from './lib/microdispatch';

const emitter = new MicroDispatch();

test('dispatches type and evt obj', t => {

  emitter.on('test', (e)=>{
    t.true(e.type === 'test');
    t.true(e.foo === 'bar');
  })

  emitter.emit('test', {foo:'bar'});
});


test('adds handler only ones', t => {

	let counter = 0;
	const handler = (e) => {
    t.true(e.type === 'test');
    t.true(e.foo === 'bar');
    counter += 1;
    console.log('++counter', counter);
    t.true(counter === 1);
  };

  emitter.on('test', handler);
  emitter.on('test', handler);

  emitter.emit('test', {foo:'bar'});
});



test('decorator', t => {

  class Tester {
  	onTest(e){
  		t.true(e.type === 'test');
  		t.true(e.foo === 'bar');
  	}
  }

  microdispatch(Tester);

  const tt = new Tester();

  tt.on('test', tt.onTest);
  tt.dispatch('test', {foo:'bar'});
});
