const utils = require('./utils');
const expect = require('expect');

it('Test' ,() =>{
  var res=utils.add(33,12);

  expect(res).toBe(45).toBeA('number');
});
