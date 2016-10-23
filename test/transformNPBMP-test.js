// running transformNPBMP on 'transnon-palette-bitmap.bmp' (transformed original) 
// should = 'non-palette.bitmap.bmp' (original)

const assert = require('chai').assert;
const transformNPBMP = require('../lib/transformNPBMP');
const fs = require('fs');
const buffer = 'data/transnon-palette-bitmap.bmp';

//original .bmp
var expectedResult;
fs.readFile('data/non-palette-bitmap.bmp', function read(err, data) {
  if (err) {
    throw err;
  }
  expectedResult = data;
  console.log(expectedResult);
});

describe('transformNPBMP', function() {
  it('twice-transformed .bmp should equal original .bmp', done => {
    transformNPBMP(buffer, (err, contents) => {
  	if (err) return done(err);
	  assert.deepEqual(contents,expectedResult);
  	done();
    });
  });
});