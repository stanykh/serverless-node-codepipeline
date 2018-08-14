'use strict';

const hello = require('../src/hello');
const chai = require('chai');
const expect = chai.expect;

describe('Simple test', () => {  
  describe('#hello() test', () => {  
    it('should have message', function(done) {
      hello.hello(null, null, function (err, response) {
        expect(response).to.deep.equal({message: 'Serverless: Hello World!'});
        done();
      });
    });
  });
});