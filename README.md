[![Build Status](https://travis-ci.org/soenkekluth/microdispatch.svg?branch=master)](https://travis-ci.org/soenkekluth/microdispatch)

# MicroDispatcher
minimal and performant event dispatcher / emitter supporting custom event objects


## Usage

### create instance
```js
import MicroDispatch from 'microdispatch';

const micro = new MicroDispatch();

micro.on('test', (e)=>{
  console.log(e.type === 'test');
  console.log(e.foo === 'bar');
});

micro.dispatch('test', {foo:'bar'});

```

### use global instance
```js
import {dispatcher} from 'microdispatch';

dispatcher.on('test', (e)=>{
  console.log(e.type === 'test');
  console.log(e.foo === 'bar');
});

dispatcher.emit('test', {foo:'bar'});

```

### use decorator
```js
import {microdispatch} from 'microdispatch';

//v1: use es7 decorators
@microdispatch
class Tester {
	onTest(e){
		console.log(e.type === 'test');
		console.log(e.foo === 'bar');
	}
}

//v2 use the decorator as a function
microdispatch(Tester);

const tt = new Tester();

tt.on('test', tt.onTest);
tt.dispatch('test', {foo:'bar'});
```
