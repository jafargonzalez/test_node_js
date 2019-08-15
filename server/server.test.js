const supertest = require('supertest');

var app = require(./server).app;

it('Test ok',(done) => {
  request(app)
    .get('/')
    .expect('Hello world!')
    .end(done);
});
