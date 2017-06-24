import test from 'ava';
import MicroDispatch, {dispatcher} from './lib/microdispatch';

const microDispatcher = new MicroDispatch();

test('dispatches type and evt obj', t => {

  microDispatcher.on('test', (e)=>{
    t.true(e.type === 'test');
    t.true(e.foo === 'bar');
  })

  microDispatcher.dispatch('test', {foo:'bar'});
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

  microDispatcher.on('test', handler);
  microDispatcher.on('test', handler);

  microDispatcher.dispatch('test', {foo:'bar'});
});



test('decorator', t => {

  class Tester {
  	onTest(e){
  		t.true(e.type === 'test');
  		t.true(e.foo === 'bar');
  	}
  }

  dispatcher(Tester);

  const tt = new Tester();

  tt.on('test', tt.onTest);
  tt.dispatch('test', {foo:'bar'});
});
