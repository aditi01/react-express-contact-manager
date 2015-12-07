var expect = require('chai').expect;

describe('Sample test suite', function() {
	var name = 'aditi';
	it('Checking if variable name is a string', function() {
		expect(name).to.be.a('string');
		expect(name).to.equal('aditi');
	})
})

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     });
//   });
// })