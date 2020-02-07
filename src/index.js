import './file2';

const a = Promise.resolve('foo');

const obj = {foo: 'bar'};
console.log({bar: 'qux', ...obj});